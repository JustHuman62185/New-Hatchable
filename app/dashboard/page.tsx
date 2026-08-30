import { ArrowRight } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { StatCard } from "@/components/ui/stat-card";
import { activity, projects, stats, workspaceSteps } from "@/lib/data/workspace";

export default function DashboardPage() {
  return (
    <AppShell>
      <section className="space-y-8 p-6 lg:p-10">
        <PageHeader
          eyebrow="Workspace command center"
          title="Organize MCP projects, AI role cards, and user-owned infrastructure connectors."
          description="A professional front office for app creation where AI model calls happen in the user's MCP client and New Hatchable coordinates context, files, tasks, approvals, previews, databases, and deployments."
          actions={<Button href="/projects/demo">Open build room <ArrowRight className="ml-2 h-4 w-4" /></Button>}
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => <StatCard key={stat.label} {...stat} />)}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
          <Card>
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-black text-ink">Projects</h2>
                <p className="mt-1 text-sm text-slate-500">Every project is a shared MCP workspace.</p>
              </div>
              <Button href="/projects" variant="secondary">View all</Button>
            </div>
            <div className="mt-5 divide-y divide-slate-100">
              {projects.map((project) => (
                <div key={project.id} className="flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="font-bold text-ink">{project.name}</p>
                    <p className="mt-1 text-sm text-slate-500">{project.type} · Updated {project.updated}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge tone={project.health === "On track" ? "green" : project.health === "Review" ? "amber" : "slate"}>{project.health}</Badge>
                    <Badge>{project.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-black text-ink">Build workflow</h2>
            <div className="mt-5 space-y-4">
              {workspaceSteps.map((step, index) => (
                <div key={step} className="flex gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-black text-white">{index + 1}</div>
                  <p className="text-sm font-semibold text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card>
          <h2 className="text-xl font-black text-ink">Recent workspace activity</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {activity.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-2xl bg-slate-50 p-5">
                  <Icon className="h-5 w-5 text-brand-600" />
                  <h3 className="mt-4 font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
                </article>
              );
            })}
          </div>
        </Card>
      </section>
    </AppShell>
  );
}
