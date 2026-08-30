import type { IntegrationProvider, RoleCard } from "@/types/domain";

export const roleCards: RoleCard[] = [
  { id: "pm", name: "Product Manager", summary: "Maintains the blueprint, scope, roadmap, and acceptance criteria.", permissions: ["read_project", "update_blueprint", "manage_tasks"] },
  { id: "engineer", name: "Full-stack Engineer", summary: "Builds app files, connects approved infrastructure, and runs checks.", permissions: ["read_project", "read_files", "write_files", "run_builds"] },
  { id: "devops", name: "DevOps Reviewer", summary: "Prepares preview and production deployment actions for approval.", permissions: ["read_project", "run_builds", "prepare_deployments"] }
];

export const integrations: IntegrationProvider[] = [
  { id: "vercel", name: "Vercel", kind: "deployment", status: "not_connected", description: "Deploy previews and production builds through the user's Vercel account." },
  { id: "netlify", name: "Netlify", kind: "deployment", status: "not_connected", description: "Publish static and server-rendered apps with approval-first deployment." },
  { id: "supabase", name: "Supabase", kind: "database", status: "not_connected", description: "Connect auth, Postgres, storage, and edge functions owned by the user." },
  { id: "neon", name: "Neon", kind: "database", status: "not_connected", description: "Connect serverless Postgres branches for development and production." }
];
