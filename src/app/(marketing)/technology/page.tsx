import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Technology",
  description: "Engineering and infrastructure highlights at Apex Markets.",
};

const highlights = [
  {
    title: "Low-latency architecture",
    body: "Clear latency budgets, predictable queues, and metrics-first optimization—without premature complexity.",
  },
  {
    title: "Operational readiness",
    body: "Runbooks, on-call hygiene, and incident review loops designed as core product workflows.",
  },
  {
    title: "Security by default",
    body: "Least-privilege access, strong auditing, and safe-by-construction interfaces for critical paths.",
  },
  {
    title: "Observability everywhere",
    body: "Distributed tracing, golden signals, and consistent naming so debugging stays fast.",
  },
] as const;

export default function TechnologyPage() {
  return (
    <div className="bg-background">
      <div className="container py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <h1 className="font-[var(--font-display)] text-4xl tracking-tight md:text-5xl">
                Technology
              </h1>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                A premium, production-ready architecture: Next.js App Router,
                Tailwind, Radix UI, Framer Motion, MDX insights, and an API-ready
                structure optimized for Vercel.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/insights">Read engineering insights</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/contact">Discuss integration</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 md:grid-cols-2">
              {highlights.map((h, idx) => (
                <Reveal key={h.title} delay={0.03 * idx}>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="text-sm font-medium">{h.title}</div>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {h.body}
                      </p>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Reveal delay={0.05}>
          <Card className="mt-12 overflow-hidden">
            <CardContent className="p-8 md:p-10">
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  ["CMS-ready", "MDX now, Sanity/Contentlayer later with minimal changes."],
                  ["API-ready", "Route handlers and typed schemas included for future integrations."],
                  ["Accessible", "Keyboard navigation, ARIA patterns, and focus styles built-in."],
                ].map(([t, b]) => (
                  <div key={t}>
                    <div className="text-sm font-medium">{t}</div>
                    <p className="mt-2 text-sm text-muted-foreground">{b}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </div>
  );
}

