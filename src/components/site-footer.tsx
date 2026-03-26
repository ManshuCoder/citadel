"use client";

import Link from "next/link";

import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="text-sm font-semibold tracking-tight">
              <span className="font-[var(--font-display)] text-base">Apex</span>{" "}
              <span className="text-muted-foreground">Markets</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Premium, modern financial services—built as a demo site inspired
              by institutional design language, without copying branding or
              content.
            </p>
          </div>

          <div className="grid gap-8 md:col-span-8 md:grid-cols-3">
            <FooterColumn
              title="Company"
              links={[
                { href: "/about", label: "About" },
                { href: "/technology", label: "Technology" },
                { href: "/insights", label: "Insights" },
              ]}
            />
            <FooterColumn
              title="Careers"
              links={[
                { href: "/careers", label: "Open roles" },
                { href: "/careers#benefits", label: "Benefits" },
              ]}
            />
            <FooterColumn
              title="Contact"
              links={[
                { href: "/contact", label: "Request a conversation" },
                { href: site.links.linkedin, label: "LinkedIn", external: true },
                { href: site.links.x, label: "X", external: true },
              ]}
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>
            This is a sample project. Not an offer, solicitation, or financial
            advice.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string; external?: boolean }[];
}) {
  return (
    <div>
      <div className="text-sm font-medium">{title}</div>
      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noreferrer" : undefined}
              className="transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

