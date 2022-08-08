import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';
import { ICourse, IAuthor, ICourseAuthor } from 'src/app/types/courses';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatChipList } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-create-course-page',
  templateUrl: './create-course-page.component.html',
  styleUrls: ['./create-course-page.component.css'],
  providers: [DatePipe, TitleCasePipe],
})
export class CreateCoursePageComponent implements OnInit {
  private courseId: number;
  public formGroup: FormGroup;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  public authors$: Observable<IAuthor[]>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService,
    private datePipe: DatePipe,
    private titleCasePipe: TitleCasePipe,
    private authorService: AuthorService
  ) {
    this.formGroup = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      date: new FormControl('', [Validators.required]),
      length: new FormControl(0, [
        Validators.required,
        Validators.pattern(/^[0-9]+$/),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(500),
      ]),
      authorsInput: new FormControl(''),
      authors: new FormArray([], [Validators.required]),
    });

    this.courseId = +this.activatedRoute.snapshot.params['id'] || 0;
  }

  ngOnInit(): void {
    if (this.courseId) {
      this.coursesService.getItemById(this.courseId).subscribe((course) => {
        this.formGroup.setValue({
          name: this.titleCasePipe.transform(course.name),
          date: this.datePipe.transform(course.date, 'yyyy-MM-dd'),
          length: course.length,
          description: course.description,
          authorsInput: '',
          authors: [],
        });
        course.authors?.forEach((author) => {
          this.authorControls.push(new FormControl(author));
        });
      });
    }

    this.getAuthros();
  }
  private getAuthros(): void {
    this.authors$ = this.authorService.getAuthors();
    // this.authorControls.push(new FormControl(this.authors$));
  }

  get authorControls() {
    return this.formGroup.get('authors') as FormArray;
  }

  private isAuthorsInvalid(): boolean {
    return (
      !!this.formGroup.get('authorsInput')?.touched &&
      !!this.formGroup.get('authors')?.invalid
    );
  }

  public checkAuthorsState(chipList: MatChipList): void {
    this.isAuthorsInvalid()
      ? (chipList.errorState = true)
      : (chipList.errorState = false);
  }

  public isFieldInvalid(fieldName: string): boolean {
    return (
      !!this.formGroup.get(fieldName)?.invalid &&
      !!this.formGroup.get(fieldName)?.touched
    );
  }

  public addAuthor(event: MatChipInputEvent) {
    if (!event.value) return;
    const userNameArr: string[] = event.value.split(/[ ,]+/);
    const author: ICourseAuthor = {
      id: Date.now(),
      firstName: userNameArr[0],
      lastName: userNameArr[1],
    };
    this.authorControls.push(new FormControl(author));
    event.chipInput!.clear();
  }

  public removeAuthor(id: number): void {
    const controlToDelete = this.authorControls.controls.findIndex(
      (control) => control.value.id === id
    );
    this.authorControls.removeAt(controlToDelete);
  }

  private returnHome(): void {
    this.router.navigate(['']);
  }

  public save(): void {
    const { authorsInput, ...course } = this.formGroup.value;
    if (this.courseId) {
      this.coursesService
        .updateItem({
          ...course,
          id: this.courseId,
        })
        .subscribe(() => this.returnHome());
    } else {
      this.coursesService
        .createItem({
          ...course,
          id: Date.now(),
        })
        .subscribe(() => this.returnHome());
    }
  }
  public close(): void {
    this.returnHome();
  }
}
