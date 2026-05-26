import type { ShelfDTO, UserDTO } from '@shelfd/dtos';

export const FeedItemTypes = {
  SHELF: 'shelf',
  PROFILE: 'profile',
} as const;

export type FeedItemType = (typeof FeedItemTypes)[keyof typeof FeedItemTypes];

export type FeedItem =
  | { type: typeof FeedItemTypes.SHELF; id: string; data: ShelfDTO }
  | { type: typeof FeedItemTypes.PROFILE; id: string; data: UserDTO };
