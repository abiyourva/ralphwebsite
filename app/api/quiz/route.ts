import { NextResponse } from "next/server";
import { safeCheckBotId } from "@/lib/botid";
import { createOrUpdateKitSubscriber, tagKitSubscriber } from "@/lib/kit";
import { isHoneypotFilled } from "@/lib/honeypot";

const QUIZ_STARTED_TAG_ID = "20755271";

const ARCHETYPE_TAG_IDS: Record<string, string> = {
  believer: "20755272",
  builder: "20755273",
  steward: "20755274",
};

const ARCHETYPE_LABELS: Record<string, string> = {
  believer: "The Believer",
  builder: "The Builder",
  steward: "The Steward",
};

export async function POST(request: Request) {
  const { isBot } = await safeCheckBotId();
  if (isBot) {
    return NextResponse.json({ error: "Access denied" }, { status: 403 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (isHoneypotFilled(body)) {
    return NextResponse.json({ ok: true });
  }

  const { stage, name, email, archetype } = body;

  if (typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  try {
    if (stage === "completed" && typeof archetype === "string" && ARCHETYPE_TAG_IDS[archetype]) {
      await createOrUpdateKitSubscriber({
        email,
        firstName: typeof name === "string" ? name : undefined,
        fields: { money_archetype: ARCHETYPE_LABELS[archetype] },
      });
      await tagKitSubscriber(email, ARCHETYPE_TAG_IDS[archetype]);
    } else {
      await createOrUpdateKitSubscriber({
        email,
        firstName: typeof name === "string" ? name : undefined,
      });
      await tagKitSubscriber(email, QUIZ_STARTED_TAG_ID);
    }
  } catch (err) {
    console.error("Quiz Kit sync failed:", err);
    return NextResponse.json({ error: "Sync failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
