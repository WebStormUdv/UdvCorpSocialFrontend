export interface ICreatePost {
  text: [string, any?];
  image: [File | null];
}

export interface IPosts {
  communityId: string | null;
  content: string;
  employeeFullName: string;
  employeeId: number;
  id: number;
  liked: boolean;
  likesCount: number;
  mediaType: string;
  mediaUrl: string;
  timestamp: string;
  type: string;
}

export interface IPostsResponse {
  content: IPosts[];
  totalElements: number;
  totalPages: number;
  last: boolean;
  // Добавить необходимые поля
}

export interface IUserPosts {
  page: {};
  _embedded: {
    postDtoList: IPosts[];
  };
  _links: {};
}
