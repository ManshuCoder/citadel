import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getInsight, listInsightSlugs } from "@/lib/insights";
import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";

export async function generateStaticParams() {
  const slugs = await listInsightSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getInsight(slug);
    return {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      openGraph: {
        title: post.frontmatter.title,
        description: post.frontmatter.description,
        type: "article",
      },
    };
  } catch {
    return { title: "Insight" };
  }
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post: Awaited<ReturnType<typeof getInsight>>;
  try {
    post = await getInsight(slug);
  } catch {
    notFound();
  }

  return (
    <div className="bg-background">
      <div className="container py-14 md:py-16">
        <div className="max-w-3xl">
          <Reveal>
            <Link
              href="/insights"
              className="text-sm font-medium text-muted-foreground underline-offset-4 hover:underline"
            >
              ← All insights
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-4 text-balance font-(--font-display) text-4xl tracking-tight md:text-5xl">
              {post.frontmatter.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              {post.frontmatter.description}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <span>{new Date(post.frontmatter.date).toLocaleDateString()}</span>
              <span aria-hidden="true">•</span>
              <span>{post.frontmatter.readingMinutes} min read</span>
              {post.frontmatter.tags?.length ? (
                <>
                  <span aria-hidden="true">•</span>
                  <span className="flex flex-wrap gap-2">
                    {post.frontmatter.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-muted/50 px-3 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </span>
                </>
              ) : null}
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Card>
              <CardContent className="prose prose-zinc max-w-none py-10 dark:prose-invert">
                {post.content}
              </CardContent>
            </Card>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="text-sm font-medium">Talk with us</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Want to connect this to a CMS (Sanity/Contentlayer) or wire
                    up an API? This codebase is structured for it.
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/contact"
                      className="text-sm font-medium underline-offset-4 hover:underline"
                    >
                      Contact →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

