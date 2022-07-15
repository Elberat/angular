import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent {
  public searchValue: string = '';

  public handleClick() {
    console.log(this.searchValue);
  }
}
