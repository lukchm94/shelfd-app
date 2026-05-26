// apps/web/app/layout.tsx
import '../styles/globals.css';
import Script from 'next/script';
import { Geist } from 'next/font/google';
import { cn } from '@/lib/utils';
import { JSX, ReactNode } from 'react';
import { Header } from '@/components/header'; // 💡 Import our smart header

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

        {/* Render our client-safe header menu component */}
        <Header />

        <main className="mx-auto w-full max-w-6xl px-0 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
          {children}
        </main>
      </body>
    </html>
  );
}
