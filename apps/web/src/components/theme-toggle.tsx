'use client';

import * as React from 'react';
import { Button } from '@shelfd/ui';
import { Sun, Moon } from 'lucide-react'; // Or any icon set you have installed

export function ThemeToggle() {
  // 💡 Prevent hydration mismatch flickering by waiting for the mount state
  const [mounted, setMounted] = React.useState(false);
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    // Read the current state set by your layout's raw script block
    const isCurrentlyDark = document.documentElement.classList.contains('dark');
    setIsDark(isCurrentlyDark);
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);

    // 💡 Update both the HTML class list and localStorage synchronously
    if (nextTheme) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
      localStorage.setItem('theme', 'light');
    }
  };

  // Render a visual skeleton placeholder button during hydration to avoid page shifting
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="rounded-full size-8 opacity-0">
        <Sun className="size-4" />
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
