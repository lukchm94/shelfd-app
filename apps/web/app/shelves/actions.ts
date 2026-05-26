'use server';

import { collections } from '../../src/mocks/collections';
import type { ShelfDTO } from '@shelfd/dtos';

interface PaginatedResponse {
  data: ShelfDTO[];
  nextPage: number | null;
}

export async function fetchShelvesPaginated(
  page: number,
  limit: number = 5,
): Promise<PaginatedResponse> {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const rawData = collections.slice(startIndex, endIndex);

  // 💡 Transform internal entities strictly into the DTO contract mapping
  const sanitizedData: ShelfDTO[] = rawData.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    tags: item.tags || [], // Ensure tags is always an array, even if missing in the source
    backgroundImageUrl: item.backgroundImageUrl || undefined, // Ensure backgroundImageUrl is optional
    wowsCount: item.wowsCount || 0, // Default to 0 if wowsCount is missing
  }));

  return {
    data: sanitizedData,
    nextPage: endIndex < collections.length ? page + 1 : null,
  };
}
