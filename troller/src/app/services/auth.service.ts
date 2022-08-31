import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5';
import { User } from '../models/user.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private storageService: StorageService, private router: Router) {}

  login = (userName: string, password: string): void => {
    let users = this.storageService.getUsers();

    if (users) {
      let user = users.find((user: User) => user.userName === userName);

      if (!user) {
        return alert('Nincs ilyen felhasználó');
      }

      if (user.password !== Md5.hashStr(password)) {
        return alert("Hibás jelszó");
      }

      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['dashboard']);
    }
  };

  logout = (): void => {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  };

  hasUser = (): boolean => {
    return !!localStorage.getItem('user');
  };

  getUser = (): User | null => {
    if (this.hasUser()) {
      return JSON.parse(localStorage.getItem('user')!);
    }

    return null;
  };
}
