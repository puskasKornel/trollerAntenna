import { Component, Output, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-modal',
  templateUrl: './list-modal.component.html',
})
export class ListModalComponent implements OnInit {
  listName: string = '';
  @Output() create: EventEmitter<any> = new EventEmitter();
  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSubmit = () => {
    if (!this.listName) {
      return alert('Töltse ki az adatokat');
    }
    this.create.emit(this.listName);
    this.closeModal.emit();
  };

  close = (): void => {
    this.closeModal.emit();
  };
}
