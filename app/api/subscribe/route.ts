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

  const kitRes = await fetch(`https://api.kit.com/v4/tags/${KIT_TAG_ID}/subscribers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Kit-Api-Key": apiKey,
    },
    body: JSON.stringify({ email_address: email }),
  });

  const detail = await kitRes.text();

  if (!kitRes.ok) {
    console.error("Kit subscribe failed:", kitRes.status, detail);
    return NextResponse.json({ error: "Subscription failed" }, { status: 502 });
  }

  console.log("Kit subscribe response:", kitRes.status, detail);
  return NextResponse.json({ ok: true });
}
