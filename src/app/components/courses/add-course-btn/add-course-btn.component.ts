import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course-btn',
  templateUrl: './add-course-btn.component.html',
  styleUrls: ['./add-course-btn.component.css'],
})
export class AddCourseBtnComponent {
  constructor(private router: Router) {}

  public navigateToCreate(): void {
    this.router.navigate(['/create-course']);
  }
}
