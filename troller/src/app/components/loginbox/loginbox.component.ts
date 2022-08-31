import { Component, Output, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-loginbox',
  templateUrl: './loginbox.component.html',
})
export class LoginboxComponent implements OnInit {
  username: string = '';
  password: string = '';
  @Output() login: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit = () => {
    if (!this.username || !this.password) {
      return alert("Töltse ki az adatokat");
    }
    this.login.emit({ username: this.username, password: this.password });
  }
}
