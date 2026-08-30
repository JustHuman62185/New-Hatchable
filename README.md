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

The initial application scaffold uses Next.js, TypeScript, and Tailwind CSS. It includes a polished landing page, workspace dashboard, project workspace shell, MCP manifest definitions, role card sample data, and infrastructure connector definitions.

## Development

```bash
npm install
npm run dev
```

```bash
npm run typecheck
npm run build
```
