import { fetchCollectionsPaginated } from './actions';
import { CollectionFeed } from '@/components/collection-feed';

export const metadata = {
  title: 'All Shelves | Shelfd',
};

export default async function AllCollectionsPage() {
  // Fetch initial collection array chunk (Page 1) directly from the Server Layer
  const { data: initialCollections, nextPage } = await fetchCollectionsPaginated(1);

  return (
    <main className="w-full min-h-screen flex flex-col gap-10">
      {/* Typographic Header Banner Section */}
      <section className="max-w-2xl mx-auto w-full text-left space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          The Shared Feed
        </h1>
        <p className="text-base text-zinc-400 leading-normal">
          Explore curated collections uploaded continuously across the global network layout.
        </p>
      </section>

      {/* Infinite Scrolling Layout Shell Client Context Component */}
      <CollectionFeed initialCollections={initialCollections} initialNextPage={nextPage} />
    </main>
  );
}
