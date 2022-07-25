import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../app-interfaces';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(courses: ICourse[], searchValue: string): ICourse[] {
    console.log(searchValue, courses);
    return courses.filter(
      (course: ICourse) => course.title.indexOf(searchValue) >= 0
    );
  }
}
