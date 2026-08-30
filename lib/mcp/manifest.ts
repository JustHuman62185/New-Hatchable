export const mcpResources = [
  "new-hatchable://project/current",
  "new-hatchable://project/blueprint",
  "new-hatchable://project/tasks",
  "new-hatchable://project/files",
  "new-hatchable://project/roles",
  "new-hatchable://project/integrations",
  "new-hatchable://project/activity"
] as const;

export const mcpTools = [
  "get_project_summary",
  "get_blueprint",
  "update_blueprint",
  "list_tasks",
  "create_task",
  "update_task",
  "complete_task",
  "list_files",
  "read_file",
  "write_file",
  "list_integrations",
  "get_database_connection_status",
  "get_deployment_connection_status",
  "request_approval",
  "check_approval_status"
] as const;
