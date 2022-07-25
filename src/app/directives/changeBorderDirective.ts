import { ElementRef, Directive, Input, OnInit } from '@angular/core';

const MILLISECONDS_IN_DAY = 86400000;
const FRESH_COURSE_PERIOD = 14; // 14 days

@Directive({
  selector: '[changeBorder]',
})
export class ChangeBorderDirective implements OnInit {
  @Input('changeBorderDate') public creationDate!: string;
  constructor(private element: ElementRef) {}

  ngOnInit() {
    const courseDate = new Date(this.creationDate);
    const now = new Date();

    if (courseDate > now) {
      this.element.nativeElement.style.border = '3px solid blue';
      console.log(courseDate);
    } else {
      const timeDiff = Math.abs(now.getTime() - courseDate.getTime());
      const diffDays = Math.ceil(timeDiff / MILLISECONDS_IN_DAY);

      if (diffDays <= FRESH_COURSE_PERIOD) {
        this.element.nativeElement.style.border = '3px solid green';
      }
    }
  }
}
