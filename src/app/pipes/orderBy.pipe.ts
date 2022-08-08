import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../types/courses';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe {
  transform(courses: ICourse[]): ICourse[] {
    return courses.sort((a: ICourse, b: ICourse) => {
      return +new Date(a.date) - +new Date(b.date);
    });
  }
}
