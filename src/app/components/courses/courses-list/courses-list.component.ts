import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ICourse } from 'src/app/types/courses';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
})
export class CoursesListComponent implements OnInit {
  public courses: ICourse[] = [];
  public searchValue: string = '';

  constructor(private CoursesService: CoursesService) {}

  ngOnInit(): void {
    this.getCourses();
  }

  public getCourses(): void {
    this.courses = this.CoursesService.getList();
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
