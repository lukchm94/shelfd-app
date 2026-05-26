// apps/web/app/profile/actions.ts
'use server';

import { users } from '../../src/mocks/users';
import type { UserDTO } from '@shelfd/dtos';

interface PaginatedResponse {
  data: UserDTO[];
  nextPage: number | null;
}

export async function fetchUsersPaginated(
  page: number,
  limit: number = 5,
): Promise<PaginatedResponse> {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const rawData = users.slice(startIndex, endIndex);

  const sanitizedData: UserDTO[] = rawData.map((item) => ({
    id: item.id,
    username: item.username,
    name: item.name,
    avatar: item.avatar,
    bio: item.bio,
  }));

  return {
    data: sanitizedData,
    nextPage: endIndex < users.length ? page + 1 : null,
  };
}
