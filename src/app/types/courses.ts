export interface ICourse {
  id: number;
  name: string;
  date: string;
  duration: number;
  isTopRated: boolean;
  description: string;
  length: number;
  authors: ICourseAuthor[];
}

export interface IAuthor {
  id: number;
  name: string;
}

export interface ICourseAuthor {
  id: number;
  firstName: string;
  lastName: string;
}
