import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { ICourse } from 'src/app/types/courses';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesListComponent implements OnInit {
  public courses: ICourse[] = [];
  public loading: boolean = false;
  public searchValue: string = '';
  public start: number = 0;
  public amount: number = 6;

  constructor(private CoursesService: CoursesService) {}

  ngOnInit(): void {
    this.getCourses();
  }

  private getCourses(): void {
    this.CoursesService.getList(this.start, this.amount).subscribe(
      (courses) => (this.courses = courses)
    );
    console.log(this.courses);
  }

  public changeSearchString(inputValue: string): void {
    this.searchValue = inputValue;
  }

  public deleteCourse(courseId: number): void {
    this.CoursesService.removeItem(courseId);
    this.getCourses();
  }
}
