import { NextResponse } from "next/server";
import { createOrUpdateKitSubscriber, tagKitSubscriber } from "@/lib/kit";

const INQUIRY_TAG_IDS: Record<string, string> = {
  coaching: "20755178",
  speaking: "20755179",
  press: "20755180",
  accounting: "20755181",
  podcasting: "20755182",
  general: "20755183",
};

export async function POST(request: Request) {
  const { inquiryType, fields } = await request.json();

  const tagId = INQUIRY_TAG_IDS[inquiryType] ?? INQUIRY_TAG_IDS.general;
  const email = typeof fields?.email === "string" ? fields.email : "";
  if (!email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const firstName = fields.first_name || (typeof fields.name === "string" ? fields.name.split(" ")[0] : undefined);

  try {
    await createOrUpdateKitSubscriber({
      email,
      firstName,
      fields: {
        ...(fields.org ? { company: fields.org } : {}),
        ...(fields.subject ? { inquiry_subject: fields.subject } : {}),
        ...(fields.message ? { inquiry_message: fields.message } : {}),
      },
    });
    await tagKitSubscriber(email, tagId);
  } catch (err) {
    console.error("Contact form Kit sync failed:", err);
    return NextResponse.json({ error: "Submission failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
