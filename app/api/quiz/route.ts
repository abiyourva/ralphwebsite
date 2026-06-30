import { NextResponse } from "next/server";
import { createOrUpdateKitSubscriber, tagKitSubscriber } from "@/lib/kit";

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
  const { stage, name, email, archetype } = await request.json();

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
