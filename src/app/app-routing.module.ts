import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CoursesPageComponent } from './components/courses/courses-page/courses-page.component';
import { CreateCoursePageComponent } from './components/courses/create-course-page/create-course-page.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    // redirectTo: '',
    component: CoursesPageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'new',
    component: CreateCoursePageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ':id',
    component: CreateCoursePageComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
