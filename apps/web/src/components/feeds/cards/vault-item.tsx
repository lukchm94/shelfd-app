// apps/web/src/components/feeds/cards/vault-item.tsx
import Image from 'next/image';
import { BadgeCheck, Sparkles } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@shelfd/ui';
import { JSX } from 'react/jsx-dev-runtime';

interface VaultItemProps {
  item: {
    id: string;
    name: string;
    wowed?: number;
    metadata?: string;
    url?: string;
  };
}

export function VaultItemCard({ item }: VaultItemProps): JSX.Element {
  return (
    <Card className="bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md transition-all group overflow-hidden flex flex-col h-full">
      {/* Card Header Container */}
      <CardHeader className="p-5 space-y-3 flex-none">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
            {item.name}
          </CardTitle>
          <BadgeCheck className="h-4 w-4 shrink-0 text-blue-700 dark:text-blue-500 fill-blue-50 dark:fill-blue-950/50" />
        </div>

        {/* Wowed engagement indicator layout line */}
        <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
          <Sparkles className="size-3 text-zinc-400" />
          <span>
            Curator Wowed:{' '}
            <b className="text-zinc-700 dark:text-zinc-200 font-semibold">{item.wowed || 0}</b>
          </span>
        </div>
      </CardHeader>

      {/* Media Visual Body Section */}
      <CardContent className="p-0 bg-zinc-50 dark:bg-zinc-900/40 border-y border-zinc-100 dark:border-zinc-900 flex-1 flex items-center justify-center">
        <div className="flex aspect-[4/3] w-full items-center justify-center relative group-hover:scale-[1.01] transition-transform duration-200">
          {/* Digital emblem block placeholder layout rendering */}
          {item.url && (
            /* Negative margin -mx-5 counters the px-5 padding to create full-bleed image */
            <div className="-mx-5 w-[calc(100%+2.5rem)] sm:mx-0 sm:w-full overflow-hidden rounded-none sm:rounded-md border-y sm:border border-zinc-100 dark:border-zinc-900">
              <Image
                src={item.url}
                alt={item.name}
                className="w-full h-52 sm:h-40 object-cover"
                width={600}
                height={160}
                unoptimized
                loading="eager"
              />
            </div>
          )}
        </div>
      </CardContent>

      {/* Card Metadata Footer Layout */}
      <CardFooter className="p-4 bg-zinc-50/50 dark:bg-zinc-950 text-xs text-zinc-500 dark:text-zinc-500 italic truncate font-medium flex-none border-t border-transparent">
        {item.metadata || 'No secondary string attributes declared.'}
      </CardFooter>
    </Card>
  );
}
