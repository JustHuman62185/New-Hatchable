import { AppShell } from "@/components/layout/app-shell";
import { integrations, roleCards } from "@/lib/project/sample-data";

export default function DashboardPage() {
  return (
    <AppShell>
      <section className="p-6 lg:p-10">
        <div className="rounded-[2rem] bg-ink p-8 text-white">
          <p className="text-sm font-semibold text-brand-50">Workspace dashboard</p>
          <h1 className="mt-3 text-4xl font-black">
            Organize projects, MCP roles, and service connectors.
          </h1>
          <p className="mt-4 max-w-3xl text-slate-300">
            This foundation keeps AI reasoning inside the user's AI app while New Hatchable coordinates project
            memory, tasks, files, approvals, deployment services, and databases.
          </p>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold text-ink">Projects</h2>
            <div className="mt-4 rounded-2xl border border-slate-200 p-5">
              <p className="font-semibold text-ink">Demo app workspace</p>
              <p className="mt-2 text-sm text-slate-500">Blueprint ready · MCP pending · connectors not connected</p>
            </div>
          </section>

          <section id="integrations" className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold text-ink">Connectors</h2>
            <div className="mt-4 space-y-3">
              {integrations.map((integration) => (
                <div key={integration.id} className="rounded-2xl border border-slate-200 p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-ink">{integration.name}</p>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      {integration.kind}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-500">{integration.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold text-ink">AI role cards</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {roleCards.map((role) => (
              <article key={role.id} className="rounded-2xl bg-slate-50 p-5">
                <h3 className="font-bold text-ink">{role.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{role.summary}</p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </AppShell>
  );
}
