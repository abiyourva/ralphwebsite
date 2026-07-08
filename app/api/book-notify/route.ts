import { NextResponse } from "next/server";
import { createOrUpdateKitSubscriber, tagKitSubscriber } from "@/lib/kit";

const BOOK_TAG_IDS: Record<string, string> = {
  bfc: "20985252", // Book Notify - Becoming Financially Confident
  cca: "20985256", // Book Notify - Content Creator's Accountant
};

export async function POST(request: Request) {
  const { email, book } = await request.json();
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
