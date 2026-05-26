import { z } from 'zod';

export const ShelfDTOSchema = z.object({
  id: z.string().uuid().or(z.string()),
  title: z.string().min(1),
  description: z.string(),
  itemCount: z.number().int().nonnegative().optional(),
  backgroundImageUrl: z.string().url().optional(),
  tags: z.array(z.string()).min(1),
  wowsCount: z.number().int().nonnegative().optional(),
});

export type ShelfDTO = z.infer<typeof ShelfDTOSchema>;

export interface ShelfFeedPropsDTO {
  initialShelves: ShelfDTO[];
  initialNextPage: number | null;
}
