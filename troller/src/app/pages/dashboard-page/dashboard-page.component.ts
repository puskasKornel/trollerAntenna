import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { List } from 'src/app/models/list.model';
import { Ticket } from 'src/app/models/ticket.model';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent implements OnInit {
  showListModal: boolean = false;
  showListNameModal: boolean = false;
  showTicketModal: boolean = false;
  lists = new Array<List>();
  listIdToNewTicket: number = 0;
  listIdToNameChange: number = 0;

  constructor(private storageService: StorageService) {
    this.getLists();
  }

  ngOnInit(): void {}

  createList = (listName: string): void => {
    this.storageService.createList(listName);
    this.getLists();
  };

  setListIdToChange = (listId: number): void => {
    this.listIdToNameChange = listId;
    this.showListNameModal = true;
  };

  newTicket = (listId: number): void => {
    this.listIdToNewTicket = listId;
    this.showTicketModal = true;
  };

  changeListName = (newName: string): void => {
    this.storageService.renameList(this.listIdToNameChange, newName);
    this.getLists();
  };

  createTicket = (ticket: Ticket): void => {
    this.storageService.createTicket(this.listIdToNewTicket, ticket);
    this.getLists();
  };

  getLists = (): void => {
    this.lists = this.storageService.getLists();
  };
}
