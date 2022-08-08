import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuthor } from '../types/courses';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  constructor(private http: HttpClient) {}

  public getAuthors(): Observable<IAuthor[]> {
    return this.http.get<IAuthor[]>('http://localhost:3004/authors', {
      params: new HttpParams({}),
    });
  }
}
