"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { useMounted } from "@/hooks/use-mounted";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const mounted = useMounted();
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-full"
    >
      {mounted ? (
        isDark ? (
          <>
            <Sun className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">Light</span>
          </>
        ) : (
          <>
            <Moon className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">Dark</span>
          </>
        )
      ) : (
        <span className="h-4 w-12 rounded-full bg-muted" aria-hidden="true" />
      )}
    </Button>
  );
}

