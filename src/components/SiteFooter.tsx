import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/lang";
import { uiContent, contactData } from "@/data/content";

export function SiteFooter() {
  const { lang } = useLang();
  const t = uiContent[lang];
  const c = contactData[lang];

  return (
    <footer className="bg-footer text-footer-foreground border-t border-border/60 pt-20">
      <div className="mx-auto max-w-6xl px-6 py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5 space-y-4">
          <Link to="/" className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-sm bg-accent" />
            <span className="font-display text-lg font-semibold tracking-tight">NEOCRISTAL</span>
          </Link>
          <p className="text-sm text-footer-foreground/70 max-w-sm leading-relaxed">
            {t.footer.tagline}
          </p>
        </div>

        <div className="md:col-span-3 space-y-3 text-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-footer-foreground/50 font-medium">
            {t.nav.services}
          </p>
          <Link
            to="/services/windows"
            className="block text-footer-foreground/80 hover:text-footer-foreground transition-colors"
          >
            {lang === "en" ? "Windows" : "Ventanas"}
          </Link>
          <Link
            to="/services/doors"
            className="block text-footer-foreground/80 hover:text-footer-foreground transition-colors"
          >
            {lang === "en" ? "Doors" : "Puertas"}
          </Link>
          <Link
            to="/about"
            className="block text-footer-foreground/80 hover:text-footer-foreground transition-colors"
          >
            {t.nav.about}
          </Link>
        </div>

        <div className="md:col-span-4 space-y-3 text-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-footer-foreground/50 font-medium">
            {t.nav.contact}
          </p>
          <p className="text-footer-foreground/80">{c.address}</p>
          <p className="text-footer-foreground/80">{c.phone}</p>
          <a
            href={`mailto:${c.email}`}
            className="block text-footer-foreground/80 hover:text-footer-foreground transition-colors"
          >
            {c.email}
          </a>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-5 flex flex-wrap items-center justify-between gap-3 text-xs text-footer-foreground/60">
          <span>© {new Date().getFullYear()} Neocristal. {t.footer.rights}</span>
          <span className="font-display tracking-wide">Alicante · España</span>
        </div>
      </div>
    </footer>
  );
}
