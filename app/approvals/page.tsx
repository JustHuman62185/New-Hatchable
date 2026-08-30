import { ShieldCheck } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";

const policies = ["Production deployment", "Database schema migration", "Secret access", "Destructive file operation", "Infrastructure credential change", "Long-running paid operation"];

export default function ApprovalsPage() {
  return (
    <AppShell>
      <section className="space-y-8 p-6 lg:p-10">
        <PageHeader
          eyebrow="Approval queue"
          title="Keep the user in control before AI clients touch high-risk infrastructure."
          description="The backend will later route risky MCP tool calls here so users can approve, reject, inspect, and audit actions before they run."
        />
        <Card className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-50 text-emerald-700"><ShieldCheck className="h-8 w-8" /></div>
          <h2 className="mt-5 text-2xl font-black text-ink">No pending approvals</h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-600">When an MCP client asks to deploy production, access secrets, change database schema, or perform destructive operations, the request will appear here first.</p>
        </Card>
        <Card>
          <h2 className="text-xl font-black text-ink">Default protected actions</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {policies.map((policy) => <div key={policy} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4"><span className="font-semibold text-slate-700">{policy}</span><Badge tone="amber">approval</Badge></div>)}
          </div>
        </Card>
      </section>
    </AppShell>
  );
}
