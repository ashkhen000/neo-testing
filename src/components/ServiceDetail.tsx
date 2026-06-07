import { Link } from "react-router-dom";
import { useLang } from "@/lib/lang";
import { uiContent } from "@/data/content";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type ServiceContent = {
  title: string;
  subtitle: string;
  description: string;
  systems: readonly string[];
  benefits: readonly string[];
  process: readonly string[];
};

type Props = {
  data: { en: ServiceContent; es: ServiceContent };
  gallery: string[];
  heroImage: string;
};

export function ServiceDetail({ data, gallery, heroImage }: Props) {
  const { lang } = useLang();
  const t = uiContent[lang].service;
  const s = data[lang];
  const [active, setActive] = useState(0);

  return (
    <article>
      {/* Header */}
      <section className="bg-gradient-soft border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <Link to="/services" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
            {t.backToServices}
          </Link>
          <div className="mt-4 grid md:grid-cols-2 gap-10 items-center">
            <div className="animate-fade-up">
              <h1 className="text-3xl md:text-4xl font-semibold leading-tight">{s.title}</h1>
              <p className="mt-3 text-base text-accent font-medium">{s.subtitle}</p>
              <p className="mt-5 text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card aspect-[4/3]">
              <img src={heroImage} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Systems */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-2xl font-semibold">{t.systemsTitle}</h2>
          <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {s.systems.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-border bg-card px-4 py-3 text-sm shadow-soft"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Benefits — MANDATORY */}
      <section className="bg-gradient-beige border-y border-border/50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-end justify-between flex-wrap gap-3">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{t.benefitsTitle}</h2>
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              {String(s.benefits.length).padStart(2, "0")}
            </span>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-px bg-border/60 rounded-2xl overflow-hidden border border-border/60">
            {s.benefits.map((b, i) => (
              <div
                key={b}
                className="flex items-start gap-5 bg-card/90 backdrop-blur-sm p-6 hover:bg-card transition-colors"
              >
                <span className="font-display text-sm text-accent mt-0.5 tabular-nums tracking-tight">
                  0{i + 1}
                </span>
                <p className="text-sm leading-relaxed text-foreground/90">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-2xl font-semibold">{t.processTitle}</h2>
          <ol className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {s.process.map((step, i) => (
              <li key={step} className="rounded-xl border border-border bg-card p-5 shadow-soft">
                <div className="text-xs font-medium text-accent">0{i + 1}</div>
                <p className="mt-2 text-sm font-medium">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Gallery slider — compact */}
      <section className="bg-surface-grey">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <h2 className="text-xl font-semibold tracking-tight">{t.galleryTitle}</h2>
          <div className="mt-5 rounded-xl overflow-hidden shadow-soft aspect-[16/10] bg-muted">
            <img
              src={gallery[active]}
              alt=""
              className="w-full h-full object-cover transition-opacity duration-500"
              loading="lazy"
            />
          </div>
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {gallery.map((src, i) => (
              <button
                key={src}
                onClick={() => setActive(i)}
                className={`shrink-0 h-14 w-20 rounded-md overflow-hidden border transition-all ${
                  active === i
                    ? "border-foreground/60 opacity-100"
                    : "border-transparent opacity-60 hover:opacity-90"
                }`}
              >
                <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center">
          <Button asChild size="lg">
            <Link to="/contact">{t.ctaContact}</Link>
          </Button>
        </div>
      </section>
    </article>
  );
}
