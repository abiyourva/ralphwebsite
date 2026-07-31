import { NextResponse } from "next/server";
import { safeCheckBotId } from "@/lib/botid";
import { createOrUpdateKitSubscriber, tagKitSubscriber } from "@/lib/kit";
import { isHoneypotFilled } from "@/lib/honeypot";

const COHOST_APPLICANT_TAG_ID = "20864766";

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

  const { email, firstName, application } = body;

  if (typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  if (typeof application !== "string" || !application.trim()) {
    return NextResponse.json({ error: "Missing application" }, { status: 400 });
  }

  try {
    await createOrUpdateKitSubscriber({
      email,
      firstName: typeof firstName === "string" ? firstName : undefined,
      fields: { cohost_application: application },
    });
    await tagKitSubscriber(email, COHOST_APPLICANT_TAG_ID);
  } catch (err) {
    console.error("Cohost application Kit sync failed:", err);
    return NextResponse.json({ error: "Submission failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
