const KIT_API_BASE = "https://api.kit.com/v4";

function getApiKey() {
  const apiKey = process.env.KIT_API_SECRET;
  if (!apiKey) throw new Error("KIT_API_SECRET is not set");
  return apiKey;
}

type KitFields = Record<string, string>;

export async function createOrUpdateKitSubscriber(params: {
  email: string;
  firstName?: string;
  fields?: KitFields;
}) {
  const apiKey = getApiKey();
  const res = await fetch(`${KIT_API_BASE}/subscribers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Kit-Api-Key": apiKey,
    },
    body: JSON.stringify({
      email_address: params.email,
      state: "active",
      ...(params.firstName ? { first_name: params.firstName } : {}),
      ...(params.fields ? { fields: params.fields } : {}),
    }),
  });
  const detail = await res.text();
  if (!res.ok) {
    throw new Error(`Kit create/update subscriber failed: ${res.status} ${detail}`);
  }
  return detail;
}

export async function tagKitSubscriber(email: string, tagId: string) {
  const apiKey = getApiKey();
  const res = await fetch(`${KIT_API_BASE}/tags/${tagId}/subscribers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Kit-Api-Key": apiKey,
    },
    body: JSON.stringify({ email_address: email }),
  });
  const detail = await res.text();
  if (!res.ok) {
    throw new Error(`Kit tag subscriber failed: ${res.status} ${detail}`);
  }
  return detail;
}
