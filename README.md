# New Hatchable

New Hatchable is an MCP-native app-building workspace. It acts as the professional middleman between a user's AI clients, deployment services, and database services.

Users do **not** provide AI API keys to this app. Instead, MCP-compatible AI clients connect to project workspaces and use structured resources and tools. Users only connect their own infrastructure services, such as deployment providers and databases.

## Core principles

- Bring any MCP-compatible AI client.
- Keep AI model credentials out of the product.
- Store shared project context, tasks, role cards, files, and activity.
- Connect deployment and database services owned by the user.
- Require approval before risky infrastructure, file, or deployment actions.

## Documentation

- [Product specification](./PRODUCT_SPEC.md)
- [MVP scope](./MVP_SCOPE.md)
- [Architecture](./ARCHITECTURE.md)
- [Agent system](./AGENT_SYSTEM.md)
- [Data model](./DATA_MODEL.md)
- [Roadmap](./ROADMAP.md)

## Application scaffold

The application uses Next.js, TypeScript, and Tailwind CSS. It includes a polished landing page, workspace dashboard, project workspace shell, MCP manifest definitions, role card sample data, and infrastructure connector definitions.

## MCP HTTP foundation

The initial backend is available as a same-origin JSON transport while full MCP transport, authentication, and PostgreSQL persistence are built:

- `GET /api/mcp` lists the server capability manifest.
- `GET /api/mcp/resources?projectId=demo&resource=blueprint` reads a project resource. Supported resources are `current`, `blueprint`, `tasks`, `files`, `integrations`, and `activity`.
- `POST /api/mcp` invokes a supported tool with `{ "projectId": "demo", "tool": "list_tasks", "input": {} }`.

The current repository is deliberately process-local and seeded with the `demo` project. It provides validated project, blueprint, task, file, integration-status, approval-request, and activity operations, but should not be treated as persistent storage or an authenticated public endpoint.

## Development

```bash
npm install
npm run dev
```

```bash
npm run typecheck
npm run build
```
