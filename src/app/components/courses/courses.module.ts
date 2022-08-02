import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
import { AddCourseBtnComponent } from './add-course-btn/add-course-btn.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { LoadMoreBtnComponent } from './load-more-btn/load-more-btn.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { ActivatedRoute, Route, RouterModule, Routes } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';
import { OrderByPipe } from 'src/app/pipes/orderBy.pipe';
import { DurationPipe } from 'src/app/pipes/duration.pipe';
import { ChangeBorderDirective } from 'src/app/directives/changeBorder.directive';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateCoursePageComponent } from './create-course-page/create-course-page.component';
import { FilterPipe } from 'src/app/pipes/filter.pipe';

@NgModule({
  declarations: [
    AddCourseBtnComponent,
    CoursesListComponent,
    CoursesListItemComponent,
    CoursesPageComponent,
    DeleteButtonComponent,
    LoadMoreBtnComponent,
    SearchFormComponent,
    BreadcrumbsComponent,
    ChangeBorderDirective,
    DurationPipe,
    OrderByPipe,
    CreateCoursePageComponent,
    FilterPipe,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [CoursesPageComponent],
})
export class CoursesModule {}
