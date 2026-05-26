// apps/web/src/components/feeds/collector-feed.tsx
'use client';

import * as React from 'react';
import { Loader2 } from 'lucide-react';
import { CollectorCard } from '@/components/feeds/cards/collector'; // 💡 Uses your new atomic collector card component
import { fetchUsersPaginated } from '../../../app/profiles/actions';
import type { UserDTO, UserFeedPropsDTO } from '@shelfd/dtos';

export function CollectorFeed({ initialUsers, initialNextPage }: UserFeedPropsDTO) {
  const [items, setItems] = React.useState<UserDTO[]>(initialUsers);
  const [page, setPage] = React.useState<number | null>(initialNextPage);
  const [loading, setLoading] = React.useState(false);

  const [followedProfiles, setFollowedProfiles] = React.useState<string[]>([]);
  const [visitedProfiles, setVisitedProfiles] = React.useState<string[]>([]);

  const loadMoreRef = React.useRef<HTMLDivElement | null>(null);

  const handleFollowToggle = (id: string) => {
    setFollowedProfiles((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const handleTrackVisit = (id: string) => {
    setVisitedProfiles((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const loadMoreItems = React.useCallback(async () => {
    if (!page || loading) return;
    setLoading(true);
    try {
      const response = await fetchUsersPaginated(page);
      setItems((prev) => [...prev, ...response.data]);
      setPage(response.nextPage);
    } catch (error) {
      console.error('Failed to load more profiles:', error);
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
    /* 💡 Single line stacked cards with full bleeding native look */
    <div className="flex flex-col gap-0 sm:gap-6 sm:max-w-2xl sm:mx-auto w-full pb-24 select-none">
      {items.map((profile) => (
        <CollectorCard
          key={profile.id}
          profile={profile}
          isFollowed={followedProfiles.includes(profile.id)}
          isVisited={visitedProfiles.includes(profile.id)}
          onFollowToggle={handleFollowToggle}
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
