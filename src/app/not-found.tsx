import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-start justify-center py-16">
      <p className="text-sm font-medium text-muted-foreground">404</p>
      <h1 className="mt-3 text-balance font-[var(--font-display)] text-4xl tracking-tight">
        Page not found.
      </h1>
      <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
        The page you’re looking for doesn’t exist, or it may have moved.
      </p>
      <div className="mt-8">
        <Button asChild>
          <Link href="/">Back home</Link>
        </Button>
      </div>
    </div>
  );
}

