import '../styles/globals.css';
import Link from 'next/link';
import { Geist } from 'next/font/google';
import { cn } from '@/lib/utils';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata = {
  title: 'shelfd',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn('font-sans', geist.variable)}>
      <body>
        <header className="p-4 border-b">
          <nav className="max-w-4xl mx-auto flex gap-4">
            <Link href="/" className="font-semibold">
              Home
            </Link>
            <Link href="/profile/sample" className="text-sm text-slate-600">
              Profile
            </Link>
            <Link href="/collection/sample" className="text-sm text-slate-600">
              Collection
            </Link>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
