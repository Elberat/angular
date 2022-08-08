import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
import { AddCourseBtnComponent } from './add-course-btn/add-course-btn.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
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

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AddCourseBtnComponent,
    CoursesListComponent,
    CoursesListItemComponent,
    CoursesPageComponent,
    SearchFormComponent,
    BreadcrumbsComponent,
    ChangeBorderDirective,
    DurationPipe,
    OrderByPipe,
    CreateCoursePageComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [CoursesPageComponent],
})
export class CoursesModule {}
