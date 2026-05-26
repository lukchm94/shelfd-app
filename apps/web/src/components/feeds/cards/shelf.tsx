// apps/web/src/components/feeds/cards/shelf.tsx
import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, Badge } from '@shelfd/ui';
import { Layers, Heart } from 'lucide-react';
import type { ShelfDTO } from '@shelfd/dtos';

export interface ShelfCardProps {
  shelf: ShelfDTO;
  isLiked?: boolean;
  isVisited?: boolean;
  onLikeToggle?: (id: string) => void;
  onVisitTrack?: (id: string) => void;
  showOpenButton?: boolean;
}

export function ShelfCard(cardsProps: ShelfCardProps) {
  const {
    shelf,
    isLiked = false,
    isVisited = false,
    onLikeToggle,
    onVisitTrack,
    showOpenButton = true,
  } = cardsProps;

  return (
    <Card className="bg-white dark:bg-zinc-950 border-0 border-b border-zinc-100 dark:border-zinc-900 sm:border sm:border-zinc-200 dark:sm:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-none sm:shadow-md group w-full rounded-none sm:rounded-xl">
      {/* Container maintains global app padding, while children use negative margins to break out */}
      <CardContent className="px-10 py-5 sm:p-6 space-y-4">
        {/* Tags Row */}
        <div className="flex items-center justify-between">
          <Badge
            variant="outline"
            className="text-[10px] uppercase font-bold text-blue-600 dark:text-blue-400 border-blue-200 bg-blue-50 px-2.5 py-0.5"
          >
            {shelf.tags?.join(', ') || 'No Tags'}
          </Badge>
          <Layers className="size-4 text-zinc-400 group-hover:text-blue-600 transition-colors" />
        </div>

        {/* Content Section */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 transition-colors">
            {shelf.title}
          </h2>

          {shelf.backgroundImageUrl && (
            /* Negative margin -mx-5 counters the px-5 padding to create full-bleed image */
            <div className="-mx-5 w-[calc(100%+2.5rem)] sm:mx-0 sm:w-full overflow-hidden rounded-none sm:rounded-md border-y sm:border border-zinc-100 dark:border-zinc-900">
              <Image
                src={shelf.backgroundImageUrl}
                alt={shelf.title}
                className="w-full h-52 sm:h-40 object-cover"
                width={600}
                height={160}
                unoptimized
                loading="eager"
              />
            </div>
          )}

          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2">
            {shelf.description || 'No description provided.'}
          </p>
        </div>

        {/* Action Bar: Only renders if interactive hooks are provided by the parent feed */}
        {onLikeToggle && onVisitTrack && (
          <div className="pt-3 flex justify-between items-center border-t border-zinc-100 dark:border-zinc-900">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onLikeToggle(shelf.id)}
                className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition-all active:scale-95 ${
                  isLiked
                    ? 'bg-blue-100 text-blue-900'
                    : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'
                }`}
              >
                <Heart className={`size-4 ${isLiked ? 'fill-current text-blue-600' : ''}`} />
              </button>
              <span className="inline-flex h-9 items-center justify-center rounded-full border px-4 text-xs font-semibold bg-zinc-100 text-zinc-900">
                Wows: {shelf.wowsCount || 0}
              </span>
            </div>
            {showOpenButton && (
              <Link
                href={`/shelves/${shelf.id}`}
                onClick={() => onVisitTrack(shelf.id)}
                className={`inline-flex h-9 items-center justify-center rounded-full border px-4 text-xs font-semibold ${
                  isVisited
                    ? 'bg-blue-100 text-blue-900'
                    : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'
                }`}
              >
                Open Shelf
              </Link>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
