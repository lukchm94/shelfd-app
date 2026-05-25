import { users } from '../../../src/mocks/users';
import { collections } from '../../../src/mocks/collections';
import Link from 'next/link';
import { Boxes, GalleryVerticalEnd, Sparkles } from 'lucide-react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardPropsLayout,
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
    <div className="mx-auto max-w-5xl px-2 py-12 space-y-16">
      {/* --- USER PROFILE SECTION --- */}
      <Card
        layout={CardPropsLayout.VERTICAL}
        /* Explicitly use gap-8 inside the vertical card layout to separate avatar row from the bio text */
        className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800/80"
      >
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between w-full">
          {/* Left side: Avatar + Core Username info */}
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
            <Avatar className="h-20 w-20 border-2 border-zinc-800 shadow-md sm:h-24 sm:w-24 ring-4 ring-zinc-900/30">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <Badge
                variant="secondary"
                className="rounded-full px-2 py-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-medium tracking-wide gap-2"
              >
                Collector
              </Badge>
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl py-4">
                {user.name}
              </h1>
              <p className="mt-1 text-sm text-zinc-400 py-2">@{user.username}</p>
            </div>
          </div>

          {/* Right side: Mini Stats Cards Grid */}
          <div className="grid grid-cols-2 gap-4 w-full md:w-auto md:min-w-[340px]">
            <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 flex flex-col items-start text-left">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800 text-emerald-400">
                <GalleryVerticalEnd className="h-4 w-4" />
              </div>
              <p className="text-2xl font-bold tracking-tight text-white">
                {userCollections.length}
              </p>
              <p className="mt-0.5 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                Collections
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 flex flex-col items-start text-left">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800 text-emerald-400">
                <Sparkles className="h-4 w-4" />
              </div>
              <p className="text-xl font-bold text-white">Curated</p>
              <p className="mt-1 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                Shelf status
              </p>
            </div>
          </div>
        </div>

        {/* Bio paragraph with clean top border spacing */}
        <p className="border-t border-zinc-800/80 pt-6 text-sm sm:text-base leading-relaxed text-zinc-300 max-w-3xl text-left w-full">
          {user.bio}
        </p>
      </Card>

      {/* --- COLLECTIONS SECTION --- */}
      <section>
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 shadow-inner">
              <Boxes className="h-5 w-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Saved shelves
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-white">Collections</h2>
            </div>
          </div>
        </div>

        {/* The Refactored Collection Grid */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          {userCollections.map((c) => (
            <Card
              key={c.id}
              layout={CardPropsLayout.HORIZONTAL}
              className="p-5 sm:p-6 min-h-[100px] bg-zinc-900/40 hover:bg-zinc-900/70 border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-200 group items-center justify-between gap-6"
            >
              {/* Left Column: Text Content */}
              {/* flex-1 grabs all remaining space; min-w-0 stops text from forcing the button out */}
              <div className="flex-1 min-w-40 space-y-4 text-left">
                <h3 className="truncate text-base font-semibold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                  {c.title}
                </h3>
                <p className="line-clamp-2 text-sm text-zinc-400 leading-relaxed">
                  {c.description}
                </p>
              </div>

              {/* Right Column: Action Button */}
              {/* shrink-0 guarantees the button keeps its shape no matter how wide the text is */}
              <div className="shrink-0">
                <Button
                  asChild
                  variant="outline"
                  className="h-9 p-2 rounded-full border-zinc-800 bg-zinc-900 px-4 text-xs font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white gap-1.5 transition-all"
                >
                  <Link href={`/collection/${c.id}`}>Open</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
