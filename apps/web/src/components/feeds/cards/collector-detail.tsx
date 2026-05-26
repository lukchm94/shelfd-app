// apps/web/src/components/feeds/cards/collector-detail.tsx
import * as React from 'react';
import { Avatar, AvatarFallback, AvatarImage, Badge, Card, CardContent } from '@shelfd/ui';
import { GalleryVerticalEnd, Sparkles } from 'lucide-react';
import { UserDTO, ShelfDTO } from '@shelfd/dtos';

export type CollectorDetailCardProps = {
  user: UserDTO;
  userCollections: ShelfDTO[];
  initials: string;
};

export function CollectorDetailCard({ user, userCollections, initials }: CollectorDetailCardProps) {
  return (
    /* 💡 Standardized Card styling: Matches your ShelfCard border/shadow system */
    <Card
      className={
        'px-6 bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-900 shadow-sm rounded-xl overflow-hidden gap-0 md:gap-4'
      }
    >
      <CardContent className="p-5 sm:p-6 space-y-6 flex flex-col md:flex-row md:gap-8">
        {/* Main Header Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-5">
            <Avatar className="h-20 w-20 border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>

            <div className="space-y-1">
              <Badge
                variant="outline"
                className="text-[10px] uppercase font-bold text-blue-600 dark:text-blue-400 border-blue-200 bg-blue-50 dark:bg-blue-500/5 px-2 py-0.5 rounded-full"
              >
                Collector
              </Badge>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                {user.name}
              </h1>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                @{user.username}
              </p>
            </div>
          </div>

          {/* Stats Grid: Simplified for clean reading */}
          <div className="grid grid-cols-2 gap-3 w-full md:w-auto">
            <div className="bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-900 rounded-lg p-3 flex flex-col items-center justify-center">
              <span className="text-xl font-bold text-zinc-900 dark:text-white">
                {userCollections.length}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                Collections
              </span>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-900 rounded-lg p-3 flex flex-col items-center justify-center">
              <Sparkles className="size-4 text-blue-500 mb-1" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                Curator
              </span>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <p className="border-t border-zinc-100 dark:border-zinc-900 pt-5 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          {user.bio || 'This collector has not shared a bio yet.'}
        </p>
      </CardContent>
    </Card>
  );
}
