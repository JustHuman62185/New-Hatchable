import { NextRequest, NextResponse } from "next/server";
import { McpError } from "@/lib/mcp/errors";
import { readResource } from "@/lib/mcp/workspace-store";

export const runtime = "nodejs";

export function GET(request: NextRequest) {
  try {
    const projectId = request.nextUrl.searchParams.get("projectId");
    const resource = request.nextUrl.searchParams.get("resource");
    if (!projectId || !resource) throw new McpError("projectId and resource query parameters are required.");
    return NextResponse.json({ ok: true, result: readResource(projectId, resource) });
  } catch (error) {
    const status = error instanceof McpError ? error.status : 500;
    const message = error instanceof Error ? error.message : "Unexpected MCP server error.";
    return NextResponse.json({ ok: false, error: { message } }, { status });
  }
}
