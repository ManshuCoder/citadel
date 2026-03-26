import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description: "Mission, leadership, and culture at Apex Markets.",
};

const principles = [
  {
    title: "Clarity over complexity",
    body: "We ship systems and experiences that explain themselves—especially under stress.",
  },
  {
    title: "Reliability is a feature",
    body: "Operational readiness is part of the product, with clear ownership and measurable outcomes.",
  },
  {
    title: "High-signal collaboration",
    body: "We optimize for fast alignment and durable decisions, not endless meetings.",
  },
] as const;

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container py-16 md:py-20">
        <div className="max-w-3xl">
          <Reveal>
            <h1 className="font-[var(--font-display)] text-4xl tracking-tight md:text-5xl">
              About Apex
            </h1>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Apex Markets is a modern financial services demo site focused on
              institutional-grade design, strong typography, and production-ready
              engineering patterns—built without copying any real-world branding
              or content.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {principles.map((p, idx) => (
            <Reveal key={p.title} delay={0.03 * idx}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="text-sm font-medium">{p.title}</div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {p.body}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <Card className="h-full overflow-hidden">
              <CardContent className="p-8">
                <p className="text-sm font-medium">Mission</p>
                <p className="mt-2 text-pretty text-lg leading-8 text-muted-foreground">
                  Build durable, transparent systems that help institutions
                  participate in markets with confidence—through disciplined
                  engineering, clear research, and operational excellence.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button asChild>
                    <Link href="/technology">See our technology</Link>
                  </Button>
                  <Button asChild variant="secondary">
                    <Link href="/careers">Join the team</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.05}>
            <Card className="h-full">
              <CardContent className="p-8">
                <p className="text-sm font-medium">Leadership</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  This demo site includes placeholder leadership content. Replace
                  with real bios or connect to a CMS later.
                </p>
                <div className="mt-6 grid gap-3">
                  {["CEO — Strategy & execution", "CTO — Engineering & platform", "COO — Operations & risk"].map(
                    (x) => (
                      <div
                        key={x}
                        className="rounded-2xl border border-border bg-muted/30 px-4 py-3 text-sm"
                      >
                        {x}
                      </div>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

