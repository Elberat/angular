import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {
  login(login: string, password: string) {}

  logOut() {}

  isAthenticated(): boolean {
    return true;
  }

  getUserInfo(): string {
    return 'info';
  }
}
