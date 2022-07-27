import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICourse } from 'src/app/types/courses';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.css'],
})
export class CoursesListItemComponent {
  @Input()
  public course!: ICourse;

  constructor(private CoursesService: CoursesService) {}

  public handleDelete(id: number) {
    console.log(`delete ${id}`);
  }
  public handleEdit(id: number) {
    console.log(`edit ${id}`);
  }

  public getItem(id: number) {
    console.log(this.CoursesService.getItemById(id));
  }
}
