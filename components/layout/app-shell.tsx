import type { ReactNode } from "react";
import Link from "next/link";
import { Boxes, Cable, LayoutDashboard, ShieldCheck } from "lucide-react";

const navigation = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/projects/demo", label: "Project", icon: Boxes },
  { href: "/dashboard#integrations", label: "Connectors", icon: Cable },
  { href: "/dashboard#approvals", label: "Approvals", icon: ShieldCheck }
];

export function AppShell({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-cloud"><aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-slate-200 bg-white p-6 lg:block"><Link href="/" className="text-xl font-bold text-ink">New Hatchable</Link><p className="mt-2 text-sm text-slate-500">MCP-native app workspace</p><nav className="mt-10 space-y-2">{navigation.map((item) => { const Icon = item.icon; return <Link key={item.href} href={item.href} className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-ink"><Icon className="h-4 w-4" />{item.label}</Link>; })}</nav></aside><main className="lg:pl-72">{children}</main></div>;
}
