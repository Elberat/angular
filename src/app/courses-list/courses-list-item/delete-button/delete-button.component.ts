import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css'],
})
export class DeleteButtonComponent {
  @Input()
  public id!: number;

  @Output()
  handleDeleteEvent = new EventEmitter<number>();

  handleDelete(id: number) {
    this.handleDeleteEvent.emit(id);
  }
}
