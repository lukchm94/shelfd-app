// apps/web/app/page.tsx
import Link from 'next/link';
import { Badge, Button } from '@shelfd/ui';
import { fetchDiscoveryFeed } from './home/actions';
import { DiscoveryFeed } from '@/components/feeds/discovery';
import { FeedItemTypes } from '@/components/constants/feedItems';

export const metadata = {
  title: 'Discover | Shelfd',
};

export default async function Home() {
  const { data: rawItems, nextPage } = await fetchDiscoveryFeed(1);

  /* 💡 THE TRANSFORM FIX:
     Since rawItems already have a 'type' property from the API, we cleanly extract 
     the nested data properties right into the shape your new polymorphic FeedItem expects.
  */
  const initialItems = (rawItems || []).map((item) => {
    const itemId = item.id || Math.random().toString(36).substring(2);

    if (item.type === FeedItemTypes.SHELF) {
      return {
        type: FeedItemTypes.SHELF,
        id: itemId,
        data: {
          id: itemId,
          title: item.title || '',
          description: item.description || '',
          backgroundImageUrl: item.backgroundImageUrl,
          tags: item.tags || [],
          wowsCount: item.wowsCount || 0,
          itemCount: item.itemCount || 0,
        },
      };
    }

    return {
      type: FeedItemTypes.PROFILE,
      id: itemId,
      data: {
        id: itemId,
        name: item.name || '',
        username: item.username || '',
        avatar: item.avatar,
        bio: item.bio || '',
      },
    };
  });

  return (
    <div className="space-y-10 w-full overflow-x-hidden">
      {/* Structural heading text section layout context */}
      <section className="space-y-6 px-6 sm:px-0">
        <div className="space-y-4">
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            Explore curated collections and collectors.
          </h1>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
          Discover shelves and profiles from the community. Find new collections to explore and
          collectors to follow.
        </p>
      </section>

      {/* Breakout wrapper container handles smooth full width mobile bleed layouts */}
      <div className="-mx-5 w-[calc(100%+2.5rem)] sm:mx-0 sm:w-full">
        <DiscoveryFeed initialItems={initialItems} nextPageToken={nextPage} />
      </div>
    </div>
  );
}
