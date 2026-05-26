// src/types/shelf.ts
import { z } from "zod";
var ShelfDTOSchema = z.object({
  id: z.string().uuid().or(z.string()),
  title: z.string().min(1),
  description: z.string(),
  itemCount: z.number().int().nonnegative().optional(),
  backgroundImageUrl: z.string().url().optional(),
  tags: z.array(z.string()).min(1),
  wowsCount: z.number().int().nonnegative().optional()
});
export {
  ShelfDTOSchema
};
