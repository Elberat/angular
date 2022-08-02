import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public getItem(): string | null {
    return localStorage.getItem('user');
  }
  public setItem(value: string): void {
    localStorage.setItem('user', value);
  }
  public removeItem(): void {
    localStorage.removeItem('user');
  }
}
