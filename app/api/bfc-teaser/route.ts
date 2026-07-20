import { NextResponse } from "next/server";
import { checkBotId } from "botid/server";
import { createOrUpdateKitSubscriber, tagKitSubscriber } from "@/lib/kit";

const BFC_TEASER_TAG_ID = "20756097";

export async function POST(request: Request) {
  const { isBot } = await checkBotId();
  if (isBot) {
    return NextResponse.json({ error: "Access denied" }, { status: 403 });
  }

  const { email } = await request.json();
  if (typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  try {
    await createOrUpdateKitSubscriber({ email });
    await tagKitSubscriber(email, BFC_TEASER_TAG_ID);
  } catch (err) {
    console.error("BFC teaser Kit sync failed:", err);
    return NextResponse.json({ error: "Subscription failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
