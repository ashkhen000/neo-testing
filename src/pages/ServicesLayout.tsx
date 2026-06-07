import { Outlet } from "react-router-dom";
import { PageShell } from "@/components/PageShell";

export default function ServicesLayout() {
  return (
    <PageShell>
      <Outlet />
    </PageShell>
  );
}
