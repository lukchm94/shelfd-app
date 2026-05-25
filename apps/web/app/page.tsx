import Link from 'next/link';
import { collections } from '../src/mocks/collections';
import { Card } from '@shelfd/ui';

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Recent Collections</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {collections.map((c) => (
          <Card key={c.id} title={c.title} description={c.description}>
            <Link href={`/collection/${c.id}`} className="text-sm text-blue-600">
              Open
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
