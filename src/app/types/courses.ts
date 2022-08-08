export interface ICourse {
  id: number;
  name: string;
  date: string;
  duration: number;
  isTopRated: boolean;
  description: string;
  length: number;
  authors: IAuthor[];
}

export interface IAuthor {
  id: number;
  name: string;
}
