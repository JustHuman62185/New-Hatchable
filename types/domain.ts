export type IntegrationKind = "deployment" | "database";

export type IntegrationStatus = "not_connected" | "connected" | "needs_attention";

export type RolePermission =
  | "read_project"
  | "update_blueprint"
  | "manage_tasks"
  | "read_files"
  | "write_files"
  | "run_builds"
  | "prepare_deployments";

export type TaskStatus = "todo" | "in_progress" | "done";
export type TaskPriority = "low" | "medium" | "high";
export type ApprovalStatus = "pending" | "approved" | "rejected";
export type RiskLevel = "low" | "medium" | "high";

export type ProjectBlueprint = {
  purpose: string;
  targetUsers: string;
  features: string[];
  updatedAt: string;
};

export type ProjectTask = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  roleHint?: string;
  acceptanceCriteria: string[];
  createdAt: string;
  updatedAt: string;
};

export type ProjectFile = {
  path: string;
  content: string;
  language: string;
  updatedAt: string;
};

export type ApprovalRequest = {
  id: string;
  type: string;
  riskLevel: RiskLevel;
  summary: string;
  requestedAction: string;
  status: ApprovalStatus;
  createdAt: string;
  resolvedAt?: string;
};

export type ActivityEvent = {
  id: string;
  type: string;
  title: string;
  description: string;
  createdAt: string;
};

export type RoleCard = {
  id: string;
  name: string;
  summary: string;
  permissions: RolePermission[];
};

export type IntegrationProvider = {
  id: string;
  name: string;
  kind: IntegrationKind;
  status: IntegrationStatus;
  description: string;
};
