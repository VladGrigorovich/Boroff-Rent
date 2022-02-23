import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models';
import { Nullable } from '../types';
import { Router } from '@angular/router';

const mockUser: User = {
  email: 'email@email.com',
  name: 'name',
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly userSubject = new BehaviorSubject<Nullable<User>>(null);

  get currentUserData(): Nullable<User> {
    return this.userSubject.value;
  }

  get user$(): Observable<Nullable<User>> {
    return this.userSubject.asObservable();
  }

  constructor(private readonly router: Router) {}

  login(): void {
    this.userSubject.next(mockUser);
    this.router.navigateByUrl('/my-orders');
  }

  logout(): void {
    this.userSubject.next(null);
    this.router.navigateByUrl('/');
  }
}
