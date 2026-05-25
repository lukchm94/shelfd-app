import Link from 'next/link';
import { collections } from '../src/mocks/collections';
import { ArrowRight, Layers3 } from 'lucide-react';
import {
  Badge,
  Button,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@shelfd/ui';

export default function Home() {
  return (
    <div className="space-y-16 sm:space-y-20">
      <section className="grid gap-10 py-4 sm:py-6 md:grid-cols-[1.15fr_0.85fr] md:items-end">
        <div className="space-y-6">
          <Badge
            variant="outline"
            className="gap-2 uppercase tracking-[0.18em] text-muted-foreground"
          >
            <Layers3 className="h-3.5 w-3.5 text-emerald-700" />
            Collector Library
          </Badge>
          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            Curated collections, beautifully kept.
          </h1>
        </div>
        <p className="max-w-xl text-lg leading-8 text-muted-foreground md:justify-self-end">
          Browse recent shelves, open a collection, and keep every card, figure, and piece of
          memorabilia feeling considered.
        </p>
      </section>

      <section>
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Recent
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
              Collections
            </h2>
          </div>
          <Button asChild variant="outline" size="lg" className="hidden sm:inline-flex">
            <Link href="/profile/sample">View profile</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {collections.map((c) => (
            <Card key={c.id} className="min-h-56 p-6 sm:p-7">
              <CardHeader className="p-0">
                <CardTitle>{c.title}</CardTitle>
                <CardDescription>{c.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto justify-between gap-4 p-0 pt-2">
                <div className="flex -space-x-2">
                  <span className="h-8 w-8 rounded-full border-2 border-background bg-emerald-100 dark:bg-emerald-950" />
                  <span className="h-8 w-8 rounded-full border-2 border-background bg-amber-100 dark:bg-amber-950" />
                  <span className="h-8 w-8 rounded-full border-2 border-background bg-muted" />
                </div>
                <Button asChild>
                  <Link href={`/collection/${c.id}`}>
                    Open
                    <ArrowRight data-icon="inline-end" className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
