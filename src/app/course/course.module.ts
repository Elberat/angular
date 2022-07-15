import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from '../courses-list/courses-list.component';
import { CoursesListItemComponent } from '../courses-list-item/courses-list-item.component';
import { LoadMoreBtnComponent } from '../load-more-btn/load-more-btn.component';
import { DeleteButtonComponent } from '../courses-list-item/delete-button/delete-button.component';
import { CourseComponent } from './course.component';
import { AddCourseBtnComponent } from './add-course-btn/add-course-btn.component';

@NgModule({
  declarations: [
    AddCourseBtnComponent,
    // CoursesListComponent,
    // CoursesListItemComponent,
    // LoadMoreBtnComponent,
    // DeleteButtonComponent,
  ],
  imports: [CommonModule],
  bootstrap: [CourseComponent],
})
export class CourseModule {}
