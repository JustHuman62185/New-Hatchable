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
  "update_blueprint",
  "list_tasks",
  "create_task",
  "list_files",
  "read_file",
  "write_file",
  "run_build",
  "get_preview_url",
  "request_approval"
] as const;
