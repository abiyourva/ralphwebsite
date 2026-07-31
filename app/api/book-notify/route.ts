import { NextResponse } from "next/server";
import { safeCheckBotId } from "@/lib/botid";
import { createOrUpdateKitSubscriber, tagKitSubscriber } from "@/lib/kit";
import { isHoneypotFilled } from "@/lib/honeypot";

const BOOK_TAG_IDS: Record<string, string> = {
  bfc: "20985252", // Book Notify - Becoming Financially Confident
  cca: "20985256", // Book Notify - Content Creator's Accountant
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

  const { email, book } = body;
  if (typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  const tagId = typeof book === "string" ? BOOK_TAG_IDS[book] : undefined;
  if (!tagId) {
    return NextResponse.json({ error: "Invalid book" }, { status: 400 });
  }

  try {
    await createOrUpdateKitSubscriber({ email });
    await tagKitSubscriber(email, tagId);
  } catch (err) {
    console.error("Book notify Kit sync failed:", err);
    return NextResponse.json({ error: "Subscription failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
