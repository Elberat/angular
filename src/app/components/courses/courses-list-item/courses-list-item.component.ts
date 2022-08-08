import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICourse } from 'src/app/types/courses';
import { CoursesService } from 'src/app/services/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.css'],
})
export class CoursesListItemComponent {
  @Input() public course!: ICourse;

  @Output()
  public deleteCourseEvent = new EventEmitter<number>();

  constructor(private CoursesService: CoursesService) {}

  public handleClick(id: number): void {
    this.deleteCourseEvent.emit(id);
  }

  public getItem(id: number) {
    this.CoursesService.getItemById(id);
  }
}
