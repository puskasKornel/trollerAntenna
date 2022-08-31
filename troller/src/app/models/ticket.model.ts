/**
 * This class represents a ticket.
 */

import { User } from './user.model';

interface ConstructorParams {
  index: number;
  name: string;
  desc: string | null;
  owner: User;
  creator: User;
  createdDate: Date;
  deadLine: Date;
}

export class Ticket {
  index: number = 0;
  name: string = '';
  desc: string | null = null;
  owner?: User;
  creator?: User;
  createdDate?: Date;
  deadLine?: Date;

  constructor({
    index,
    name,
    desc = null,
    owner,
    creator,
    createdDate,
    deadLine,
  }: ConstructorParams) {
    this.index = index;
    this.name = name;
    this.desc = desc;
    this.owner = owner;
    this.creator = creator;
    this.createdDate = createdDate;
    this.deadLine = deadLine;
  }
}
