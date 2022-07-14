import { Component, OnInit } from '@angular/core';
import { ICourse } from '../app-interfaces';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
})
export class CoursesListComponent implements OnInit {
  public courses: ICourse[] = [];

  constructor() {}

  ngOnInit(): void {}
}
