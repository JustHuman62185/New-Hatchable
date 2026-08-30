import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = { children: ReactNode; href?: string; variant?: "primary" | "secondary" | "ghost"; className?: string; };

export function Button({ children, href, variant = "primary", className }: ButtonProps) {
  const classes = cn("inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition", variant === "primary" && "bg-brand-600 text-white shadow-soft hover:bg-brand-700", variant === "secondary" && "border border-slate-200 bg-white text-ink hover:bg-slate-50", variant === "ghost" && "text-slate-600 hover:text-ink", className);
  if (href) return <Link className={classes} href={href}>{children}</Link>;
  return <button className={classes}>{children}</button>;
}
