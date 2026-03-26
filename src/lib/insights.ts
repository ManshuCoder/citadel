import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { z } from "zod";
import { compileMDX } from "next-mdx-remote/rsc";

const InsightFrontmatterSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  date: z.string().min(1), // ISO string
  tags: z.array(z.string()).default([]),
});

export type Insight = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingMinutes: number;
};

const CONTENT_DIR = path.join(process.cwd(), "content", "insights");

async function readMdxFile(slug: string) {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  return await fs.readFile(filePath, "utf8");
}

export async function listInsights(): Promise<Insight[]> {
  const files = await fs.readdir(CONTENT_DIR);
  const slugs = files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));

  const all = await Promise.all(
    slugs.map(async (slug) => {
      const raw = await readMdxFile(slug);
      const { data, content } = matter(raw);
      const parsed = InsightFrontmatterSchema.safeParse(data);
      if (!parsed.success) return null;
      const rt = readingTime(content);
      return {
        slug,
        ...parsed.data,
        readingMinutes: Math.max(1, Math.round(rt.minutes)),
      } satisfies Insight;
    }),
  );

  return all
    .filter((x): x is Insight => Boolean(x))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getInsight(slug: string) {
  const raw = await readMdxFile(slug);
  const { data, content } = matter(raw);
  const frontmatter = InsightFrontmatterSchema.parse(data);
  const compiled = await compileMDX<{
    title: string;
    description: string;
    date: string;
    tags: string[];
  }>({
    source: content,
    options: { parseFrontmatter: false },
  });

  const rt = readingTime(content);

  return {
    slug,
    frontmatter: {
      ...frontmatter,
      readingMinutes: Math.max(1, Math.round(rt.minutes)),
    },
    content: compiled.content,
  };
}

export async function listInsightSlugs(): Promise<string[]> {
  const files = await fs.readdir(CONTENT_DIR);
  return files.filter((f) => f.endsWith(".mdx")).map((f) => f.replace(/\.mdx$/, ""));
}

