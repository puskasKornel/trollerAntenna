import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Ticket } from '../models/ticket.model';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  getUsers = (): Array<User> | null => {
    const users = localStorage.getItem('users');

    return users ? JSON.parse(users) : null;
  };

  getUserByName = (userName: string): User | null => {
    const users = this.getUsers(),
      user = users?.find((user: User) => user.userName === userName);

      return user ? user : null
  };

  createList = (name: string): void => {
    let lists = this.getLists(),
      list = new List({ id: lists.length + 1, name: name, tickets: [] });

    lists.push(list);
    this.saveLists(lists);
  };

  createTicket = (listId: number, ticket: Ticket): void => {
    let lists = this.getLists(),
      list = lists.find((list: List) => list.id === listId);

    if (list) {
      ticket.index = list.tickets.length;
      list.tickets.push(ticket);
      list.tickets.sort((a, b) => a.index - b.index);
      this.saveLists(lists);
    }
  };

  renameList = (listId: number, newName: string): void => {
    let lists = this.getLists(),
      list = lists.find((list: List) => list.id === listId);

    if (list) {
      list.name = newName;
      this.saveLists(lists);
    }
  };

  transferArrayItem = (
    previousContainerId: string,
    containerId: string,
    previousIndex: number,
    currentIndex: number
  ): void => {
    const previousContainerIdNumber = previousContainerId.match(/(\d+)/),
      containerIdNUmber = containerId.match(/(\d+)/);

    if (previousContainerIdNumber && containerIdNUmber) {
      let lists = this.getLists(),
        listFrom = lists.find(
          (list: List) => list.id === parseInt(previousContainerIdNumber[0])
        ),
        listTo = lists.find(
          (list: List) => list.id === parseInt(containerIdNUmber[0])
        );

      if (listFrom && listTo) {
        let ticketMoved = listFrom.tickets.find(
          (ticket: Ticket) => ticket.index === previousIndex
        );

        if (ticketMoved) {
          let counterFrom = 0,
            counterTo = 1;

          listFrom.tickets.splice(ticketMoved.index, 1);
          listFrom.tickets.forEach((ticket: Ticket) => {
            ticket.index = counterFrom;
            counterFrom++;
          });

          ticketMoved.index = currentIndex;

          listTo.tickets.push(ticketMoved);

          listTo.tickets
            .filter(
              (ticket: Ticket) =>
                ticket.index >= currentIndex && ticket !== ticketMoved
            )
            .forEach((ticket: Ticket) => {
              ticket.index = currentIndex + counterTo;
              counterTo++;
            });

          listFrom.tickets.sort((a, b) => a.index - b.index);
          listTo.tickets.sort((a, b) => a.index - b.index);
          this.saveLists(lists);
        }
      }
    }
  };

  moveItemInArray = (
    listId: number,
    currentIndex: number,
    previousIndex: number
  ): void => {
    let lists = this.getLists(),
      list = lists.find((list: List) => list.id === listId);

    if (list) {
      let ticketMoved = list.tickets.find(
        (ticket: Ticket) => ticket.index === previousIndex
      );

      if (ticketMoved) {
        ticketMoved.index = currentIndex;

        if (currentIndex > previousIndex) {
          let counter = 0;

          list.tickets
            .filter(
              (ticket: Ticket) =>
                ticket.index <= currentIndex && ticket !== ticketMoved
            )
            .forEach((ticket: Ticket) => {
              ticket.index = counter;
              counter++;
            });
        } else if (currentIndex < previousIndex) {
          let counter = 1;

          list.tickets
            .filter(
              (ticket: Ticket) =>
                ticket.index >= currentIndex && ticket !== ticketMoved
            )
            .forEach((ticket: Ticket) => {
              ticket.index = currentIndex + counter;
              counter++;
            });
        }

        list.tickets.sort((a, b) => a.index - b.index);
        this.saveLists(lists);
      }
    }
  };

  getLists = (): Array<List> => {
    const lists: Array<List> = JSON.parse(localStorage.getItem('lists')!);
    return lists;
  };

  saveLists = (lists: Array<List>): void => {
    localStorage.setItem('lists', JSON.stringify(lists));
  };

  saveUsers = (users: Array<User>): void => {
    localStorage.setItem('users', JSON.stringify(users));
  };
}
