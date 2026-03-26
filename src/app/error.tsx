"use client";

import * as React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container flex min-h-[60vh] flex-col items-start justify-center py-16">
      <p className="text-sm font-medium text-muted-foreground">Something went wrong</p>
      <h1 className="mt-3 text-balance font-[var(--font-display)] text-4xl tracking-tight">
        We hit an unexpected error.
      </h1>
      <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
        Try again, or return home. If this persists, check server logs.{" "}
        {error?.digest ? <span className="font-mono">({error.digest})</span> : null}
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button type="button" onClick={reset}>
          Try again
        </Button>
        <Button asChild variant="secondary">
          <Link href="/">Go home</Link>
        </Button>
      </div>
    </div>
  );
}

