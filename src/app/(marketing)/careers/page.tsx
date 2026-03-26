import type { Metadata } from "next";
import Link from "next/link";

import { jobs } from "@/lib/jobs";
import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join a team that builds premium, resilient market systems.",
};

export default function CareersPage() {
  return (
    <div className="bg-background">
      <div className="container py-16 md:py-20">
        <div className="max-w-3xl">
          <Reveal>
            <h1 className="font-[var(--font-display)] text-4xl tracking-tight md:text-5xl">
              Careers
            </h1>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Work on systems where reliability, latency, and clarity matter.
              This is mock data today—designed to be API/CMS-ready tomorrow.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {jobs.map((j, idx) => (
            <Reveal key={j.id} delay={0.03 * idx}>
              <Card className="h-full transition-colors hover:bg-muted/30">
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="text-base font-medium">{j.title}</div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="rounded-full border border-border bg-muted/50 px-3 py-1">
                        {j.team}
                      </span>
                      <span className="rounded-full border border-border bg-muted/50 px-3 py-1">
                        {j.type}
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {j.description}
                  </p>
                  <div className="mt-4 text-sm text-muted-foreground">
                    {j.location}
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <Button asChild>
                      <Link href="/contact">Apply</Link>
                    </Button>
                    <Link
                      href="/contact"
                      className="text-sm font-medium underline-offset-4 hover:underline"
                    >
                      Learn more
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <section id="benefits" className="mt-14">
          <Reveal>
            <h2 className="font-[var(--font-display)] text-2xl tracking-tight md:text-3xl">
              Benefits
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["Ownership", "Small teams, clear accountability, and high trust."],
              ["Growth", "Structured mentorship, reviews, and learning budget."],
              ["Well-being", "Competitive health coverage and time off policies."],
            ].map(([title, body], idx) => (
              <Reveal key={title} delay={0.03 * idx}>
                <Card>
                  <CardContent className="p-6">
                    <div className="text-sm font-medium">{title}</div>
                    <p className="mt-2 text-sm text-muted-foreground">{body}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <Reveal>
            <Card className="overflow-hidden">
              <CardContent className="p-8 md:p-10">
                <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                  <div>
                    <div className="text-sm font-medium">
                      Ready to build with us?
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Tell us what you’re excited to work on. We’ll route you to
                      the right team.
                    </p>
                  </div>
                  <Button asChild size="lg">
                    <Link href="/contact">Start an application</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </section>
      </div>
    </div>
  );
}

