import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

export function StatCard({ label, value, detail, icon: Icon }: { label: string; value: string; detail: string; icon: LucideIcon }) {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-500">{label}</p>
        <div className="rounded-2xl bg-brand-50 p-3 text-brand-700"><Icon className="h-5 w-5" /></div>
      </div>
      <p className="mt-5 text-3xl font-black text-ink">{value}</p>
      <p className="mt-1 text-sm text-slate-500">{detail}</p>
    </Card>
  );
}
