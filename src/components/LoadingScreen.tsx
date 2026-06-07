import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { uiContent } from "@/data/content";
// 1. Import your media asset directly as a module reference
import logoVideo from "@/assets/logo.MOV"; 

export function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState(false);
  const { lang } = useLang();
  const t = uiContent[lang];

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 4200);
    return () => clearTimeout(timer);
  }, []);

  if (done) return <>{children}</>;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{
        backgroundColor: "#a9a29a", 
      }}
    >
      <div className="w-52 h-52 rounded-3xl bg-[#d6d0c8] shadow-2xl flex items-center justify-center overflow-hidden mb-6 animate-fadeIn">
        
        <video
          src={logoVideo} // 2. Pass the compiled asset path variable here
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
