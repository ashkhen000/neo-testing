import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/ServiceDetail";
import { windowsData } from "@/data/content";
import windowsImg from "@/assets/windows-card.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g4 from "@/assets/gallery-4.jpg";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/services/windows")({
  head: () => ({
    meta: [
      { title: "Windows — Neocristal" },
      {
        name: "description",
        content: "Casement, tilt & turn and sliding window systems with thermal and acoustic insulation.",
      },
      { property: "og:title", content: "Windows — Neocristal" },
      { property: "og:description", content: "Natural light, quiet rooms, lower bills." },
      { property: "og:image", content: windowsImg },
    ],
  }),
  component: WindowsPage,
});

function WindowsPage() {
  return <ServiceDetail data={windowsData} heroImage={windowsImg} gallery={[g1, g4, hero]} />;
}

