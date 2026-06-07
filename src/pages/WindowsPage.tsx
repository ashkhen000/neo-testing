import { ServiceDetail } from "@/components/ServiceDetail";
import { windowsData } from "@/data/content";
import windowsImg from "@/assets/windows-card.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g4 from "@/assets/gallery-4.jpg";
import hero from "@/assets/hero.jpg";

export default function WindowsPage() {
  return <ServiceDetail data={windowsData} heroImage={windowsImg} gallery={[g1, g4, hero]} />;
}
