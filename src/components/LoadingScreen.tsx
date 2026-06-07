import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { uiContent } from "@/data/content";

export function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState(false);
  const { lang } = useLang();
  const t = uiContent[lang];

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 4200);
    return () => clearTimeout(timer);
  }, []);

  if (done) return <>{children}</>;

  // This safely resolves the path to your video file for Vite without TypeScript complaining
  const videoUrl = new URL("./logo.MOV", import.meta.url).href;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{
        backgroundColor: "#a9a29a", 
      }}
    >
      <div className="w-52 h-52 rounded-3xl bg-[#d6d0c8] shadow-2xl flex items-center justify-center overflow-hidden mb-6">
        <video
          src={videoUrl}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
