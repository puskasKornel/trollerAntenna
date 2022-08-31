import { Component, Output, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-name-modal',
  templateUrl: './list-name-modal.component.html',
})
export class ListNameModalComponent implements OnInit {
  listName: string = '';
  @Output() change: EventEmitter<any> = new EventEmitter();
  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSubmit = (): void => {
    if (!this.listName) {
      return alert('Töltse ki az adatokat');
    }
    this.change.emit(this.listName);
    this.closeModal.emit();
  };

  close = (): void => {
    this.closeModal.emit();
  };
}
