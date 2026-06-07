import { Outlet, createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/services")({
  component: ServicesLayout,
});

function ServicesLayout() {
  return (
    <PageShell>
      <Outlet />
    </PageShell>
  );
}

