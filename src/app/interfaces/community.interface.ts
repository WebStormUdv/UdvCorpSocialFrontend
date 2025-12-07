export interface ICommunityReqwest {
  totalPage: number;
  totalElements: number;
  pageable: {};
  size: number;
  content: ICommunities[];
  number: number;
  sort: {};
  numberOfElement: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}

export interface ICommunities {
  id: number;
  name: string;
  description: string;
  photoUrl: string;
  creatorId: number;
  type: string;
}
