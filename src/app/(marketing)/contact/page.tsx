import type { Metadata } from "next";

import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a conversation with Apex Markets.",
};

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <h1 className="font-(--font-display) text-4xl tracking-tight md:text-5xl">
                Contact
              </h1>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Tell us what you’re building. This form posts to a mock API route
                that’s ready to integrate with your email/CRM provider.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 grid gap-3">
                {[
                  ["Response time", "Typically within 1–2 business days"],
                  ["Security", "Avoid sending sensitive data via this form"],
                  ["Integrations", "Resend/Postmark, HubSpot, or your CRM"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="rounded-3xl border border-border bg-muted/30 p-5"
                  >
                    <div className="text-sm font-medium">{k}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{v}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}

