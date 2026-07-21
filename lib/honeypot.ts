// Shared server-side honeypot check for form-submitting API routes.
// The field name must match components/Honeypot.tsx.
export const HONEYPOT_FIELD = "website";

export function isHoneypotFilled(body: Record<string, unknown> | null | undefined): boolean {
  const value = body?.[HONEYPOT_FIELD];
  return typeof value === "string" && value.trim().length > 0;
}
