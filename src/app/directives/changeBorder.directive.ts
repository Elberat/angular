import { ElementRef, Directive, Input, OnInit, Renderer2 } from '@angular/core';

const MILLISECONDS_IN_DAY = 86400000;
const FRESH_COURSE_PERIOD = 14; // 14 days

@Directive({
  selector: '[changeBorder]',
})
export class ChangeBorderDirective implements OnInit {
  @Input('changeBorderDate') public creationDate!: Date;
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const courseDate = new Date(this.creationDate);
    const now = new Date();

    if (courseDate > now) {
      this.renderer.setStyle(
        this.element.nativeElement,
        'border',
        '2px solid blue'
      );
      console.log(courseDate);
    } else {
      const timeDiff = Math.abs(now.getTime() - courseDate.getTime());
      const diffDays = Math.ceil(timeDiff / MILLISECONDS_IN_DAY);

      if (diffDays <= FRESH_COURSE_PERIOD) {
        this.renderer.setStyle(
          this.element.nativeElement,
          'border',
          '2px solid green'
        );
      }
    }
  }
}
