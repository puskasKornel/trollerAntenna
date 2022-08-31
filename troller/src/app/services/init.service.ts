import { Injectable } from '@angular/core';
import { List } from '../models/list.model';
import { Ticket } from '../models/ticket.model';
import { User } from '../models/user.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class InitService {
  constructor(private storageService: StorageService) {}

  hasUsers = (): boolean => {
    const users = this.storageService.getUsers();

    return !!users;
  };

  hasLists = (): boolean => {
    const lists = this.storageService.getLists();

    return !!lists;
  };

  setUsers = (): void => {
    let users: Array<User> = [];

    const user = new User({
      userName: 'Antenna',
      firstName: 'Antenna',
      lastName: 'Hungária',
      password: 'f212100e38f782e152ebfab712a0e6ec',
    });

    users.push(user);
    this.storageService.saveUsers(users);
  };

  setLists = (): void => {
    const listItema = new List({ id: 1, name: 'Első lista', tickets: [] }),
      listItemb = new List({ id: 2, name: 'Második lista', tickets: [] });

    const user = new User({
      userName: 'Antenna',
      firstName: 'Antenna',
      lastName: 'Hungária',
      password: 'f212100e38f782e152ebfab712a0e6ec',
    });

    const ticketa = new Ticket({
      index: 0,
      name: 'Egyik feladat',
      desc: null,
      owner: user,
      creator: user,
      createdDate: new Date(),
      deadLine: new Date(),
    });
    const ticketb = new Ticket({
      index: 1,
      name: 'Másik feladat',
      desc: null,
      owner: user,
      creator: user,
      createdDate: new Date(),
      deadLine: new Date(),
    });

    listItema.tickets.push(ticketa);
    listItema.tickets.push(ticketb);
    listItemb.tickets.push(ticketa);
    listItemb.tickets.push(ticketb);

    listItema.tickets.sort((a, b) => a.index - b.index);
    listItemb.tickets.sort((a, b) => a.index - b.index);

    let listToAdd: Array<List> = [];

    listToAdd.push(listItema);
    listToAdd.push(listItemb);

    this.storageService.saveLists(listToAdd);
  };
}
