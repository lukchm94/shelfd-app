// apps/web/src/components/feeds/shelf-feed.tsx
'use client';

import * as React from 'react';
import { Loader2 } from 'lucide-react';
import { ShelfCard } from '@/components/feeds/cards/shelf'; // 💡 Uses your new atomic card component
import { fetchShelvesPaginated } from '../../../app/shelves/actions';
import type { ShelfDTO, ShelfFeedPropsDTO } from '@shelfd/dtos';

export function ShelfFeed({ initialShelves, initialNextPage }: ShelfFeedPropsDTO) {
  const [items, setItems] = React.useState<ShelfDTO[]>(initialShelves);
  const [page, setPage] = React.useState<number | null>(initialNextPage);
  const [loading, setLoading] = React.useState(false);

  const [likedShelves, setLikedShelves] = React.useState<string[]>([]);
  const [visitedShelves, setVisitedShelves] = React.useState<string[]>([]);

  const loadMoreRef = React.useRef<HTMLDivElement | null>(null);

  const handleLikeToggle = (id: string) => {
    setLikedShelves((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const handleTrackVisit = (id: string) => {
    setVisitedShelves((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const loadMoreItems = React.useCallback(async () => {
    if (!page || loading) return;
    setLoading(true);
    try {
      const response = await fetchShelvesPaginated(page);
      setItems((prev) => [...prev, ...response.data]);
      setPage(response.nextPage);
    } catch (error) {
      console.error('Failed to load more shelves:', error);
    } finally {
      setLoading(false);
    }
  }, [page, loading]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMoreItems();
      },
      { threshold: 0.1, rootMargin: '100px' },
    );
    const currentRef = loadMoreRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
      observer.disconnect();
    };
  }, [loadMoreItems]);

  return (
    /* 💡 Keeps single-line gaps on mobile via gap-0, standard layouts on desktop */
    <div className="flex flex-col gap-0 sm:gap-6 sm:max-w-2xl sm:mx-auto w-full pb-24 select-none">
      {items.map((shelf) => (
        <ShelfCard
          key={shelf.id}
          shelf={shelf}
          isLiked={likedShelves.includes(shelf.id)}
          isVisited={visitedShelves.includes(shelf.id)}
          onLikeToggle={handleLikeToggle}
          onVisitTrack={handleTrackVisit}
        />
      ))}

      {page && (
        <div ref={loadMoreRef} className="py-8 flex justify-center w-full min-h-[50px]">
          {loading && <Loader2 className="size-6 animate-spin text-blue-500" />}
        </div>
      )}
    </div>
  );
}
