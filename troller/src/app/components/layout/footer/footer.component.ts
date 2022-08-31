import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {}

  logout = (): void => {
    this.authService.logout();
  };
}
