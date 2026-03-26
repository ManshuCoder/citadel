import type { Metadata } from "next";
import Link from "next/link";

import { listInsights } from "@/lib/insights";
import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Research and commentary on engineering, market structure, and operational excellence.",
};

export default async function InsightsIndexPage() {
  const posts = await listInsights();

  return (
    <div className="bg-background">
      <div className="container py-16 md:py-20">
        <Reveal>
          <h1 className="font-(--font-display) text-4xl tracking-tight md:text-5xl">
            Insights
          </h1>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
            Short, high-signal writing—designed to be CMS-ready later, using MDX
            content today.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {posts.map((p, idx) => (
            <Reveal key={p.slug} delay={0.03 * idx}>
              <Card className="h-full transition-colors hover:bg-muted/30">
                <CardContent className="flex h-full flex-col">
                  <div className="flex items-center justify-between gap-3 text-xs text-muted-foreground">
                    <span>{new Date(p.date).toLocaleDateString()}</span>
                    <span>{p.readingMinutes} min read</span>
                  </div>
                  <div className="mt-3 text-base font-medium">{p.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {p.description}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={`/insights/${p.slug}`}
                      className="text-sm font-medium underline-offset-4 hover:underline"
                    >
                      Read
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

