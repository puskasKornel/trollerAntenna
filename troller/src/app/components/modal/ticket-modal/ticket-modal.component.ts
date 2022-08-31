import { Component, Output, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Ticket } from 'src/app/models/ticket.model';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-ticket-modal',
  templateUrl: './ticket-modal.component.html',
})
export class TicketModalComponent implements OnInit {
  users: Array<any> | null = null;
  owner: any = null;
  ticketName: string = '';
  deadLine: Date | null = null;
  desc: string | null = null;
  @Output() create: EventEmitter<any> = new EventEmitter();
  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  constructor(
    private storageService: StorageService,
    private authService: AuthService
  ) {
    this.users = this.storageService.getUsers();
  }

  ngOnInit(): void {}

  onSubmit = (): void => {
    const creator = this.authService.getUser(),
      ticketOwner = this.storageService.getUserByName(this.owner);

    if (!this.ticketName || !creator || !ticketOwner || !this.deadLine) {
      return alert('Töltse ki az adatokat');
    }

    let ticket = new Ticket({
      index: 0,
      name: this.ticketName,
      desc: this.desc,
      owner: ticketOwner!,
      creator: creator!,
      deadLine: new Date(this.deadLine!),
      createdDate: new Date(),
    });

    this.create.emit(ticket);
    this.closeModal.emit();
  };

  close = (): void => {
    this.closeModal.emit();
  };
}
