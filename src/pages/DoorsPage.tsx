import { ServiceDetail } from "@/components/ServiceDetail";
import { doorsData } from "@/data/content";
import doorsImg from "@/assets/doors-card.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";

export default function DoorsPage() {
  return <ServiceDetail data={doorsData} heroImage={doorsImg} gallery={[doorsImg, g2, g3]} />;
}
