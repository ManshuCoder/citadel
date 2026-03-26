import { NextResponse } from "next/server";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(200),
  company: z.string().max(200).optional().or(z.literal("")),
  message: z.string().min(10).max(4000),
});

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = ContactSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Invalid request", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  // Mock integration point:
  // - send email (Resend/Postmark)
  // - create ticket (Zendesk/Linear)
  // - store in CRM (HubSpot/Salesforce)
  await new Promise((r) => setTimeout(r, 450));

  return NextResponse.json({ ok: true });
}

