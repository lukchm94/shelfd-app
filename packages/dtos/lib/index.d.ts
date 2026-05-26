import { z } from 'zod';

declare const ShelfDTOSchema: z.ZodObject<{
    id: z.ZodUnion<[z.ZodString, z.ZodString]>;
    title: z.ZodString;
    description: z.ZodString;
    itemCount: z.ZodOptional<z.ZodNumber>;
    backgroundImageUrl: z.ZodOptional<z.ZodString>;
    tags: z.ZodArray<z.ZodString>;
    wowsCount: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
type ShelfDTO = z.infer<typeof ShelfDTOSchema>;
interface ShelfFeedPropsDTO {
    initialShelves: ShelfDTO[];
    initialNextPage: number | null;
}

interface UserDTO {
    id: string;
    username: string;
    name: string;
    avatar: string;
    bio: string;
}
interface UserFeedPropsDTO {
    initialUsers: UserDTO[];
    initialNextPage: number | null;
}

export { type ShelfDTO, ShelfDTOSchema, type ShelfFeedPropsDTO, type UserDTO, type UserFeedPropsDTO };
