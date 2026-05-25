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
      <Button asChild variant="ghost" className="w-fit">
        <Link href="/">
          <ArrowLeft data-icon="inline-start" className="h-4 w-4" />
          Collections
        </Link>
      </Button>

      <Card className="p-6 sm:p-8">
        <CardContent className="grid gap-10 p-0 md:grid-cols-[1fr_auto] md:items-end">
          <div className="space-y-4">
            <Badge variant="outline" className="uppercase tracking-[0.18em]">
              Collection
            </Badge>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground">
              {collection.title}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground">
              {collection.description}
            </p>
          </div>
          <Badge variant="secondary" className="px-4 py-3 text-sm">
            {collectionItems.length} items
          </Badge>
        </CardContent>
      </Card>

      <section className="grid grid-cols-1 gap-6 min-[420px]:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {collectionItems.map((it) => (
          <Card key={it.id} className="overflow-hidden py-0">
            <CardContent className="px-0">
              <div className="flex aspect-[4/3] items-center justify-center bg-muted">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-background/80 bg-background/70 text-lg font-semibold text-foreground shadow-sm backdrop-blur">
                  {it.name.slice(-1)}
                </div>
              </div>
            </CardContent>
            <CardHeader className="px-6 pt-6">
              <div className="flex items-start justify-between gap-3">
                <CardTitle className="text-sm">{it.name}</CardTitle>
                <BadgeCheck className="h-4 w-4 shrink-0 text-emerald-700" />
              </div>
            </CardHeader>
            <CardFooter className="px-6 pb-6">
              <Badge variant="outline" className="uppercase tracking-[0.14em]">
                {it.metadata}
              </Badge>
            </CardFooter>
          </Card>
        ))}
      </section>
    </div>
  );
}
