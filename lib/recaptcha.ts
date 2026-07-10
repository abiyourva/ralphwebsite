// reCAPTCHA is opt-in: until RECAPTCHA_SECRET_KEY is set in the environment,
// verification is skipped entirely so signups keep working while the site
// owner is still registering keys at google.com/recaptcha/admin/create.
export async function verifyRecaptcha(token: unknown): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) return true;

  if (typeof token !== "string" || !token) return false;

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret: secretKey, response: token }),
  });
  if (!res.ok) return false;

  const data = await res.json();
  return data.success === true;
}
