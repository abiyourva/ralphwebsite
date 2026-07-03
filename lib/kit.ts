const KIT_API_BASE = "https://api.kit.com/v4";

function getApiKey() {
  const apiKey = process.env.KIT_API_SECRET;
  if (!apiKey) throw new Error("KIT_API_SECRET is not set");
  return apiKey;
}

type KitFields = Record<string, string | null>;

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

export type KitSubscriber = {
  id: number;
  email_address: string;
  first_name: string | null;
  state: string;
  created_at: string;
  fields: KitFields;
};

export async function getKitSubscribersByTag(tagId: string): Promise<KitSubscriber[]> {
  const apiKey = getApiKey();
  const subscribers: KitSubscriber[] = [];
  let cursor: string | null = null;

  do {
    const url = new URL(`${KIT_API_BASE}/tags/${tagId}/subscribers`);
    url.searchParams.set("include", "fields");
    url.searchParams.set("per_page", "100");
    if (cursor) url.searchParams.set("after", cursor);

    const res = await fetch(url, {
      headers: { "X-Kit-Api-Key": apiKey },
    });
    const detail = await res.text();
    if (!res.ok) {
      throw new Error(`Kit list subscribers by tag failed: ${res.status} ${detail}`);
    }
    const json = JSON.parse(detail);
    subscribers.push(...(json.subscribers ?? []));
    cursor = json.pagination?.has_next_page ? json.pagination.end_cursor : null;
  } while (cursor);

  return subscribers;
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
