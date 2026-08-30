import type { ReactNode } from "react";
import Link from "next/link";
import { Boxes, Cable, CheckSquare, Home, LayoutDashboard, Settings, ShieldCheck, UsersRound, Workflow } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const navigation = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/projects", label: "Projects", icon: Boxes },
  { href: "/projects/demo", label: "Build room", icon: Workflow },
  { href: "/roles", label: "AI roles", icon: UsersRound },
  { href: "/mcp", label: "MCP", icon: Cable },
  { href: "/connectors", label: "Connectors", icon: CheckSquare },
  { href: "/approvals", label: "Approvals", icon: ShieldCheck },
  { href: "/settings", label: "Settings", icon: Settings }
];

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-cloud">
      <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-slate-200 bg-white p-6 lg:block">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
            <Home className="h-5 w-5" />
          </div>
          <div>
            <p className="text-lg font-black text-ink">New Hatchable</p>
            <p className="text-xs font-medium text-slate-500">MCP workspace</p>
          </div>
        </Link>

        <div className="mt-6 rounded-3xl border border-brand-500/20 bg-brand-50 p-4">
          <Badge tone="brand">Frontend phase</Badge>
          <p className="mt-3 text-sm leading-6 text-brand-700">
            UI-first foundation for pages, navigation, role cards, connectors, MCP resources, and approvals.
          </p>
        </div>

        <nav className="mt-8 space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-ink"
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      <main className="lg:pl-72">{children}</main>
    </div>
  );
}
