import { tenant } from "@teamhanko/passkeys-next-auth-provider";

// Only initialize if environment variables are set
// This allows the app to build without Hanko configured
let hanko: ReturnType<typeof tenant> | null = null;

if (process.env.HANKO_API_KEY && process.env.NEXT_PUBLIC_HANKO_TENANT_ID) {
  hanko = tenant({
    apiKey: process.env.HANKO_API_KEY!,
    tenantId: process.env.NEXT_PUBLIC_HANKO_TENANT_ID!,
  });
}

export default hanko;
