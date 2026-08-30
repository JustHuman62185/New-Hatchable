import { Activity, Boxes, CheckCircle2, Clock, Database, Rocket, ShieldCheck, Workflow } from "lucide-react";

export const projects = [
  { id: "demo", name: "Demo app workspace", type: "SaaS MVP", status: "Blueprint ready", updated: "Today", health: "On track" },
  { id: "client-portal", name: "Client portal", type: "Agency workspace", status: "Needs connector", updated: "Yesterday", health: "Review" },
  { id: "analytics-starter", name: "Analytics starter", type: "Dashboard", status: "Preview draft", updated: "2 days ago", health: "Stable" }
];

export const stats = [
  { label: "Active projects", value: "3", detail: "Across this workspace", icon: Boxes },
  { label: "MCP resources", value: "7", detail: "Ready for clients", icon: Workflow },
  { label: "Connected services", value: "0", detail: "Deployment/database next", icon: Database },
  { label: "Pending approvals", value: "0", detail: "No risky actions waiting", icon: ShieldCheck }
];

export const activity = [
  { icon: CheckCircle2, title: "Product direction finalized", body: "MCP-only scope documented with infrastructure connectors as the user-owned bridge." },
  { icon: Activity, title: "Workspace scaffold created", body: "Dashboard, project room, role cards, connector surfaces, and MCP manifest are in place." },
  { icon: Clock, title: "Backend deferred", body: "Persistence, auth, real MCP transport, and provider APIs are intentionally planned for the next run." }
];

export const workspaceSteps = [
  "Create a project blueprint",
  "Connect an MCP-compatible AI client",
  "Let the AI read resources and manage tasks",
  "Connect deployment and database services",
  "Approve build, migration, and deployment actions",
  "Preview and ship the app"
];

export const deploymentStages = [
  { icon: Database, title: "Database", body: "Connect Supabase, Neon, Firebase, or another user-owned data platform." },
  { icon: Rocket, title: "Deployment", body: "Connect Vercel, Netlify, Cloudflare Pages, Render, or Railway." },
  { icon: ShieldCheck, title: "Approval", body: "Require approval for production deploys, schema changes, and secret access." }
];
