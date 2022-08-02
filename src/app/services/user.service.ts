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
  private token: string = '';

  ngOnInit() {
    this.token = this.localStorageService.getItem() ?? '';
  }

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.fetchUser();
  }

  get userName() {
    return `${this.user.name.first} ${this.user.name.last}`;
  }

  get currentUser() {
    return this.user;
  }

  public fetchUser(): void {
    if (this.localStorageService.getItem()) {
      this.http
        .post<IUser>(`http://localhost:3004/auth/userInfo`, {})
        .subscribe((user) => {
          this.user = user;
        });
    }
  }
}
