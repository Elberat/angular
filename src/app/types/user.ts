export interface IUser {
  id: number;
  name: INameModel;
  login: string;
  password: string;
}

export interface INameModel {
  first: string;
  last: string;
}

export interface ILoginReq {
  login: string;
  password: string;
}
