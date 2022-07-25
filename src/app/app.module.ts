import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoursesListComponent } from './components/courses/courses-list/courses-list.component';
import { CoursesListItemComponent } from './components/courses/courses-list-item/courses-list-item.component';
import { LogoComponent } from './components/logo/logo.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { SearchFormComponent } from './components/courses/search-form/search-form.component';
import { LoadMoreBtnComponent } from './components/courses/load-more-btn/load-more-btn.component';
import { DeleteButtonComponent } from './components/courses/delete-button/delete-button.component';
import { AddCourseBtnComponent } from './components/courses/add-course-btn/add-course-btn.component';
import { CoursesPageComponent } from './components/courses/courses-page/courses-page.component';

import { ChangeBorderDirective } from './directives/changeBorderDirective';

import { DurationPipe } from './pipes/durationPipe';
import { OrderByPipe } from './pipes/orderByPipe';

import { CoursesService } from './services/courses.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    CoursesPageComponent,
    CoursesListComponent,
    CoursesListItemComponent,
    FooterComponent,
    BreadcrumbsComponent,
    SearchFormComponent,
    AddCourseBtnComponent,
    LoadMoreBtnComponent,
    DeleteButtonComponent,
    ChangeBorderDirective,
    DurationPipe,
    OrderByPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
