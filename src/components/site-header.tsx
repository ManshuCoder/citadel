"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

const companyLinks = [
  {
    title: "About",
    href: "/about",
    description: "Mission, leadership principles, and how we operate.",
  },
  {
    title: "Technology",
    href: "/technology",
    description: "Infrastructure, reliability, and engineering culture.",
  },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-full focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:ring-2 focus:ring-ring"
      >
        Skip to content
      </a>

      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="group inline-flex items-center gap-2">
          <span className="text-sm font-semibold tracking-tight">
            <span className="font-(--font-display) text-base tracking-tight">
              Apex
            </span>{" "}
            <span className="text-muted-foreground">Markets</span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <NavigationMenu.Root className="hidden md:block">
            <NavigationMenu.List className="flex items-center gap-1">
              <NavItemDropdown
                label="Company"
                active={pathname === "/about" || pathname === "/technology"}
              >
                <div className="grid w-[520px] grid-cols-2 gap-2 p-2">
                  {companyLinks.map((item) => (
                    <NavCardLink key={item.href} {...item} />
                  ))}
                  <div className="col-span-2 rounded-2xl border border-border bg-muted/40 p-4">
                    <p className="text-sm font-medium">Built for durability</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      A premium, modern financial services experience—without
                      copying any real-world branding or content.
                    </p>
                  </div>
                </div>
              </NavItemDropdown>

              <NavItemLink href="/insights" active={pathname?.startsWith("/insights")}>
                Insights
              </NavItemLink>

              <NavItemLink href="/careers" active={pathname === "/careers"}>
                Careers
              </NavItemLink>

              <NavItemLink href="/contact" active={pathname === "/contact"}>
                Contact
              </NavItemLink>
            </NavigationMenu.List>

            <NavigationMenu.Viewport className="data-[state=open]:animate-in data-[state=closed]:animate-out absolute left-1/2 top-[60px] w-(--radix-navigation-menu-viewport-width) -translate-x-1/2 overflow-hidden rounded-3xl border border-border bg-background shadow-lg" />
          </NavigationMenu.Root>

          <ThemeToggle />

          <Link
            href="/contact"
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground shadow-sm transition-colors hover:bg-accent/90 md:inline-flex"
          >
            Request a conversation
          </Link>
        </div>
      </div>
    </header>
  );
}

function NavItemLink({
  href,
  active,
  children,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <NavigationMenu.Item>
      <NavigationMenu.Link asChild>
        <Link
          href={href}
          className={cn(
            "inline-flex h-10 items-center rounded-full px-4 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            active && "bg-muted/60 text-foreground",
          )}
        >
          {children}
        </Link>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
}

function NavItemDropdown({
  label,
  active,
  children,
}: {
  label: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <NavigationMenu.Item>
      <NavigationMenu.Trigger
        className={cn(
          "inline-flex h-10 items-center gap-1 rounded-full px-4 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          active && "bg-muted/60 text-foreground",
        )}
      >
        {label}
        <ChevronDown className="size-4 text-muted-foreground" aria-hidden="true" />
      </NavigationMenu.Trigger>
      <NavigationMenu.Content className="data-[motion=from-start]:animate-in data-[motion=from-end]:animate-in data-[motion=to-start]:animate-out data-[motion=to-end]:animate-out">
        {children}
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  );
}

function NavCardLink({
  title,
  href,
  description,
}: {
  title: string;
  href: string;
  description: string;
}) {
  return (
    <NavigationMenu.Link asChild>
      <Link
        href={href}
        className="group rounded-2xl border border-border bg-card p-4 transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <div className="text-sm font-medium">{title}</div>
        <div className="mt-1 text-sm text-muted-foreground">{description}</div>
      </Link>
    </NavigationMenu.Link>
  );
}

