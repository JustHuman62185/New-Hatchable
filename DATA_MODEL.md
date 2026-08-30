# Data Model

## User

```text
id
name
email
avatarUrl
createdAt
updatedAt
```

## Workspace

```text
id
name
slug
ownerId
createdAt
updatedAt
```

## Project

```text
id
workspaceId
name
slug
description
status
blueprintId
createdAt
updatedAt
```

## Blueprint

```text
id
projectId
purpose
targetUsers
features
pages
dataModels
integrations
designDirection
roadmap
updatedAt
```

## RoleCard

```text
id
workspaceId
name
role
instructions
permissions
reviewChecklist
isTemplate
createdAt
updatedAt
```

## ProjectTask

```text
id
projectId
title
description
status
priority
roleHint
acceptanceCriteria
createdAt
updatedAt
```

## ProjectFile

```text
id
projectId
path
content
language
createdAt
updatedAt
```

## FileSnapshot

```text
id
projectId
label
summary
files
createdAt
createdBySessionId
```

## IntegrationConnection

```text
id
workspaceId
projectId
providerType
providerName
status
encryptedCredentials
metadata
createdAt
updatedAt
```

## ApprovalRequest

```text
id
projectId
type
riskLevel
summary
requestedAction
status
createdAt
resolvedAt
```

## McpSession

```text
id
projectId
clientName
clientVersion
status
lastSeenAt
createdAt
```

## ToolRun

```text
id
projectId
mcpSessionId
toolName
input
output
status
riskLevel
createdAt
```

## ActivityEvent

```text
id
projectId
type
title
description
metadata
createdAt
```
