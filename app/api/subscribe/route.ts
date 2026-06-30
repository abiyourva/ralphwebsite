import { NextResponse } from "next/server";
import { createOrUpdateKitSubscriber, tagKitSubscriber } from "@/lib/kit";

const KIT_TAG_ID = "20665717";

export async function POST(request: Request) {
  const { email } = await request.json();
  if (typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  try {
    await createOrUpdateKitSubscriber({ email });
    await tagKitSubscriber(email, KIT_TAG_ID);
  } catch (err) {
    console.error("Subscribe Kit sync failed:", err);
    return NextResponse.json({ error: "Subscription failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
