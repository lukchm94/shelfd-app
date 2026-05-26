export interface UserDTO {
  id: string;
  username: string;
  name: string;
  avatar: string;
  bio: string;
}

export interface UserFeedPropsDTO {
  initialUsers: UserDTO[];
  initialNextPage: number | null;
}
