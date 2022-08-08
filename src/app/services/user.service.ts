import { Injectable, OnInit } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { IUser } from '../types/user';
import { LocalStorageService } from './localStorage.service';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnInit {
  private user: IUser = {
    id: 0,
    name: {
      first: '',
      last: '',
    },
    login: '',
    password: '',
  };

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.fetchUser();
  }

  ngOnInit(): void {
    this.fetchUser();
  }

  get userName() {
    return `${this.user.name.first} ${this.user.name.last}`;
  }

  get currentUser() {
    return this.user;
  }

  public fetchUser(): void {
    if (this.localStorageService.getToken()) {
      this.http
        .post<IUser>(`http://localhost:3004/auth/userInfo`, {})
        .subscribe((user) => {
          this.user = user;
        });
    }
    console.log(this.currentUser);
  }
}
