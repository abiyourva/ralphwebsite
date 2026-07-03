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

// Kit's `/tags/{id}/subscribers` list endpoint has a real indexing lag for
// recently-tagged subscribers — a subscriber's own tag list reflects a new
// tag instantly, but the reverse tag->subscribers lookup can take a long
// time to catch up. Custom field values don't have this lag, so this scans
// subscribers (newest first) and filters by a non-empty field instead of
// relying on the tag index.
//
// The account has 1000+ total subscribers, so scanning everyone would mean
// a dozen-plus sequential Kit API calls per page load — slow, and prone to
// hitting Kit's rate limit (which is what was causing "couldn't load").
// Capped to the most recent maxPages instead: since this field is only
// ever set by a brand-new, low-volume feature, matches are always near the
// top of a newest-first list.
export async function getKitSubscribersWithField(fieldKey: string, maxPages = 8): Promise<KitSubscriber[]> {
  const apiKey = getApiKey();
  const matches: KitSubscriber[] = [];
  let cursor: string | null = null;
  let page = 0;

  do {
    const url = new URL(`${KIT_API_BASE}/subscribers`);
    url.searchParams.set("per_page", "100");
    url.searchParams.set("status", "all");
    url.searchParams.set("sort_field", "created_at");
    url.searchParams.set("sort_order", "desc");
    if (cursor) url.searchParams.set("after", cursor);

    const res = await fetch(url, {
      headers: { "X-Kit-Api-Key": apiKey },
    });
    const detail = await res.text();
    if (!res.ok) {
      throw new Error(`Kit list subscribers failed: ${res.status} ${detail}`);
    }
    const json = JSON.parse(detail);
    for (const sub of json.subscribers ?? []) {
      if (sub.fields?.[fieldKey]) matches.push(sub);
    }
    page += 1;
    cursor = json.pagination?.has_next_page ? json.pagination.end_cursor : null;
  } while (cursor && page < maxPages);

  return matches;
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
