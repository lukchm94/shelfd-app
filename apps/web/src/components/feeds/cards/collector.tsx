// apps/web/src/components/feed-cards/collector-card.tsx
import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, Badge } from '@shelfd/ui';
import { Users } from 'lucide-react';
import type { UserDTO } from '@shelfd/dtos';

interface CollectorCardProps {
  profile: UserDTO;
  isFollowed: boolean;
  isVisited: boolean;
  onFollowToggle: (id: string) => void;
  onVisitTrack: (id: string) => void;
}

export function CollectorCard({
  profile,
  isFollowed,
  isVisited,
  onFollowToggle,
  onVisitTrack,
}: CollectorCardProps): React.JSX.Element {
  return (
    <Card className="px-6 bg-white dark:bg-zinc-950 border-0 border-b border-zinc-100 dark:border-zinc-900 sm:border sm:border-zinc-200 dark:sm:border-zinc-800/80 hover:border-zinc-300 group w-full rounded-none sm:rounded-xl">
      <CardContent className="p-0 py-5 sm:p-6 space-y-4">
        <div className="px-4 sm:px-0 flex items-center justify-between">
          <Badge
            variant="outline"
            className="text-[10px] uppercase tracking-wider text-blue-600 font-bold px-2.5 py-0.5"
          >
            COLLECTOR
          </Badge>
          <Users className="size-4 text-zinc-400 group-hover:text-blue-600 transition-colors" />
        </div>

        <div className="px-4 sm:px-0 flex items-center gap-4">
          {profile.avatar && (
            <Image
              src={profile.avatar}
              alt={profile.name}
              className="size-14 sm:size-16 rounded-full object-cover border border-zinc-200 shadow-sm"
              width={64}
              height={64}
              unoptimized
            />
          )}
          <div className="flex-1 min-w-0">
            <h2 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white truncate">
              {profile.name}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 truncate">@{profile.username}</p>
          </div>
        </div>

        <p className="px-4 sm:px-0 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {profile.bio || 'No bio provided for this profile.'}
        </p>

        <div className="mx-4 sm:mx-0 pt-3 flex justify-between items-center border-t border-zinc-100 dark:border-zinc-900">
          <button
            type="button"
            onClick={() => onFollowToggle(profile.id)}
            className={`inline-flex h-9 items-center justify-center rounded-full border px-4 text-xs font-semibold transition-all active:scale-95 ${
              isFollowed
                ? 'bg-blue-100 text-blue-900'
                : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'
            }`}
          >
            {isFollowed ? 'Following' : 'Follow'}
          </button>

          <Link
            href={`/profiles/${profile.username}`}
            onClick={() => onVisitTrack(profile.id)}
            className={`inline-flex h-9 items-center justify-center rounded-full border px-4 text-xs font-semibold ${
              isVisited
                ? 'bg-blue-100 text-blue-900'
                : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'
            }`}
          >
            View Profile
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
