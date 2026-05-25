import { users } from '../../../src/mocks/users';
import { collections } from '../../../src/mocks/collections';
import Link from 'next/link';
import { ArrowRight, Boxes, GalleryVerticalEnd, Sparkles } from 'lucide-react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@shelfd/ui';

type Props = { params: { user: string } };

export default async function ProfilePage({ params }: Props): Promise<React.JSX.Element> {
  const p = await params;
  const user = users.find((u) => u.username === p.user) || users[0];
  const userCollections = collections.filter((c) => c.owner === user.username);
  const initials = user.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="space-y-16 sm:space-y-20">
      <Card className="p-6 sm:p-8">
        <CardContent className="space-y-8 p-0">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-6">
              <Avatar className="h-20 w-20 border-2 border-background shadow-sm sm:h-24 sm:w-24">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <Badge variant="secondary" className="mb-4 rounded-full px-3 py-1">
                  Collector
                </Badge>
                <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {user.name}
                </h1>
                <p className="mt-2 text-sm text-muted-foreground">@{user.username}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 min-[460px]:grid-cols-2 md:min-w-80">
              <div className="rounded-xl border border-border/70 bg-muted/35 p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-background">
                  <GalleryVerticalEnd className="h-4 w-4 text-emerald-700" />
                </div>
                <p className="text-2xl font-semibold leading-none text-foreground">
                  {userCollections.length}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">Collections</p>
              </div>
              <div className="rounded-xl border border-border/70 bg-muted/35 p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-background">
                  <Sparkles className="h-4 w-4 text-emerald-700" />
                </div>
                <p className="text-lg font-semibold leading-none text-foreground">Curated</p>
                <p className="mt-2 text-sm text-muted-foreground">Shelf status</p>
              </div>
            </div>
          </div>

          <p className="max-w-2xl border-t border-border/70 pt-7 text-base leading-7 text-muted-foreground">
            {user.bio}
          </p>
        </CardContent>
      </Card>

      <section>
        <div className="mb-8 flex items-end justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border bg-card">
              <Boxes className="h-5 w-5 text-emerald-700" />
            </div>
            <div>
              <p className="text-sm leading-6 text-muted-foreground">Saved shelves</p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Collections</h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {userCollections.map((c) => (
            <Card key={c.id} className="flex-row items-center justify-between gap-6 p-6 sm:p-7">
              <CardHeader className="p-6">
                <CardTitle className="truncate text-lg font-semibold tracking-tight text-foreground">
                  {c.title}
                </CardTitle>
                <CardDescription className="line-clamp-2 text-sm text-muted-foreground">
                  {c.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="p-6 pt-2">
                <Button asChild variant="outline">
                  <Link href={`/collection/${c.id}`}>
                    Open collection
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
