import { useState } from "react";
import { useLang } from "@/lib/lang";
import { uiContent } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

/*
 * Firebase wiring (commented for future use):
 *
 * import { initializeApp } from "firebase/app";
 * import { getFirestore, addDoc, collection } from "firebase/firestore";
 *
 * const firebaseConfig = { apiKey: "...", authDomain: "...", projectId: "...", storageBucket: "...", messagingSenderId: "...", appId: "..." };
 * const app = initializeApp(firebaseConfig);
 * const db = getFirestore(app);
 *
 * await addDoc(collection(db, "contactRequests"), payload);
 */

export function ContactForm() {
  const { lang } = useLang();
  const t = uiContent[lang].contact;
  const [submitting, setSubmitting] = useState(false);
  const [userType, setUserType] = useState<"individual" | "business">("individual");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const payload = { ...Object.fromEntries(formData.entries()), userType };
    console.log("contact payload", payload);
    await new Promise((r) => setTimeout(r, 600));
    toast.success(t.sent);
    (e.target as HTMLFormElement).reset();
    setUserType("individual");
    setSubmitting(false);
  }

  const fieldCls =
    "h-11 rounded-lg border-border/70 bg-background/60 backdrop-blur-sm focus-visible:ring-1 focus-visible:ring-foreground/30 focus-visible:border-foreground/40";

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field id="name" label={t.name}>
          <Input id="name" name="name" required className={fieldCls} />
        </Field>
        <Field id="surname" label={t.surname}>
          <Input id="surname" name="surname" required className={fieldCls} />
        </Field>
      </div>

      <Field id="phone" label={t.phone}>
        <Input id="phone" name="phone" type="tel" required className={fieldCls} />
      </Field>

      <div className="space-y-2">
        <Label className="text-xs uppercase tracking-[0.18em] text-muted-foreground font-medium">
          {t.userType}
        </Label>
        <div className="inline-flex rounded-lg border border-border/70 bg-background/60 p-1 backdrop-blur-sm">
          {(["individual", "business"] as const).map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setUserType(opt)}
              className={`px-4 h-9 text-sm rounded-md transition-all ${
                userType === opt
                  ? "bg-foreground text-background shadow-soft"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {opt === "individual" ? t.individual : t.business}
            </button>
          ))}
        </div>
      </div>

      <Field id="message" label={t.message}>
        <Textarea
          id="message"
          name="message"
          rows={4}
          className="rounded-lg border-border/70 bg-background/60 backdrop-blur-sm focus-visible:ring-1 focus-visible:ring-foreground/30 focus-visible:border-foreground/40 resize-none"
        />
      </Field>

      <Button
        type="submit"
        disabled={submitting}
        size="lg"
        className="w-full sm:w-auto h-11 px-7 rounded-lg"
      >
        {t.send}
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label
        htmlFor={id}
        className="text-xs uppercase tracking-[0.18em] text-muted-foreground font-medium"
      >
        {label}
      </Label>
      {children}
    </div>
  );
}
