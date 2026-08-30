import { AppShell } from "@/components/layout/app-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { connectorDefinitions } from "@/lib/integrations/providers";
import { deploymentStages } from "@/lib/data/workspace";
import { integrations } from "@/lib/project/sample-data";

export default function ConnectorsPage() {
  return (
    <AppShell>
      <section className="space-y-8 p-6 lg:p-10">
        <PageHeader
          eyebrow="Infrastructure connectors"
          title="Users connect deployment and database services. AI provider keys stay out."
          description="The frontend is prepared for user-owned infrastructure connections, provider-neutral status cards, and approval-first deployment/database workflows."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {deploymentStages.map((stage) => {
            const Icon = stage.icon;
            return (
              <Card key={stage.title}>
                <Icon className="h-6 w-6 text-brand-600" />
                <h2 className="mt-4 text-xl font-black text-ink">{stage.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{stage.body}</p>
              </Card>
            );
          })}
        </div>
        <Card>
          <h2 className="text-xl font-black text-ink">Available connector surfaces</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {integrations.map((integration) => (
              <div key={integration.id} className="rounded-2xl border border-slate-200 p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-bold text-ink">{integration.name}</h3>
                  <Badge>{integration.kind}</Badge>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{integration.description}</p>
                <Button variant="secondary" className="mt-5">Prepare connection</Button>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <h2 className="text-xl font-black text-ink">Connector policy definitions</h2>
          <div className="mt-5 space-y-3">
            {connectorDefinitions.map((connector) => (
              <div key={connector.id} className="rounded-2xl bg-slate-50 p-4">
                <p className="font-bold text-ink">{connector.name}</p>
                <p className="mt-1 text-sm text-slate-500">Approval required for: {connector.requiresApprovalFor.join(", ")}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </AppShell>
  );
}
