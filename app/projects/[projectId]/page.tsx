import { AppShell } from "@/components/layout/app-shell";
import { mcpResources, mcpTools } from "@/lib/mcp/manifest";

export default function ProjectPage() {
  return (
    <AppShell>
      <section className="p-6 lg:p-10">
        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8">
            <p className="text-sm font-semibold text-brand-600">Project workspace</p>
            <h1 className="mt-2 text-4xl font-black text-ink">Demo app build room</h1>
            <p className="mt-4 text-slate-600">
              A structured workspace where MCP clients can read context, update the blueprint, manage tasks, and
              request safe build or deployment actions.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Blueprint</p>
                <p className="mt-1 font-bold text-ink">Drafting</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">MCP tools</p>
                <p className="mt-1 font-bold text-ink">{mcpTools.length} defined</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Resources</p>
                <p className="mt-1 font-bold text-ink">{mcpResources.length} exposed</p>
              </div>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold text-ink">Approval queue</h2>
            <p className="mt-2 text-sm text-slate-500">
              Production deploys, schema changes, secret access, and destructive file actions will appear here for user
              approval.
            </p>
            <div className="mt-5 rounded-2xl border border-dashed border-slate-300 p-5 text-sm text-slate-500">
              No pending approvals.
            </div>
          </aside>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <section className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="font-bold text-ink">MCP resources</h2>
            <div className="mt-4 space-y-2">
              {mcpResources.map((resource) => (
                <code key={resource} className="block rounded-xl bg-slate-950 px-3 py-2 text-xs text-slate-100">
                  {resource}
                </code>
              ))}
            </div>
          </section>
          <section className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="font-bold text-ink">MCP tools</h2>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {mcpTools.map((tool) => (
                <span key={tool} className="rounded-xl bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700">
                  {tool}
                </span>
              ))}
            </div>
          </section>
        </div>
      </section>
    </AppShell>
  );
}
