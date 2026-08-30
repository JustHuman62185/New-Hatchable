import { AppShell } from "@/components/layout/app-shell";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { mcpResources, mcpTools } from "@/lib/mcp/manifest";

export default function McpPage() {
  return (
    <AppShell>
      <section className="space-y-8 p-6 lg:p-10">
        <PageHeader
          eyebrow="MCP control plane"
          title="Expose project context and safe actions to any compatible AI client."
          description="This page documents the frontend view for resources, tools, connection instructions, and auditability before the real backend MCP transport is implemented."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <div className="flex items-center justify-between"><h2 className="text-xl font-black text-ink">Resources</h2><Badge tone="brand">Read context</Badge></div>
            <div className="mt-5 space-y-2">{mcpResources.map((resource) => <code key={resource} className="block rounded-xl bg-slate-950 px-4 py-3 text-xs text-slate-100">{resource}</code>)}</div>
          </Card>
          <Card>
            <div className="flex items-center justify-between"><h2 className="text-xl font-black text-ink">Tools</h2><Badge tone="amber">Approval aware</Badge></div>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">{mcpTools.map((tool) => <span key={tool} className="rounded-xl bg-slate-100 px-4 py-3 text-sm font-bold text-slate-700">{tool}</span>)}</div>
          </Card>
        </div>
        <Card>
          <h2 className="text-xl font-black text-ink">Client connection flow</h2>
          <ol className="mt-5 grid gap-4 md:grid-cols-4">
            {["Create project", "Copy MCP config", "Connect AI client", "Approve risky actions"].map((step, index) => <li key={step} className="rounded-2xl bg-slate-50 p-5"><span className="text-sm font-black text-brand-600">0{index + 1}</span><p className="mt-2 font-bold text-ink">{step}</p></li>)}
          </ol>
        </Card>
      </section>
    </AppShell>
  );
}
