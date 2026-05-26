// apps/web/app/home/actions.ts
'use server';

import { users } from '../../src/mocks/users';
import { collections } from '../../src/mocks/collections';
import type { UserDTO } from '@shelfd/dtos';
import type { ShelfDTO } from '@shelfd/dtos';

export type DiscoveryItem = ({ type: 'profile' } & UserDTO) | ({ type: 'shelf' } & ShelfDTO);

interface PaginatedResponse {
  data: DiscoveryItem[];
  nextPage: number | null;
}

export async function fetchDiscoveryFeed(
  page: number,
  limit: number = 6,
): Promise<PaginatedResponse> {
  // Combine both users and shelves
  const combinedItems: DiscoveryItem[] = [
    ...users.map((user) => ({
      type: 'profile' as const,
      id: user.id,
      username: user.username,
      name: user.name,
      avatar: user.avatar,
      bio: user.bio,
    })),
    ...collections.map((shelf) => ({
      type: 'shelf' as const,
      id: shelf.id,
      title: shelf.title,
      description: shelf.description,
      backgroundImageUrl: shelf.backgroundImageUrl,
      tags: shelf.tags || [],
      wowsCount: shelf.wowsCount || 0,
    })),
  ];

  // Shuffle the combined items
  const shuffled = [...combinedItems].sort(() => Math.random() - 0.5);

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const rawData = shuffled.slice(startIndex, endIndex);

  return {
    data: rawData,
    nextPage: endIndex < shuffled.length ? page + 1 : null,
  };
}
