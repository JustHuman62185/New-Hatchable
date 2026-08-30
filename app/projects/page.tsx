import { AppShell } from "@/components/layout/app-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { projects } from "@/lib/data/workspace";

export default function ProjectsPage() {
  return (
    <AppShell>
      <section className="space-y-8 p-6 lg:p-10">
        <PageHeader
          eyebrow="Project portfolio"
          title="Each app gets a complete MCP workspace before backend automation begins."
          description="Projects are organized around blueprints, role cards, files, connector status, activity history, and approval controls so any MCP-compatible AI client can continue the work."
          actions={<Button href="/projects/demo">Open demo project</Button>}
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="flex min-h-72 flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <Badge tone="brand">{project.type}</Badge>
                  <Badge tone={project.health === "On track" ? "green" : project.health === "Review" ? "amber" : "slate"}>{project.health}</Badge>
                </div>
                <h2 className="mt-6 text-2xl font-black text-ink">{project.name}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">Status: {project.status}. This card will later surface live preview, task, connector, and deployment health.</p>
              </div>
              <Button href={`/projects/${project.id}`} variant="secondary" className="mt-6">Open workspace</Button>
            </Card>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
