import type {
  ActivityEvent,
  ApprovalRequest,
  IntegrationProvider,
  ProjectBlueprint,
  ProjectFile,
  ProjectTask,
  TaskPriority,
  TaskStatus
} from "@/types/domain";
import { McpError } from "./errors";

type StoredProject = {
  id: string;
  name: string;
  description: string;
  blueprint: ProjectBlueprint;
  tasks: ProjectTask[];
  files: ProjectFile[];
  approvals: ApprovalRequest[];
  integrations: IntegrationProvider[];
  activity: ActivityEvent[];
};

const now = () => new Date().toISOString();
const createId = (prefix: string) => `${prefix}_${crypto.randomUUID()}`;

const demoProject: StoredProject = {
  id: "demo",
  name: "Demo app workspace",
  description: "An MCP-native SaaS MVP planning workspace.",
  blueprint: {
    purpose: "Plan and ship a focused SaaS MVP through connected MCP clients.",
    targetUsers: "Founders and builders using more than one AI client.",
    features: ["Shared blueprint", "Task board", "Approval-first deployment preparation"],
    updatedAt: now()
  },
  tasks: [
    { id: "task_workspace", title: "Define the MVP blueprint", description: "Capture goals, users, and initial features.", status: "in_progress", priority: "high", roleHint: "Product Manager", acceptanceCriteria: ["Purpose is documented", "MVP scope is explicit"], createdAt: now(), updatedAt: now() }
  ],
  files: [
    { path: "README.md", content: "# Demo app workspace\n\nThis project is managed through New Hatchable MCP tools.\n", language: "markdown", updatedAt: now() }
  ],
  approvals: [],
  integrations: [
    { id: "vercel", name: "Vercel", kind: "deployment", status: "not_connected", description: "Deploy previews and production builds through the user's Vercel account." },
    { id: "supabase", name: "Supabase", kind: "database", status: "not_connected", description: "Connect auth, Postgres, storage, and edge functions owned by the user." }
  ],
  activity: []
};

// Deliberately process-local until the Phase 4 PostgreSQL repository replaces it.
const projects = new Map<string, StoredProject>([[demoProject.id, demoProject]]);

function projectFor(projectId: string) {
  const project = projects.get(projectId);
  if (!project) throw new McpError(`Project '${projectId}' was not found.`, 404);
  return project;
}

function addActivity(project: StoredProject, type: string, title: string, description: string) {
  project.activity.unshift({ id: createId("activity"), type, title, description, createdAt: now() });
}

function requiredString(value: unknown, name: string) {
  if (typeof value !== "string" || !value.trim()) throw new McpError(`${name} must be a non-empty string.`);
  return value.trim();
}

function optionalStringArray(value: unknown, name: string) {
  if (value === undefined) return [];
  if (!Array.isArray(value) || value.some((item) => typeof item !== "string")) throw new McpError(`${name} must be an array of strings.`);
  return value.map((item) => item.trim()).filter(Boolean);
}

export function getProjectSummary(projectId: string) {
  const project = projectFor(projectId);
  return { id: project.id, name: project.name, description: project.description, taskCounts: project.tasks.reduce<Record<TaskStatus, number>>((counts, task) => ({ ...counts, [task.status]: counts[task.status] + 1 }), { todo: 0, in_progress: 0, done: 0 }), pendingApprovals: project.approvals.filter((approval) => approval.status === "pending").length };
}

export function readResource(projectId: string, resource: string) {
  const project = projectFor(projectId);
  switch (resource) {
    case "current": return getProjectSummary(projectId);
    case "blueprint": return project.blueprint;
    case "tasks": return project.tasks;
    case "files": return project.files.map(({ content: _content, ...file }) => file);
    case "integrations": return project.integrations;
    case "activity": return project.activity;
    default: throw new McpError(`Unsupported project resource '${resource}'.`, 404);
  }
}

export function invokeTool(projectId: string, tool: string, input: Record<string, unknown> = {}) {
  const project = projectFor(projectId);
  switch (tool) {
    case "get_project_summary": return getProjectSummary(projectId);
    case "get_blueprint": return project.blueprint;
    case "update_blueprint": {
      const purpose = requiredString(input.purpose, "purpose");
      const targetUsers = requiredString(input.targetUsers, "targetUsers");
      project.blueprint = { purpose, targetUsers, features: optionalStringArray(input.features, "features"), updatedAt: now() };
      addActivity(project, "blueprint_updated", "Blueprint updated", "An MCP client updated the project blueprint.");
      return project.blueprint;
    }
    case "list_tasks": return project.tasks;
    case "create_task": {
      const priority = input.priority ?? "medium";
      if (priority !== "low" && priority !== "medium" && priority !== "high") throw new McpError("priority must be low, medium, or high.");
      const task: ProjectTask = { id: createId("task"), title: requiredString(input.title, "title"), description: typeof input.description === "string" ? input.description : "", status: "todo", priority: priority as TaskPriority, roleHint: typeof input.roleHint === "string" ? input.roleHint : undefined, acceptanceCriteria: optionalStringArray(input.acceptanceCriteria, "acceptanceCriteria"), createdAt: now(), updatedAt: now() };
      project.tasks.push(task); addActivity(project, "task_created", "Task created", task.title); return task;
    }
    case "update_task": {
      const task = project.tasks.find((item) => item.id === requiredString(input.taskId, "taskId"));
      if (!task) throw new McpError("Task was not found.", 404);
      if (input.status !== undefined && input.status !== "todo" && input.status !== "in_progress" && input.status !== "done") throw new McpError("status must be todo, in_progress, or done.");
      if (typeof input.title === "string") task.title = requiredString(input.title, "title");
      if (typeof input.description === "string") task.description = input.description;
      if (input.status) task.status = input.status as TaskStatus;
      task.updatedAt = now(); addActivity(project, "task_updated", "Task updated", task.title); return task;
    }
    case "complete_task": return invokeTool(projectId, "update_task", { taskId: input.taskId, status: "done" });
    case "list_files": return readResource(projectId, "files");
    case "read_file": {
      const file = project.files.find((item) => item.path === requiredString(input.path, "path"));
      if (!file) throw new McpError("File was not found.", 404); return file;
    }
    case "write_file": {
      const path = requiredString(input.path, "path"); const content = requiredString(input.content, "content");
      if (path.includes("..") || path.startsWith("/")) throw new McpError("path must stay within the project workspace.");
      const existing = project.files.find((item) => item.path === path);
      const file = { path, content, language: typeof input.language === "string" ? input.language : "text", updatedAt: now() };
      if (existing) Object.assign(existing, file); else project.files.push(file);
      addActivity(project, "file_written", "File written", path); return file;
    }
    case "list_integrations": return project.integrations;
    case "get_database_connection_status": return project.integrations.filter((item) => item.kind === "database");
    case "get_deployment_connection_status": return project.integrations.filter((item) => item.kind === "deployment");
    case "request_approval": {
      const approval: ApprovalRequest = { id: createId("approval"), type: requiredString(input.type, "type"), riskLevel: input.riskLevel === "low" || input.riskLevel === "medium" ? input.riskLevel : "high", summary: requiredString(input.summary, "summary"), requestedAction: requiredString(input.requestedAction, "requestedAction"), status: "pending", createdAt: now() };
      project.approvals.unshift(approval); addActivity(project, "approval_requested", "Approval requested", approval.summary); return approval;
    }
    case "check_approval_status": {
      const approval = project.approvals.find((item) => item.id === requiredString(input.approvalId, "approvalId"));
      if (!approval) throw new McpError("Approval was not found.", 404); return approval;
    }
    default: throw new McpError(`Unsupported MCP tool '${tool}'.`, 404);
  }
}
