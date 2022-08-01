import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent {
  public inputValue: string = '';

  @Output()
  public inputValueEvent = new EventEmitter<string>();

  public handleClick(value: string): void {
    this.inputValueEvent.emit(value);
  }
}
