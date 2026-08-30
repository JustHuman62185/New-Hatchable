import type { IntegrationKind } from "@/types/domain";

export type ConnectorDefinition = {
  id: string;
  name: string;
  kind: IntegrationKind;
  docsUrl: string;
  requiresApprovalFor: string[];
};

export const connectorDefinitions: ConnectorDefinition[] = [
  {
    id: "vercel",
    name: "Vercel",
    kind: "deployment",
    docsUrl: "https://vercel.com/docs",
    requiresApprovalFor: ["production_deploy", "environment_variable_change"]
  },
  {
    id: "supabase",
    name: "Supabase",
    kind: "database",
    docsUrl: "https://supabase.com/docs",
    requiresApprovalFor: ["schema_migration", "secret_access"]
  }
];
