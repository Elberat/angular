import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public isAuth: boolean = false;

  public login(
    email: string | null | undefined,
    password: string | null | undefined
  ): void {
    localStorage.setItem('user', JSON.stringify({ email, password }));
    this.isAuth = true;
  }

  public logOut(): void {
    localStorage.removeItem('user');
    this.isAuth = false;
  }

  public isAthenticated(): boolean {
    return this.isAuth;
  }

  //   getUserInfo(): string {
  //     let userInfo = JSON.parse(localStorage.getItem('user'));
  //     return userInfo.email;
  //   }
}
