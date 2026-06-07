import { Link } from "react-router-dom";
import { useLang } from "@/lib/lang";
import { servicesData, uiContent } from "@/data/content";
import windowsImg from "@/assets/windows-card.jpg";
import doorsImg from "@/assets/doors-card.jpg";

export default function ServicesIndexPage() {
  const { lang } = useLang();
  const s = servicesData[lang];

  const items = [
    {
      to: "/services/windows",
      title: lang === "en" ? "Windows" : "Ventanas",
      img: windowsImg,
      copy:
        lang === "en"
          ? "Casement, tilt & turn, sliding."
          : "Abatibles, oscilobatientes, correderas.",
    },
    {
      to: "/services/doors",
      title: lang === "en" ? "Doors" : "Puertas",
      img: doorsImg,
      copy:
        lang === "en"
          ? "Sliding, folding, motorized entries."
          : "Correderas, plegables, entradas motorizadas.",
    },
  ];

  return (
    <>
      <section className="border-b border-border/60 bg-gradient-soft">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              {uiContent[lang].nav.services}
            </span>
            <h1 className="mt-3 text-3xl font-semibold md:text-4xl">{s.title}</h1>
            <p className="mt-2 text-base text-muted-foreground">{s.subtitle}</p>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {s.description}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-5 px-6 py-14 sm:grid-cols-2">
          {items.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              className="group overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft transition-shadow hover:shadow-card"
            >
              <div className="aspect-[5/3] overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h2 className="text-lg font-semibold">{it.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{it.copy}</p>
                <span className="mt-3 inline-block text-xs font-medium text-accent">
                  {uiContent[lang].servicesPreview.cta} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
