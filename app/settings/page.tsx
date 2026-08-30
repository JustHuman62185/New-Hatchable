import { AppShell } from "@/components/layout/app-shell";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";

export default function SettingsPage() {
  return (
    <AppShell>
      <section className="space-y-8 p-6 lg:p-10">
        <PageHeader
          eyebrow="Workspace settings"
          title="Prepare professional controls for security, MCP access, and connected infrastructure."
          description="This frontend-only settings surface establishes the shape for later authentication, workspace membership, billing, encryption, and audit-log controls."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            ["Workspace profile", "Name, slug, default project template, and branding."],
            ["MCP access", "Session expiration, client allow-list, and project-level scopes."],
            ["Security", "Credential encryption, approval policies, and audit retention."]
          ].map(([title, body]) => <Card key={title}><Badge tone="slate">Coming with backend</Badge><h2 className="mt-5 text-xl font-black text-ink">{title}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{body}</p></Card>)}
        </div>
      </section>
    </AppShell>
  );
}
