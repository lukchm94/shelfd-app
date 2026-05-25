// apps/web/components/collection-feed.tsx
'use client';

import * as React from 'react';
import Link from 'next/link';
import { Card, CardContent, Badge } from '@shelfd/ui';
import { fetchCollectionsPaginated } from '../../app/collection/actions';
import type { CollectionDTO, CollectionFeedPropsDTO } from '../types/collection.dto';
import { Loader2, Layers } from 'lucide-react';

export function CollectionFeed({ initialCollections, initialNextPage }: CollectionFeedPropsDTO) {
  const [items, setItems] = React.useState<CollectionDTO[]>(initialCollections);
  const [page, setPage] = React.useState<number | null>(initialNextPage);
  const [loading, setLoading] = React.useState(false);

  // Create a tracking anchor to observe scroll boundary entries
  const loadMoreRef = React.useRef<HTMLDivElement | null>(null);

  const loadMoreItems = React.useCallback(async () => {
    if (!page || loading) return;

    setLoading(true);
    try {
      const response = await fetchCollectionsPaginated(page);
      setItems((prev) => [...prev, ...response.data]);
      setPage(response.nextPage);
    } catch (error) {
      console.error('Failed to load more shelves from DTO layer:', error);
    } finally {
      setLoading(false);
    }
  }, [page, loading]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Trigger data fetch the moment the loader enters the viewport
        if (entries[0].isIntersecting) {
          loadMoreItems();
        }
      },
      { threshold: 0.1, rootMargin: '100px' }, // Pre-fetches slightly before hitting absolute bottom
    );

    const currentRef = loadMoreRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [loadMoreItems]);

  return (
    <div className="flex flex-col gap-6 max-w-2xl mx-auto w-full pb-24">
      {/* Dynamic Collection Feed Stack */}
      {items.map((collection) => (
        <Card
          key={collection.id}
          className="bg-zinc-950 border-zinc-800/80 hover:border-zinc-700 transition-all shadow-md group"
        >
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <Badge
                variant="outline"
                className="text-[10px] uppercase tracking-wider text-emerald-400 border-emerald-500/10 bg-emerald-500/5 font-bold px-2.5 py-0.5"
              >
                Collection
              </Badge>
              <Layers className="size-4 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
            </div>

            <div className="space-y-1">
              <h2 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                {collection.title}
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2">
                {collection.description || 'No description provided for this collection.'}
              </p>
            </div>

            <div className="pt-2 flex justify-end border-t border-zinc-900">
              <Link
                href={`/collection/${collection.id}`}
                className="inline-flex h-9 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 px-4 text-xs font-semibold text-white hover:bg-zinc-800 transition-all"
              >
                Open Shelf
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Intersection Observer Trigger Zone */}
      {page && (
        <div ref={loadMoreRef} className="py-8 flex justify-center w-full min-h-[50px]">
          {loading && <Loader2 className="size-6 animate-spin text-emerald-500" />}
        </div>
      )}
    </div>
  );
}
