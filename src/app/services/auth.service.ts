import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './localStorage.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private isAuthenticated: boolean = false;
  private errMessage: any;

  constructor(
    private userService: UserService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private http: HttpClient
  ) {
    if (this.localStorageService.getItem()) {
      this.isAuthenticated = true;
    }
  }

  public logIn(login: string | undefined, password: string | undefined) {
    this.http
      .post(`http://localhost:3004/auth/login`, {
        login,
        password,
      })
      .subscribe({
        next: (userData) => {
          this.localStorageService.setItem(JSON.stringify(userData));
          this.userService.fetchUser();
          this.isAuthenticated = true;
          console.log('Logged In!');
          this.router.navigate(['']);
        },
        error: (err) => {
          console.error(err);
          this.errMessage = true;
        },
      });
  }

  public logOut(): void {
    this.isAuthenticated = false;
    this.localStorageService.removeItem();
    console.log('Logged Out!');
    this.router.navigate(['/login']);
  }

  get isAuth() {
    return this.isAuthenticated;
  }

  get isErr() {
    return this.errMessage;
  }
}
