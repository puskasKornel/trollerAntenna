import { Component, Input, Output, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Ticket } from 'src/app/models/ticket.model';
import { StorageService } from 'src/app/services/storage.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  @Input() tickets: Array<Ticket> = [];
  @Input() listId: number = 0;
  @Input() listName: string = '';
  @Output() createTicket: EventEmitter<any> = new EventEmitter();
  @Output() changeName: EventEmitter<any> = new EventEmitter();
  @Output() refresh: EventEmitter<any> = new EventEmitter();

  ticketNames: string[] = [];

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.tickets.forEach((ticket) => {
      this.ticketNames.push(ticket.name);
    });
  }

  newTicket = (): void => {
    this.createTicket.emit(this.listId);
  };

  changeListName = (): void => {
    this.changeName.emit(this.listId);
  };

  refreshLists = (): void => {
    this.refresh.emit();
  };

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      this.storageService.moveItemInArray(
        this.listId,
        event.currentIndex,
        event.previousIndex
      );

      this.refreshLists();
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      this.storageService.transferArrayItem(
        event.previousContainer.id,
        event.container.id,
        event.previousIndex,
        event.currentIndex
      );

      this.refreshLists();
    }
  }
}
