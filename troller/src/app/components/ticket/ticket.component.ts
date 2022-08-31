import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
})
export class TicketComponent implements OnInit {
  showTicketDetails: boolean = false;
  @Input() ticket: Ticket | null = null;

  constructor() {}

  ngOnInit(): void {}
}
