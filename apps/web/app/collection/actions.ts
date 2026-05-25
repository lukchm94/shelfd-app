// apps/web/app/collection/actions.ts
'use server';

import { collections } from '../../src/mocks/collections';
import type { CollectionDTO } from '../../src/types/collection.dto';

interface PaginatedResponse {
  data: CollectionDTO[];
  nextPage: number | null;
}

export async function fetchCollectionsPaginated(
  page: number,
  limit: number = 5,
): Promise<PaginatedResponse> {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const rawData = collections.slice(startIndex, endIndex);

  // 💡 Transform internal entities strictly into the DTO contract mapping
  const sanitizedData: CollectionDTO[] = rawData.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    // Add computed parameters here seamlessly if required down the road
  }));

  return {
    data: sanitizedData,
    nextPage: endIndex < collections.length ? page + 1 : null,
  };
}
