import { ArrowRight, Cable, Database, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: Cable,
    title: "MCP-native",
    body: "External AI clients connect to one structured workspace with project resources and safe tools."
  },
  {
    icon: Database,
    title: "Infrastructure connector",
    body: "Users connect deployment and database services while keeping AI model keys out of the product."
  },
  {
    icon: ShieldCheck,
    title: "Approval-first",
    body: "High-risk file, database, and deployment actions require explicit user approval."
  }
];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-cloud">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8">
        <nav className="flex items-center justify-between">
          <div>
            <p className="text-lg font-bold text-ink">New Hatchable</p>
            <p className="text-sm text-slate-500">MCP-native app building workspace</p>
          </div>
          <Button href="/dashboard" variant="secondary">Open workspace</Button>
        </nav>

        <div className="grid flex-1 items-center gap-14 py-20 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700">
              <Sparkles className="h-4 w-4" /> Bring any AI. Connect your stack.
            </div>
            <h1 className="text-5xl font-black tracking-tight text-ink sm:text-6xl lg:text-7xl">
              The professional middleman between AI clients and real app infrastructure.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              New Hatchable gives every MCP-compatible AI client the same project memory, tools, roles, files,
              tasks, previews, and connector status—without asking users for AI API keys.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/dashboard">Start planning <ArrowRight className="ml-2 h-4 w-4" /></Button>
              <Button href="/projects/demo" variant="secondary">View project workspace</Button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
            <div className="rounded-3xl bg-slate-950 p-5 text-white">
              <p className="text-sm text-slate-400">MCP workspace</p>
              <h2 className="mt-2 text-2xl font-bold">Shared source of truth</h2>
              <div className="mt-6 space-y-3 text-sm">
                <p className="rounded-2xl bg-white/10 p-4">Claude drafts the blueprint through MCP.</p>
                <p className="rounded-2xl bg-white/10 p-4">ChatGPT implements tasks from the same workspace.</p>
                <p className="rounded-2xl bg-white/10 p-4">Cursor debugs using shared logs and files.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 pb-12 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article key={pillar.title} className="rounded-3xl border border-slate-200 bg-white p-6">
                <Icon className="h-6 w-6 text-brand-600" />
                <h3 className="mt-4 font-bold text-ink">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{pillar.body}</p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
