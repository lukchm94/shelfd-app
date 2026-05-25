'use client';

import * as React from 'react';
import { Button } from '@shelfd/ui';
import { Sun, Moon } from 'lucide-react';
import { DisplayMode } from './constants/displayMode';

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const isCurrentlyDark = document.documentElement.classList.contains(DisplayMode.DARK);
    setIsDark(isCurrentlyDark);
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);

    if (nextTheme) {
      document.documentElement.classList.add(DisplayMode.DARK);
      document.documentElement.style.colorScheme = DisplayMode.DARK;
      localStorage.setItem('theme', DisplayMode.DARK);
    } else {
      document.documentElement.classList.remove(DisplayMode.DARK);
      document.documentElement.style.colorScheme = DisplayMode.LIGHT;
      localStorage.setItem('theme', DisplayMode.LIGHT);
    }
  };

  // Render a visual skeleton placeholder button during hydration to avoid page shifting
  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="inline-flex items-center justify-center rounded-full size-9 p-0 text-muted-foreground hover:text-foreground transition-all hover:bg-zinc-100 dark:hover:bg-zinc-800"
        aria-label="Toggle theme"
      >
        <Sun className="size-6" />
      </Button>
    );
  }

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      className="rounded-full size-8 text-muted-foreground hover:text-foreground transition-colors min-w-8 text-center"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="size-4 text-amber-500 transition-transform scale-100 rotate-0" />
      ) : (
        <Moon className="size-4 text-zinc-700 transition-transform scale-100 rotate-0" />
      )}
    </Button>
  );
}
