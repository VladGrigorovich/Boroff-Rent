import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models';
import { Nullable } from '../types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly userSubject = new BehaviorSubject<Nullable<User>>(null);

  get currentUserData(): Nullable<User> {
    return this.userSubject.value;
  }

  constructor() {}

  login(): void {
    const mockUser: User = {
      email: 'email@email.com',
      name: 'name',
    };
    this.userSubject.next(mockUser);
  }

  logout(): void {
    this.userSubject.next(null);
  }
}
