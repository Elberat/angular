import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { LogoComponent } from './logo/logo.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { LoadMoreBtnComponent } from './load-more-btn/load-more-btn.component';
import { FormsModule } from '@angular/forms';
import { DeleteButtonComponent } from './courses-list-item/delete-button/delete-button.component';
import { CourseModule } from './course/course.module';
import { CourseComponent } from './course/course.component';
// import { AddCourseBtnComponent } from './course/add-course-btn/add-course-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    CoursesListComponent,
    CoursesListItemComponent,
    FooterComponent,
    BreadcrumbsComponent,
    SearchFormComponent,
    // AddCourseBtnComponent,
    LoadMoreBtnComponent,
    DeleteButtonComponent,
    CourseComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CourseModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
