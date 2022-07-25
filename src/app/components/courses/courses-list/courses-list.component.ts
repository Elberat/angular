import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/app-interfaces';
import { FilterPipe } from '../../../pipes/filterPipe';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
})
export class CoursesListComponent implements OnInit {
  public courses: ICourse[] = [];
  filterPipe = new FilterPipe();

  constructor(private CoursesService: CoursesService) {}

  ngOnInit(): void {
    this.getCourses();
  }

  private getCourses(): void {
    this.courses = this.CoursesService.getList();
  }
}
