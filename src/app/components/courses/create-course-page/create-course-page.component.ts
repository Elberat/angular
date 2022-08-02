import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';
import { ICourse } from 'src/app/types/courses';

@Component({
  selector: 'app-create-course-page',
  templateUrl: './create-course-page.component.html',
  styleUrls: ['./create-course-page.component.css'],
  providers: [DatePipe, TitleCasePipe],
})
export class CreateCoursePageComponent implements OnInit {
  courseToEdit: ICourse = {
    id: Date.now(),
    title: '',
    author: '',
    description: '',
    duration: 0,
    creationDate: new Date(),
    topRated: true,
  };
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params['id'];
    this.courseToEdit = this.coursesService.getItemById(id);
    console.log(this.courseToEdit);
  }

  submit() {
    console.log(this.courseToEdit);
    this.coursesService.updateItem(this.courseToEdit);

    this.router.navigate(['']);
  }
  cancel() {
    console.log('cancel');
    this.router.navigate(['']);
  }
}
