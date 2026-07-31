import { checkBotId } from "botid/server";

// checkBotId() calls out to Vercel's BotID backend and throws if that call
// itself fails (e.g. missing Vercel-specific request context outside of a
// real Vercel deployment, or a transient network issue) — previously
// unguarded in every API route, which meant a BotID infra hiccup 500'd the
// whole route instead of just skipping bot detection for that request.
// Failing open here means a BotID outage degrades to "no bot check" rather
// than "every legitimate submission breaks."
export async function safeCheckBotId(): Promise<{ isBot: boolean }> {
  try {
    return await checkBotId();
  } catch (err) {
    console.error("checkBotId failed, failing open:", err);
    return { isBot: false };
  }
}
