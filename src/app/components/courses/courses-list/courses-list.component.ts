import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { ICourse } from 'src/app/types/courses';
import { CoursesService } from 'src/app/services/courses.service';
import { delay, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesListComponent implements OnInit {
  public courses$: Observable<ICourse[]>;
  public loading: boolean = false;
  public searchValue: string = '';

  constructor(private CoursesService: CoursesService) {}

  ngOnInit(): void {
    this.getCourses();
  }

  private getCourses(): void {
    this.loading = true;
    this.courses$ = this.CoursesService.getList(this.searchValue).pipe(
      tap(() => (this.loading = false))
    );
  }

  public changeSearchString(inputValue: string): void {
    this.searchValue = inputValue;
    this.getCourses();
    console.log(this.searchValue);
  }

  public loadMoreHandler(): void {
    this.CoursesService.loadMoreHandler();
    this.getCourses();
    window.scrollTo(0, document.body.scrollHeight);
  }

  public oneCourse(courseId: number): void {
    let one = this.CoursesService.getItemById(courseId);
    console.log(one);
  }

  public deleteCourse(courseId: number): void {
    console.log(courseId);
    let answ = confirm('Are you sure?');
    if (answ)
      this.CoursesService.removeItem(courseId).subscribe(() => {
        this.getCourses();
      });
    this.getCourses();
  }
}
