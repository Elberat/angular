import { ElementRef, Directive, Input } from '@angular/core';

@Directive({
  selector: '[changeBorder]',
})
export class ChangeBorderDirective {
  @Input('changeBorderDate') public date!: string;
  constructor(public element: ElementRef) {
    if (this.date) {
      this.element.nativeElement.style.border = '3px solid green';
      console.log(this.date, 'this date');
    } else {
      this.element.nativeElement.style.border = '3px solid blue';
      console.log(this.date, 'this date');
    }
  }
  private highlight(date: any) {}
}
