import { Component, OnInit } from '@angular/core';
import { InitService } from './services/init.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'troller';

  constructor(
    private initService: InitService
  ) {}

  ngOnInit(): void {
    if (!this.initService.hasLists()) {
      this.initService.setLists();
    }

    if (!this.initService.hasUsers()) {
      this.initService.setUsers();
    }
  }
}
