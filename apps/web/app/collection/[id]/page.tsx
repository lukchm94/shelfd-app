import { collections } from '../../../src/mocks/collections';
import { items } from '../../../src/mocks/items';
import Link from 'next/link';
import { ArrowLeft, BadgeCheck } from 'lucide-react';
import { Badge, Button, Card, CardContent, CardFooter, CardHeader, CardTitle } from '@shelfd/ui';

type Props = { params: { id: string } };

export default async function CollectionPage({ params }: Props): Promise<React.JSX.Element> {
  const p = await params;
  const collection = collections.find((c) => c.id === p.id) || collections[0];
  const collectionItems = items.filter((it) => it.collectionId === collection.id);

  return (
    <div className="space-y-14 sm:space-y-16">
      <Card className="p-10 bg-zinc-900/50 backdrop-blur-sm border-zinc-800/80">
        <CardContent className="grid gap-10 p-0 md:grid-cols-[1fr_auto] md:items-end">
          <div className="space-y-4">
            <Badge
              variant="outline"
              className="uppercase tracking-[0.18em] py-3 px-4 text-sm bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full w-fit gap-2"
            >
              Collection
            </Badge>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground py-8">
              {collection.title}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground">
              {collection.description}
            </p>
          </div>
          <Badge className="rounded-full p-4 py-8 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-sm font-medium tracking-wide w-fit justify-self-begin">
            {collectionItems.length} items
          </Badge>
        </CardContent>
      </Card>

      <section className="grid grid-cols-1 gap-6 min-[440px]:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {collectionItems.map((it) => (
          <Card key={it.id} className="overflow-hidden py-0">
            <CardHeader className="px-6 pt-6">
              <div className="flex items-start justify-between gap-3">
                <CardTitle className="text-sm">{it.name}</CardTitle>
                <BadgeCheck className="h-4 w-4 shrink-0 text-emerald-700" />
              </div>
              <p>Wowed: {it.wowed}</p>
            </CardHeader>
            <CardContent className="px-0">
              <div className="flex aspect-[4/3] items-center justify-center bg-muted">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-background/80 bg-background/70 text-lg font-semibold text-foreground shadow-sm backdrop-blur">
                  {it.name.slice(-1)}
                </div>
              </div>
            </CardContent>
            <CardFooter className="px-6 pb-6">{it.metadata}</CardFooter>
          </Card>
        ))}
      </section>
    </div>
  );
}
