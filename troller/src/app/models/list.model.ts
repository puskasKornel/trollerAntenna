/**
 * This class represents a list.
 */

import { Ticket } from './ticket.model';

interface ConstructorParams {
  id: number;
  name: string;
  tickets: Array<Ticket>;
}

export class List {
  id: number = 0;
  name: string = '';
  tickets: Array<Ticket> = [];

  constructor({ id, name, tickets = [] }: ConstructorParams) {
    this.id = id;
    this.name = name;
    this.tickets = tickets;
  }
}
