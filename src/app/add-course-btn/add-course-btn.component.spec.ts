import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseBtnComponent } from './add-course-btn.component';

describe('AddCourseBtnComponent', () => {
  let component: AddCourseBtnComponent;
  let fixture: ComponentFixture<AddCourseBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourseBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCourseBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
