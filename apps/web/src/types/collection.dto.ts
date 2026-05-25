// apps/web/src/types/collection.dto.ts
import { z } from 'zod';

// 💡 The Base Collection DTO validation contract
export const CollectionDTOSchema = z.object({
  id: z.string().uuid().or(z.string()), // Handles string IDs or proper UUIDs
  title: z.string().min(1),
  description: z.string(),
  itemCount: z.number().int().nonnegative().optional(),
});

// 💡 Infer the explicit type from the schema logic
export type CollectionDTO = z.infer<typeof CollectionDTOSchema>;

// 💡 The Feed Props data contract wrapper
export interface CollectionFeedPropsDTO {
  initialCollections: CollectionDTO[];
  initialNextPage: number | null;
}
