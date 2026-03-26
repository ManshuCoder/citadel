import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedNumber } from "@/components/animated-number";

const stats = [
  { label: "Avg. response time", value: 8, suffix: "ms" },
  { label: "Infrastructure regions", value: 12, suffix: "" },
  { label: "Market venues connected", value: 70, suffix: "+" },
  { label: "On-call coverage", value: 24, suffix: "/7" },
] as const;

const featured = [
  {
    title: "Designing resilient execution systems",
    excerpt:
      "A pragmatic view on latency budgets, failure domains, and operational hygiene.",
    href: "/insights/resilient-execution-systems",
  },
  {
    title: "Market structure: what matters now",
    excerpt:
      "A plain-language primer on the mechanics that shape liquidity and pricing.",
    href: "/insights/market-structure-what-matters",
  },
  {
    title: "Engineering for observability",
    excerpt:
      "Tracing, metrics, and incident reviews as product features—not afterthoughts.",
    href: "/insights/engineering-for-observability",
  },
] as const;

export default function HomePage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border">
        <div className="container py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <Reveal>
                <p className="text-sm font-medium text-muted-foreground">
                  Institutional-grade markets experience
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-4 text-balance font-(--font-display) text-4xl leading-tight tracking-tight md:text-6xl">
                  Financial services, engineered for speed and clarity.
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
                  Apex Markets is a modern, premium demo site inspired by
                  institutional aesthetics—focused on execution, research, and
                  engineering excellence without copying any real-world branding
                  or content.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button asChild size="lg">
                    <Link href="/contact">Talk to us</Link>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <Link href="/technology">Explore our technology</Link>
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-3xl border border-border bg-card p-4"
                    >
                      <div className="text-xl font-semibold tracking-tight">
                        <AnimatedNumber value={s.value} suffix={s.suffix} />
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-5">
              <Reveal delay={0.05}>
                <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-muted/40 p-2">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--accent)/0.18),transparent_40%),radial-gradient(circle_at_80%_30%,hsl(var(--ring)/0.18),transparent_45%),radial-gradient(circle_at_40%_80%,hsl(var(--foreground)/0.08),transparent_50%)]" />
                  <div className="relative rounded-[2.2rem] bg-background p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-medium text-muted-foreground">
                          Live view (mock)
                        </p>
                        <p className="mt-1 text-sm font-medium">
                          Liquidity & risk posture
                        </p>
                      </div>
                      <span className="rounded-full border border-border bg-muted/60 px-3 py-1 text-xs text-muted-foreground">
                        Updated now
                      </span>
                    </div>
                    <div className="mt-6 grid gap-3">
                      {[
                        ["Venue connectivity", "Healthy"],
                        ["Latency budget", "On target"],
                        ["Incident backlog", "Low"],
                        ["Capacity headroom", "High"],
                      ].map(([k, v]) => (
                        <div
                          key={k}
                          className="flex items-center justify-between rounded-2xl border border-border bg-card px-4 py-3"
                        >
                          <span className="text-sm text-muted-foreground">
                            {k}
                          </span>
                          <span className="text-sm font-medium">{v}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 rounded-2xl border border-border bg-muted/40 p-4">
                      <p className="text-xs font-medium text-muted-foreground">
                        Note
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        This panel is illustrative UI only. Hook it up to an API
                        or CMS when you’re ready.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal>
                <h2 className="text-balance font-(--font-display) text-3xl tracking-tight">
                  Featured insights
                </h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Short, high-signal writing on engineering, market structure,
                  and operational excellence.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <Button asChild variant="secondary" className="mt-6">
                  <Link href="/insights">View all</Link>
                </Button>
              </Reveal>
            </div>

            <div className="md:col-span-8">
              <div className="grid gap-4 md:grid-cols-3">
                {featured.map((p, idx) => (
                  <Reveal key={p.href} delay={0.05 * idx}>
                    <Card className="h-full transition-colors hover:bg-muted/30">
                      <CardContent className="flex h-full flex-col">
                        <div className="text-sm font-medium">{p.title}</div>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {p.excerpt}
                        </p>
                        <div className="mt-6">
                          <Link
                            href={p.href}
                            className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
                          >
                            Read more
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

