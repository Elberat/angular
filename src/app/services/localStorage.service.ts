import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public getToken(): string | null {
    return localStorage.getItem('token');
  }
  public setToken(value: string): void {
    localStorage.setItem('token', value);
  }
  public removeToken(): void {
    localStorage.removeItem('token');
  }
}
