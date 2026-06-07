import { Link, useLocation } from "react-router-dom";
import { useLang } from "@/lib/lang";
import { uiContent } from "@/data/content";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const { lang, setLang } = useLang();
  const t = uiContent[lang];
  const location = useLocation();

  const linkCls =
    "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors";
  const activeCls = "text-foreground";

  // Helper function to check if link path matches active route
  const getLinkClass = (path: string, exact = false) => {
    const isActive = exact 
      ? location.pathname === path 
      : location.pathname.startsWith(path);
    return `${linkCls} ${isActive ? activeCls : ""}`;
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-sm bg-accent" />
          <span className="font-display text-lg font-semibold tracking-tight">
            NEOCRISTAL
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          <Link to="/" className={getLinkClass("/", true)}>
            {t.nav.home}
          </Link>
          <Link to="/services" className={getLinkClass("/services")}>
            {t.nav.services}
          </Link>
          <Link to="/about" className={getLinkClass("/about")}>
            {t.nav.about}
          </Link>
          <Link to="/contact" className={getLinkClass("/contact")}>
            {t.nav.contact}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-full border border-border bg-card p-0.5 text-xs font-medium">
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 rounded-full transition-colors ${
                lang === "en" ? "bg-foreground text-background" : "text-muted-foreground"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("es")}
              className={`px-2.5 py-1 rounded-full transition-colors ${
                lang === "es" ? "bg-foreground text-background" : "text-muted-foreground"
              }`}
            >
              ES
            </button>
          </div>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/contact">{t.nav.contact}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
