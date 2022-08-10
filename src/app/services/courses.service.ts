import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, retry, tap } from 'rxjs';
import { ICourse } from '../types/courses';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private start: number = 0;
  private count: number = 5;

  constructor(private http: HttpClient) {}

  public getList(): Observable<ICourse[]> {
    return this.http.get<ICourse[]>('http://localhost:3004/courses', {});
  }

  public searchCourses(searchValue: string): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(`http://localhost:3004/courses`, {
      params: new HttpParams({
        fromObject: {
          start: this.start,
          count: this.count,
          textFragment: searchValue,
        },
      }),
    });
  }

  public loadMoreHandler(): void {
    this.count += 2;
  }

  public getItemById(id: number): Observable<ICourse> {
    const url = `http://localhost:3004/courses/${id}`;
    return this.http.get<ICourse>(url);
  }

  public removeItem(id: number): Observable<Object> {
    console.log(this.http.delete(`http://localhost:3004/courses/${id}`));
    return this.http.delete(`http://localhost:3004/courses/${id}`);
  }

  public updateItem(course: ICourse): Observable<Object> {
    const url = `http://localhost:3004/courses/${course.id}`;
    return this.http.put(url, course);
  }

  public createItem(course: ICourse): Observable<Object> {
    return this.http.post(`http://localhost:3004/courses/`, course);
  }

  dateFromStringToMs(dateContent: string) {
    if (dateContent === null) {
      return 0;
    }
    if (+dateContent) {
      return dateContent;
    } else {
      return new Date(`
        ${dateContent.slice(3, 5)}.
        ${dateContent.slice(0, 2)}.
        ${dateContent.slice(6)}
        `).getTime();
    }
  }
}
