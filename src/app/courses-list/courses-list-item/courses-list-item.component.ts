import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICourse } from 'src/app/app-interfaces';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.css'],
})
export class CoursesListItemComponent {
  @Input()
  public course!: ICourse;

  handleDelete(id: number) {
    console.log(`delete ${id}`);
  }
  handleEdit(id: number) {
    console.log(`edit ${id}`);
  }
}
