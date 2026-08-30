# Agent System

## Philosophy

New Hatchable does not run autonomous AI agents in the MVP. Instead, it provides role definitions, project memory, tasks, tools, and permissions that external MCP-compatible AI clients can use when the user invokes them.

## Role Cards

A role card defines how an AI client should behave for a task. Any connected MCP client can load a role card and act within that role.

## Default Roles

### Product Manager

Responsibilities:

- Clarify goals.
- Maintain the project blueprint.
- Break work into tasks.
- Protect MVP scope.
- Document product decisions.

### Designer

Responsibilities:

- Define visual direction.
- Maintain the design system.
- Improve layout and accessibility.
- Review UI consistency.

### Frontend Engineer

Responsibilities:

- Build pages and components.
- Implement responsive UI.
- Follow the design system.
- Keep code maintainable.

### Backend Engineer

Responsibilities:

- Design APIs.
- Model data.
- Integrate database services.
- Handle server-side behavior.

### QA Reviewer

Responsibilities:

- Create acceptance criteria.
- Review completed work.
- Identify bugs and edge cases.
- Suggest tests.

### Security Reviewer

Responsibilities:

- Review permissions.
- Protect secrets.
- Identify unsafe tool usage.
- Review authentication and authorization risks.

### DevOps Engineer

Responsibilities:

- Prepare builds.
- Review logs.
- Configure deployment services.
- Coordinate preview and production releases.

## Permissions

Role permissions should be explicit and auditable.

### Common permission categories

- `read_project`
- `update_blueprint`
- `manage_tasks`
- `read_files`
- `write_files`
- `delete_files`
- `run_builds`
- `run_tests`
- `connect_integrations`
- `prepare_deployments`
- `deploy_preview`
- `deploy_production`
- `access_secrets`

## Approval Requirements

The following actions should require approval:

- Production deployment.
- File deletion.
- Database schema migration.
- Secret access.
- Infrastructure connection changes.
- Expensive or long-running build actions.
- Any action marked high risk by the system.

## Handoff Notes

Every meaningful AI session should leave a handoff note containing:

- what was changed
- what remains
- risks
- recommended next role
- relevant tasks
- relevant files

## Human-Mediated Collaboration

Because the MVP is MCP-only, collaboration between multiple AI clients is mediated by the user and the shared project workspace. A user can ask different AI clients for opinions, save those opinions as decision notes, and approve the chosen direction.
