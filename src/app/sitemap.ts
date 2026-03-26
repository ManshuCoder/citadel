import type { MetadataRoute } from "next";

import { listInsightSlugs } from "@/lib/insights";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.startsWith("http")
      ? process.env.NEXT_PUBLIC_SITE_URL
      : "http://localhost:3000";

  const staticRoutes = ["", "/about", "/careers", "/technology", "/insights", "/contact"];
  const slugs = await listInsightSlugs().catch(() => []);

  const routes: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  for (const slug of slugs) {
    routes.push({
      url: `${siteUrl}/insights/${slug}`,
      lastModified: new Date(),
    });
  }

  return routes;
}

