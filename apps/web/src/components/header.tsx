// apps/web/src/components/header.tsx
'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@shelfd/ui';
import { ThemeToggle } from '@/components/theme-toggle';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      {/* 💡 FIX: Shifted horizontal padding from px-4 to px-0 on mobile, pushing elements to the edge to match full-bleed cards. Re-adds px-4 at sm: / md: widths. */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 md:px-8 py-4">
        {/* Logo Mark */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="relative flex size-6 items-center justify-center rounded-md bg-zinc-900 border border-zinc-800 text-white shadow-sm dark:bg-white dark:text-zinc-950 dark:border-transparent transition-transform group-hover:scale-105">
            <span className="text-[11px] font-black tracking-tighter">S</span>
            <div className="absolute bottom-1 right-1 size-1 rounded-full bg-blue-700" />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-blue-600">
            shelfd
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-2 rounded-full border border-border/70 bg-card py-2 shadow-sm">
          <Button asChild className="rounded-full w-fit px-4 py-2" variant="ghost" size="sm">
            <Link href="/">Discovery</Link>
          </Button>
          <Button asChild className="rounded-full w-fit px-4 py-2" variant="ghost" size="sm">
            <Link href="/profiles">Collectors</Link>
          </Button>
          <Button asChild className="rounded-full w-fit px-4 py-2" variant="ghost" size="sm">
            <Link href="/shelves">Shelves</Link>
          </Button>
          <ThemeToggle />
        </div>

        {/* MOBILE NAVIGATION TRIGGERS */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-card text-foreground transition-all active:scale-95"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {/* MOBILE DROPDOWN PANEL */}
      {mobileMenuOpen && (
        // 💡 FIX: Adjusted padding and flattened mobile dropdown bottom corners to mimic a clean native app view sheet
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border/70 p-4 shadow-xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-150 rounded-none">
          <Button
            asChild
            className="w-full rounded-xl justify-start h-11 text-base px-4"
            variant="ghost"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Link href="/">Discovery</Link>
          </Button>
          <Button
            asChild
            className="w-full rounded-xl justify-start h-11 text-base px-4"
            variant="ghost"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Link href="/profiles">Collectors</Link>
          </Button>
          <Button
            asChild
            className="w-full rounded-xl justify-start h-11 text-base px-4"
            variant="ghost"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Link href="/shelves">Shelves</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
