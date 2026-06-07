import { Link } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { ContactForm } from "@/components/ContactForm";
import { useLang } from "@/lib/lang";
import { uiContent, aboutData, contactData } from "@/data/content";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import hero from "@/assets/hero.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import windowsImg from "@/assets/windows-card.jpg";
import doorsImg from "@/assets/doors-card.jpg";

export default function HomePage() {
  return (
    <PageShell>
      <Hero />
      <Gallery />
      <ServicesPreview />
      <AboutPreview />
      <ContactSection />
    </PageShell>
  );
}

function Hero() {
  const { lang } = useLang();
  const t = uiContent[lang].hero;

  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <img src={hero} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
            {t.eyebrow}
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-[1.1]">
            {t.title}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl">{t.subtitle}</p>
          <div className="mt-8">
            <Button asChild size="lg" className="group">
              <Link to="/services">
                {t.cta}
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const { lang } = useLang();
  const t = uiContent[lang].gallery;
  const images = [g1, g2, g3, g4, g1];

  return (
    <section className="bg-background border-y border-border/60">
      <div className="mx-auto max-w-6xl px-6 pt-14">
        <h2 className="text-2xl font-semibold">{t.title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{t.subtitle}</p>
      </div>
      <div className="mt-6 overflow-x-auto pb-10">
        <div className="flex gap-4 px-6 mx-auto max-w-[100rem] snap-x snap-mandatory">
          {images.map((src, i) => (
            <div
              key={i}
              className="snap-start shrink-0 w-[78vw] sm:w-[420px] aspect-[4/3] rounded-2xl overflow-hidden shadow-card"
            >
              <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  const { lang } = useLang();
  const t = uiContent[lang].servicesPreview;

  const items = [
    { to: "/services/windows" as const, title: lang === "en" ? "Windows" : "Ventanas", img: windowsImg, copy: lang === "en" ? "Casement, tilt & turn, sliding." : "Abatibles, oscilobatientes, correderas." },
    { to: "/services/doors" as const, title: lang === "en" ? "Doors" : "Puertas", img: doorsImg, copy: lang === "en" ? "Sliding, folding, motorized entries." : "Correderas, plegables, entradas motorizadas." },
  ];

  return (
    <section className="bg-gradient-beige">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">{t.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground max-w-md">{t.subtitle}</p>
          </div>
          <Link to="/services" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            {t.cta} →
          </Link>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 gap-5">
          {items.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              className="group rounded-2xl overflow-hidden bg-card border border-border/60 shadow-soft hover:shadow-card transition-shadow"
            >
              <div className="aspect-[5/3] overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{it.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{it.copy}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  const { lang } = useLang();
  const a = aboutData[lang];
  const t = uiContent[lang].aboutPreview;

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">{a.title}</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">{a.description}</p>
          <div className="mt-6">
            <Button asChild variant="outline">
              <Link to="/about">{t.cta}</Link>
            </Button>
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-3">
          {a.values.map((v) => (
            <li key={v} className="rounded-xl bg-secondary px-4 py-5 text-sm font-medium">
              {v}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ContactSection() {
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
    <section className="relative bg-gradient-soft border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium">
              {t.title}
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
              {t.subtitle}
            </h2>
          </div>
          <dl className="divide-y divide-border/60 border-y border-border/60">
            {rows.map((r) => (
              <div key={r.label} className="grid grid-cols-3 gap-4 py-3.5">
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
  );
}
