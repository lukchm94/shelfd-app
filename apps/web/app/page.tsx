import Link from 'next/link';
import { collections } from '../src/mocks/collections';
import { ArrowRight, Layers, Layers3 } from 'lucide-react';
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
    <div className="space-y-2 sm:space-y-2">
      <section className="grid gap-10  md:grid-cols-[1.15fr_0.85fr] md:items-end">
        <div className="space-y-6">
          <Badge
            className="bg-muted text-muted-foreground p-8 gap-2 border-zinc-800 shadow-md rounded-full w-fit"
            variant="outline"
          >
            Collector Library
          </Badge>
          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl gap-2 py-8">
            Curated collections, beautifully kept.
          </h1>
        </div>
        <p className="max-w-xl text-lg leading-8 text-muted-foreground md:justify-self-end">
          Browse recent shelves, open a collection, and keep every card, figure, and piece of
          memorabilia feeling considered.
        </p>
      </section>

      <section>
        <div className="mb-8 flex items-end justify-between gap-2">
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

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-6">
          {collections.map((c) => (
            <Card key={c.id} className="min-h-56 p-2 sm:p-4">
              <CardHeader className="p-2 gap-2">
                <CardTitle className="text-xl font-bold p-2 gap-2 text-left">{c.title}</CardTitle>
                <CardDescription>{c.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto justify-between gap-4 p-6 pt-2">
                <div className="flex -space-x-2">
                  <span className="h-8 w-8 rounded-full border-2 border-background bg-emerald-100 dark:bg-emerald-950 p-2" />
                  <span className="h-8 w-8 rounded-full border-2 border-background bg-amber-100 dark:bg-amber-950 p-2" />
                  <span className="h-8 w-8 rounded-full border-2 border-background bg-muted p-2" />
                </div>
                <Button
                  asChild
                  className="border-zinc-800 shadow-md rounded-full w-fit min-w-24"
                  variant="outline"
                  size="sm"
                >
                  {/* <ArrowRight data-icon="inline-end" className="h-4 w-4" /> */}
                  <Link href={`/collection/${c.id}`}>Open</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
