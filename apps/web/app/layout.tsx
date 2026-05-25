import '../styles/globals.css';
import Link from 'next/link';
import Script from 'next/script';
import { Geist } from 'next/font/google';
import { cn } from '@/lib/utils';
import { JSX, ReactNode } from 'react';
import { Button } from '@shelfd/ui';
import { ThemeToggle } from '@/components/theme-toggle';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata = {
  title: 'Shelfd',
};

export default function RootLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <html lang="en" className={cn('font-sans', geist.variable)} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased overflow-y-auto overflow-x-hidden">
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            try {
              const storedTheme = localStorage.getItem('theme');
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const theme = storedTheme === 'light' || storedTheme === 'dark'
                ? storedTheme
                : prefersDark ? 'dark' : 'light';
              document.documentElement.classList.toggle('dark', theme === 'dark');
              document.documentElement.style.colorScheme = theme;
            } catch (_) {}
          `}
        </Script>
        <header className="sticky top-0 z-10 border-b border-border/70 bg-background/85 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
            <Link href="/" className="text-lg font-semibold tracking-tight text-foreground">
              shelfd
            </Link>
            <div className="flex items-center gap-2 rounded-full  border-border/70 bg-card px-2 py-1.5 shadow-sm">
              <Button
                asChild
                className="border-zinc-800 shadow-md rounded-full w-fit p-2"
                variant="ghost"
                size="sm"
              >
                <Link href="/profile/sample">Profile</Link>
              </Button>
              <Button
                asChild
                className="border-zinc-800 shadow-md rounded-full w-fit p-2"
                variant="ghost"
                size="sm"
              >
                <Link href="/collection/sample">Collection</Link>
              </Button>
              <ThemeToggle />
            </div>
          </nav>
        </header>
        <main className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
          {children}
        </main>
      </body>
    </html>
  );
}
