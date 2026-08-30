import { NextRequest, NextResponse } from "next/server";
import { mcpResources, mcpTools } from "@/lib/mcp/manifest";
import { McpError } from "@/lib/mcp/errors";
import { invokeTool } from "@/lib/mcp/workspace-store";

export const runtime = "nodejs";

export function GET() {
  return NextResponse.json({
    name: "new-hatchable",
    version: "0.1.0",
    transport: "http-json",
    resources: mcpResources,
    tools: mcpTools,
    endpoints: { resources: "/api/mcp/resources?projectId=demo&resource=blueprint", tools: "/api/mcp" }
  });
}

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();
    if (!body || typeof body !== "object" || Array.isArray(body)) throw new McpError("Request body must be a JSON object.");
    const { projectId, tool, input } = body as { projectId?: unknown; tool?: unknown; input?: unknown };
    if (typeof projectId !== "string" || !projectId) throw new McpError("projectId must be a non-empty string.");
    if (typeof tool !== "string" || !tool) throw new McpError("tool must be a non-empty string.");
    if (input !== undefined && (!input || typeof input !== "object" || Array.isArray(input))) throw new McpError("input must be an object.");
    return NextResponse.json({ ok: true, result: invokeTool(projectId, tool, (input ?? {}) as Record<string, unknown>) });
  } catch (error) {
    const status = error instanceof McpError ? error.status : 500;
    const message = error instanceof Error ? error.message : "Unexpected MCP server error.";
    return NextResponse.json({ ok: false, error: { message } }, { status });
  }
}
