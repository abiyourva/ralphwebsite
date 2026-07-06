---
name: kit-integration
description: Working with the Kit (ConvertKit) email integration — adding a new capture form, tagging subscribers, reading submissions back, and the Kit v4 API pitfalls this project has already hit. Use for any task touching lib/kit.ts, app/api/*, email capture, tags, or the admin applications page.
---

# Kit integration playbook

Kit is this site's only backend. All access goes through `lib/kit.ts`
(Kit v4 REST, auth header `X-Kit-Api-Key: $KIT_API_SECRET`). Never call the
Kit API directly from a component or add a second client.

## Tag ID registry (hardcoded in the API routes)

| Feature | Route file | Tag ID(s) |
|---|---|---|
| Generic email capture | `app/api/subscribe/route.ts` | `20665717` |
| Contact form, by inquiry type | `app/api/contact/route.ts` | coaching `20755178`, speaking `20755179`, press `20755180`, accounting `20755181`, podcasting `20755182`, general `20755183` |
| Money archetype quiz | `app/api/quiz/route.ts` | started `20755271`; believer `20755272`, builder `20755273`, steward `20755274` |
| BFC teaser notify | `app/api/bfc-teaser/route.ts` | `20756097` |
| Co-host application | `app/api/cohost/route.ts` | `20864766` |

Custom fields in use: `money_archetype`, `cohost_application`, `company`,
`inquiry_subject`, `inquiry_message`.

## Adding a new capture flow (the established pattern)

1. New route `app/api/<name>/route.ts`: validate email
   (`typeof === "string" && includes("@")`), then
   `createOrUpdateKitSubscriber(...)` then `tagKitSubscriber(email, TAG_ID)`,
   wrapped in try/catch → `502 { error }` on failure, `{ ok: true }` on success.
2. Create the tag in Kit first (via Kit MCP tools or the Kit UI) and hardcode
   its ID as a route-level const — that is the project convention.
3. Frontend uses the existing `EmailCaptureForm` / `ContactForm` success-state
   pattern; don't invent a new form component.

## Pitfalls already paid for (do not rediscover)

- **Tag→subscribers listing lags** badly for fresh tags. To read submissions
  back, store the payload in a **custom field** and use
  `getKitSubscribersWithField(fieldKey)` — that's why co-host applications
  live in the `cohost_application` field, not just a tag.
- **Rate limits**: never paginate the full subscriber list (1000+). Keep the
  `maxPages` cap in `getKitSubscribersWithField`.
- **Strict params**: Kit v4 hard-errors on unknown query params. Only use
  params you've verified against the v4 docs.
- `state: "active"` in `createOrUpdateKitSubscriber` is intentional —
  subscribers are opted in by these forms.

## Testing

`KIT_API_SECRET` is not set locally, so Kit-backed endpoints 502 in dev —
expected. Verify by: `npm run build` passes, the route validates bad input
(400), and the error path returns 502 with a logged reason. Live tagging is
verified in Kit after deploy, or with the Kit MCP tools if available.
