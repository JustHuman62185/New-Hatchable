# Architecture

## System Overview

New Hatchable is composed of four main layers:

1. Web application.
2. MCP server.
3. Project workspace/runtime.
4. Integration layer for deployment and database services.

The application does not call AI model APIs in the MVP. External AI clients connect through MCP and perform model reasoning on the user's side.

## Recommended Stack

- Next.js App Router.
- TypeScript.
- Tailwind CSS.
- shadcn-style component primitives.
- PostgreSQL for persistent data.
- Prisma or Drizzle for database access.
- Redis-backed queue for long-running build/deploy tasks.
- Sandboxed project runtime for generated app files.

## Application Modules

### Dashboard module

Handles workspaces, projects, onboarding, and recent activity.

### Project module

Owns project overview, blueprint, task board, files, activity, previews, and deployment state.

### MCP module

Exposes project resources and tools to external MCP-compatible clients.

### Agent roles module

Stores reusable AI role cards, team templates, permissions, review checklists, and handoff notes.

### Integrations module

Manages user-owned deployment and database service connections.

### Approval module

Queues, displays, approves, or rejects high-risk actions.

### Runtime module

Runs builds, tests, previews, and deployment preparation in a controlled environment.

## MCP Resources

- `new-hatchable://project/current`
- `new-hatchable://project/blueprint`
- `new-hatchable://project/tasks`
- `new-hatchable://project/files`
- `new-hatchable://project/roles`
- `new-hatchable://project/memory`
- `new-hatchable://project/activity`
- `new-hatchable://project/integrations`
- `new-hatchable://project/build-logs`

## MCP Tools

### Project tools

- `get_project_summary`
- `update_project_summary`
- `get_blueprint`
- `update_blueprint`

### Task tools

- `list_tasks`
- `create_task`
- `update_task`
- `complete_task`
- `add_task_comment`

### File tools

- `list_files`
- `read_file`
- `write_file`
- `create_snapshot`
- `restore_snapshot`

### Runtime tools

- `run_build`
- `run_tests`
- `get_logs`
- `get_preview_url`

### Integration tools

- `list_integrations`
- `get_database_connection_status`
- `get_deployment_connection_status`
- `prepare_deployment`

### Approval tools

- `request_approval`
- `check_approval_status`

## Security Principles

- Never store AI provider API keys in the MVP.
- Encrypt all infrastructure credentials.
- Scope MCP sessions to explicit projects.
- Require approval for destructive or expensive operations.
- Audit every MCP tool call.
- Separate preview deployments from production deployments.
- Never expose secrets directly to AI clients unless a user explicitly approves a scoped action.

## Deployment Strategy

The app should eventually support multiple deployment providers. The first implementation should define provider-agnostic deployment interfaces so Vercel, Netlify, Cloudflare Pages, Render, or Railway can be added without rewriting project logic.

## Database Strategy

The app should eventually support multiple database providers. The first implementation should define provider-agnostic database connection interfaces so Supabase, Neon, Firebase, Turso, or direct Postgres services can be added cleanly.
