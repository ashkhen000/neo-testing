import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { useLang } from "@/lib/lang";
import { aboutData, uiContent } from "@/data/content";
import g1 from "@/assets/gallery-1.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Neocristal" },
      { name: "description", content: "Neocristal: provider and installer of high-quality glazing systems in Alicante." },
      { property: "og:title", content: "About — Neocristal" },
      { property: "og:description", content: "Professional, efficient and customer-focused." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { lang } = useLang();
  const a = aboutData[lang];
  const t = uiContent[lang];

  return (
    <PageShell>
      <section className="bg-gradient-soft border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
            {t.nav.about}
          </span>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold max-w-2xl">{a.title}</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">{a.description}</p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-14 grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden shadow-card aspect-[4/3]">
            <img src={g1} alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <ul className="space-y-3">
            {a.values.map((v) => (
              <li key={v} className="rounded-xl bg-secondary px-5 py-4 text-sm font-medium">
                {v}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
