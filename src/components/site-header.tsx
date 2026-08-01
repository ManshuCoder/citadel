"use client";

import Link from "next/link";
import { Menu, Search } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#111310]/90 text-[#f5f5ef] backdrop-blur-xl">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-black"
      >
        Skip to content
      </a>

      <div className="chess-shell flex h-[76px] items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="group inline-flex items-center gap-2.5">
            <span className="relative flex size-9 items-center justify-center rounded-xl bg-[#b6e33d] text-2xl text-[#182006] transition-transform group-hover:-rotate-6">
              ♞
            </span>
            <span className="font-(--font-display) text-xl font-bold tracking-[-0.04em]">
              Knightly
            </span>
          </Link>
          <nav className="hidden items-center gap-7 lg:flex">
            <a href="#play" className="nav-link">Play</a>
            <a href="#puzzles" className="nav-link">Puzzles</a>
            <a href="#community" className="nav-link">Community</a>
            <a href="#learn" className="nav-link">Learn</a>
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Search"
            className="hidden size-10 items-center justify-center rounded-full text-white/55 transition-colors hover:bg-white/10 hover:text-white sm:flex"
          >
            <Search className="size-4" />
          </button>
          <button className="hidden h-10 items-center px-3 text-sm font-bold text-white/60 hover:text-white sm:inline-flex">
            Log in
          </button>
          <button className="h-10 rounded-full bg-[#b6e33d] px-5 text-sm font-extrabold text-[#182006] transition-transform hover:-translate-y-0.5">
            Sign up
          </button>
          <button
            type="button"
            aria-label="Open menu"
            className="flex size-10 items-center justify-center rounded-full text-white/70 lg:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

