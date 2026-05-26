// apps/web/components/discovery-feed.tsx
'use client';

import * as React from 'react';
import { ShelfCard, ShelfCardProps } from '@/components/feeds/cards/shelf';
import { CollectorCard } from '@/components/feeds/cards/collector';
import { FeedItem, FeedItemTypes } from '../constants/feedItems';
import { ShelfDTO, UserDTO } from '@shelfd/dtos';

interface DiscoveryFeedProps {
  initialItems: FeedItem[];
  nextPageToken: number | null;
}

export function DiscoveryFeed({ initialItems }: DiscoveryFeedProps) {
  const [items] = React.useState<FeedItem[]>(initialItems);

  // High-level client state trackers shared by children elements
  const [likedShelves, setLikedShelves] = React.useState<string[]>([]);
  const [followedCollectors, setFollowedCollectors] = React.useState<string[]>([]);
  const [visitedItems, setVisitedItems] = React.useState<string[]>([]);

  const handleTrackVisit = (id: string) => {
    setVisitedItems((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  return (
    <div className="flex flex-col gap-0 sm:gap-6 sm:max-w-2xl sm:mx-auto w-full pb-24">
      {items.map((item) => {
        const isVisited = visitedItems.includes(item.id);

        switch (item.type) {
          case FeedItemTypes.SHELF:
            const props: ShelfCardProps = { shelf: item.data };

            return (
              <ShelfCard
                key={item.id}
                {...props}
                isLiked={likedShelves.includes(item.id)}
                isVisited={isVisited}
                onLikeToggle={(id) =>
                  setLikedShelves((prev) =>
                    prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
                  )
                }
                onVisitTrack={handleTrackVisit}
              />
            );

          case FeedItemTypes.PROFILE:
            const profileData = item.data as UserDTO;
            return (
              <CollectorCard
                key={item.id}
                profile={profileData}
                isFollowed={followedCollectors.includes(item.id)}
                isVisited={isVisited}
                onFollowToggle={(id) =>
                  setFollowedCollectors((prev) =>
                    prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
                  )
                }
                onVisitTrack={handleTrackVisit}
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
