import { NextResponse } from "next/server";

const KIT_TAG_ID = "20665717";

export async function POST(request: Request) {
  const apiKey = process.env.KIT_API_SECRET;
  if (!apiKey) {
    console.error("KIT_API_SECRET is not set");
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
  }

  const { email } = await request.json();
  if (typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const createRes = await fetch("https://api.kit.com/v4/subscribers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Kit-Api-Key": apiKey,
    },
    body: JSON.stringify({ email_address: email, state: "active" }),
  });

  const createDetail = await createRes.text();
  if (!createRes.ok) {
    console.error("Kit create subscriber failed:", createRes.status, createDetail);
    return NextResponse.json({ error: "Subscription failed" }, { status: 502 });
  }

  const tagRes = await fetch(`https://api.kit.com/v4/tags/${KIT_TAG_ID}/subscribers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Kit-Api-Key": apiKey,
    },
    body: JSON.stringify({ email_address: email }),
  });

  const tagDetail = await tagRes.text();
  if (!tagRes.ok) {
    console.error("Kit tag subscriber failed:", tagRes.status, tagDetail);
    return NextResponse.json({ error: "Subscription failed" }, { status: 502 });
  }

  console.log("Kit subscribe response:", createRes.status, createDetail, tagRes.status, tagDetail);
  return NextResponse.json({ ok: true });
}
