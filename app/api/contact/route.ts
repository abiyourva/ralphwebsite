import { NextResponse } from "next/server";
import { safeCheckBotId } from "@/lib/botid";
import { createOrUpdateKitSubscriber, tagKitSubscriber } from "@/lib/kit";
import { isHoneypotFilled } from "@/lib/honeypot";

const INQUIRY_TAG_IDS: Record<string, string> = {
  coaching: "20755178",
  speaking: "20755179",
  press: "20755180",
  accounting: "20755181",
  podcasting: "20755182",
  general: "20755183",
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
  const { inquiryType, fields } = body as { inquiryType?: unknown; fields?: Record<string, unknown> };

  if (isHoneypotFilled(fields)) {
    return NextResponse.json({ ok: true });
  }

  const tagId = (typeof inquiryType === "string" ? INQUIRY_TAG_IDS[inquiryType] : undefined) ?? INQUIRY_TAG_IDS.general;
  const email = typeof fields?.email === "string" ? fields.email : "";
  if (!email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const firstName = (typeof fields?.first_name === "string" ? fields.first_name : undefined)
    ?? (typeof fields?.name === "string" ? fields.name.split(" ")[0] : undefined);

  try {
    await createOrUpdateKitSubscriber({
      email,
      firstName,
      fields: {
        ...(typeof fields?.org === "string" && fields.org ? { company: fields.org } : {}),
        ...(typeof fields?.subject === "string" && fields.subject ? { inquiry_subject: fields.subject } : {}),
        ...(typeof fields?.message === "string" && fields.message ? { inquiry_message: fields.message } : {}),
      },
    });
    await tagKitSubscriber(email, tagId);
  } catch (err) {
    console.error("Contact form Kit sync failed:", err);
    return NextResponse.json({ error: "Submission failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
