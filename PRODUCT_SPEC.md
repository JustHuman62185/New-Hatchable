# Product Specification

## Product Vision

New Hatchable is an MCP-native app-building workspace that acts as the professional middleman between users, their AI clients, deployment providers, and database services. Users do not connect AI API keys to this product. Instead, they connect MCP-compatible AI applications to a shared project workspace, then connect infrastructure services such as deployment platforms and databases when the app needs to be previewed, persisted, or shipped.

## Core Positioning

**Bring any MCP-compatible AI. Connect your infrastructure. Build real apps in one organized workspace.**

New Hatchable is not a hosted AI model provider and does not orchestrate automated model debates in the MVP. The product provides the workspace, project memory, development tools, approval layer, and integrations that external AI clients use through MCP.

## Target Users

### Non-technical founders

Founders who want to turn ideas into MVPs without managing code infrastructure directly.

### Builders using multiple AI apps

Users who switch between tools such as ChatGPT, Claude, Cursor, Windsurf, or local MCP clients and need one shared project source of truth.

### Agencies and freelancers

Teams that want reusable project structures, client workspaces, repeatable launch workflows, and infrastructure connections.

### Developers

Technical users who want an MCP-first control plane for project files, tasks, previews, logs, database integrations, and deployments.

## What Users Connect

Users connect infrastructure services, not AI provider keys.

### Deployment services

Examples include Vercel, Netlify, Cloudflare Pages, Render, Railway, or other deployment targets.

### Database and backend services

Examples include Supabase, Neon, PlanetScale, Firebase, Turso, Postgres providers, or storage services.

### Optional project services

Examples include GitHub, analytics, error monitoring, email providers, and payment providers.

## What AI Clients Connect To

External AI clients connect to New Hatchable through MCP. The MCP server exposes project resources and tools so the user's AI can inspect context, edit project artifacts, run safe actions, and request approvals.

## Primary Product Pillars

1. **MCP-native workspace**: every project has resources and tools exposed through MCP.
2. **Shared project memory**: all connected AI clients can continue from the same context.
3. **Role-based AI team system**: roles define instructions, responsibilities, permissions, and workflows.
4. **Infrastructure connector**: deployment and database services are connected through user-owned integrations.
5. **Approval-first execution**: high-risk actions require explicit user approval.
6. **Professional project organization**: blueprints, tasks, files, activity logs, snapshots, and deployment history remain structured.

## MVP Outcomes

The MVP should allow a user to:

1. Create a workspace and project.
2. Connect an MCP-compatible AI client.
3. Give the AI access to project resources and safe tools.
4. Maintain a project blueprint and task board.
5. Create or modify project files.
6. Connect deployment and database services.
7. Preview, review, and prepare app deployments with approvals.

## Non-goals for MVP

- No user-provided AI API keys.
- No hosted autonomous AI agents.
- No background multi-model debates.
- No automatic AI-to-AI orchestration without user invocation.
- No production deployment without explicit user approval.

## Success Metrics

- Time from project creation to first preview.
- Number of successful MCP client sessions.
- Percentage of projects with complete blueprints.
- Number of successful infrastructure connections.
- Build success rate.
- Deployment preparation success rate.
- User retention across multiple AI clients.
