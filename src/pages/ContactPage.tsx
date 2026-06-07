import { PageShell } from "@/components/PageShell";
import { ContactForm } from "@/components/ContactForm";
import { useLang } from "@/lib/lang";
import { contactData, uiContent } from "@/data/content";

export default function ContactPage() {
  const { lang } = useLang();
  const t = uiContent[lang].contact;
  const c = contactData[lang];

  const rows: { label: string; value: string }[] = [
    { label: t.address, value: c.address },
    { label: t.phone, value: c.phone },
    { label: "Email", value: c.email },
    { label: t.hours, value: c.hours },
  ];

  return (
    <PageShell>
      <section className="bg-gradient-soft border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium">
            {uiContent[lang].nav.contact}
          </span>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">{t.title}</h1>
          <p className="mt-3 text-muted-foreground max-w-xl">{t.subtitle}</p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-16 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <dl className="divide-y divide-border/60 border-y border-border/60">
              {rows.map((r) => (
                <div key={r.label} className="grid grid-cols-3 gap-4 py-4">
                  <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground self-center">
                    {r.label}
                  </dt>
                  <dd className="col-span-2 text-sm text-foreground">{r.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:col-span-3 rounded-2xl bg-card/70 backdrop-blur-md border border-border/60 shadow-card p-7 md:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
