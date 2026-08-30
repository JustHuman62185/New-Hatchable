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
