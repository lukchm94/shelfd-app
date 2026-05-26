// apps/web/app/shelves/[id]/page.tsx
import { collections } from '../../../src/mocks/collections';
import { items } from '../../../src/mocks/items';
import { VaultItemCard } from '@/components/feeds/cards/vault-item';
import { ShelfCard } from '@/components/feeds/cards/shelf';
import { ShelfCardWrapper } from '@/components/feeds/shelf-wrapper';

type Props = { params: Promise<{ id: string }> };

export default async function CollectionPage({ params }: Props): Promise<React.JSX.Element> {
  const { id } = await params;

  const collection = collections.find((c) => c.id === id) || collections[0];
  const collectionItems = items.filter((it) => it.collectionId === collection.id);

  return (
    <div className="-mx-5 w-[calc(100%+2.5rem)] sm:mx-0 sm:w-full flex flex-col gap-10">
      <ShelfCardWrapper shelf={collection} showOpenButton={false} />

      {/* Vault Sub-Items Grid Display Section */}
      <div className="px-4 sm:px-0 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {collectionItems.map((it) => (
          <VaultItemCard key={it.id} item={it} />
        ))}
      </div>
    </div>
  );
}
