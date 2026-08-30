import { AppShell } from "@/components/layout/app-shell";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { roleCards } from "@/lib/project/sample-data";

export default function RolesPage() {
  return (
    <AppShell>
      <section className="space-y-8 p-6 lg:p-10">
        <PageHeader
          eyebrow="AI role cards"
          title="Define how any user-invoked MCP client should behave inside a project."
          description="Roles are not hosted autonomous agents in this phase. They are structured instructions, responsibilities, permissions, and review scopes that external AI clients can load through MCP."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {roleCards.map((role) => (
            <Card key={role.id} className="min-h-72">
              <Badge tone="brand">Role card</Badge>
              <h2 className="mt-5 text-2xl font-black text-ink">{role.name}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{role.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {role.permissions.map((permission) => <Badge key={permission}>{permission}</Badge>)}
              </div>
            </Card>
          ))}
        </div>
        <Card>
          <h2 className="text-xl font-black text-ink">Role card structure</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-4">
            {['Identity', 'Instructions', 'Permissions', 'Review checklist'].map((item) => <div key={item} className="rounded-2xl bg-slate-50 p-5 font-bold text-slate-700">{item}</div>)}
          </div>
        </Card>
      </section>
    </AppShell>
  );
}
