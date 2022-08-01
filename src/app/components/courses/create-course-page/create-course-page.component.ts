import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-course-page',
  templateUrl: './create-course-page.component.html',
  styleUrls: ['./create-course-page.component.css'],
})
export class CreateCoursePageComponent {
  constructor(private router: Router) {}

  form = new FormGroup({
    title: new FormControl<string>('', { nonNullable: true }),
    description: new FormControl<string>('', { nonNullable: true }),
    duration: new FormControl<number>(0, { nonNullable: true }),
    date: new FormControl<Date>(new Date(), { nonNullable: true }),
    author: new FormControl<string>('', { nonNullable: true }),
  });

  submit() {
    console.log(this.form.value);
    this.router.navigate(['']);
  }
  cancel() {
    console.log('cancel');
    this.router.navigate(['']);
  }
}
