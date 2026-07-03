import { NextResponse } from "next/server";
import { createOrUpdateKitSubscriber, tagKitSubscriber } from "@/lib/kit";

const COHOST_APPLICANT_TAG_ID = "20864766";

export async function POST(request: Request) {
  const { email, firstName, application } = await request.json();

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
