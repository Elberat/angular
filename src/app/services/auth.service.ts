import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, tap } from 'rxjs';
import { ILoginReq, IUser } from '../types/user';
import { LocalStorageService } from './localStorage.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public userName$: Subject<string> = new Subject<string>();
  private isAuthenticated: boolean = false;
  private errMessage: any;

  constructor(
    private userService: UserService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private http: HttpClient
  ) {
    if (this.localStorageService.getToken()) {
      this.isAuthenticated = true;
    }
  }

  public logIn(login?: string, password?: string): Observable<ILoginReq> {
    return this.http
      .post<ILoginReq>(`http://localhost:3004/auth/login`, {
        login,
        password,
      })
      .pipe(
        tap((response: any) => {
          this.setToken(response);
          this.isAuthenticated = true;
        })
      );
  }

  public logOut(): void {
    this.isAuthenticated = false;
    this.localStorageService.removeToken();
    console.log('Logged Out!');
    this.router.navigate(['/login']);
  }

  get isAuth() {
    return this.isAuthenticated;
  }

  get isErr() {
    return this.errMessage;
  }
  private setToken(response: ILoginReq) {
    this.localStorageService.setToken(JSON.stringify(response));
  }

  public getUserInfo(): Observable<IUser> {
    return this.http.post<IUser>(`http://localhost:3004/auth/userinfo`, {});
  }
}
