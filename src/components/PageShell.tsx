import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { LoadingScreen } from "./LoadingScreen";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <LoadingScreen>
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">{children}</main>
      </div>
    </LoadingScreen>
  );
}
