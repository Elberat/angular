import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../app-interfaces';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe {
  transform(courses: ICourse[]): ICourse[] {
    return courses.sort((a: ICourse, b: ICourse) => {
      return +new Date(a.creationDate) - +new Date(b.creationDate);
    });
  }
}
