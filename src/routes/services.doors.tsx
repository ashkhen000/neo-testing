import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/ServiceDetail";
import { doorsData } from "@/data/content";
import doorsImg from "@/assets/doors-card.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";

export const Route = createFileRoute("/services/doors")({
  head: () => ({
    meta: [
      { title: "Doors — Neocristal" },
      {
        name: "description",
        content: "Large-format sliding, folding and motorized door systems for modern homes.",
      },
      { property: "og:title", content: "Doors — Neocristal" },
      { property: "og:description", content: "Generous openings between inside and out." },
      { property: "og:image", content: doorsImg },
    ],
  }),
  component: DoorsPage,
});

function DoorsPage() {
  return <ServiceDetail data={doorsData} heroImage={doorsImg} gallery={[doorsImg, g2, g3]} />;
}

