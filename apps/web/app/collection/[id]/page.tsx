import { collections } from '../../../src/mocks/collections';
import { items } from '../../../src/mocks/items';
import { Card } from '@shelfd/ui';

type Props = { params: { id: string } };

export default async function CollectionPage({ params }: Props) {
  const p = await params;
  const collection = collections.find((c) => c.id === p.id) || collections[0];
  const collectionItems = items.filter((it) => it.collectionId === collection.id);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">{collection.title}</h1>
      <p className="text-slate-600 mb-4">{collection.description}</p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {collectionItems.map((it) => (
          <div key={it.id} className="space-y-2">
            <div className="w-full h-32 bg-slate-100 rounded-md flex items-center justify-center">
              Image
            </div>
            <div className="text-sm font-medium">{it.name}</div>
            <div className="text-xs text-slate-500">{it.metadata}</div>
            <Card title="Item 1" description="Description of item 1" />
          </div>
        ))
        
        }
      </div>
    </div>
  );
}
