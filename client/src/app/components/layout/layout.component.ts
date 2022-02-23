import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Nullable } from '../../types';
import { User } from '../../models';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  authenticatedUser: Nullable<User> = null;
  isLoggedIn = false;

  constructor(private readonly authService: AuthService) {}

  ngOnInit(): void {
    this.subscriberOnAuthEvents();
  }

  subscriberOnAuthEvents(): void {
    this.authService.user$.subscribe(user => {
      this.authenticatedUser = user;
      this.isLoggedIn = !!user;
    });
  }

  login(): void {
    this.authService.login();
  }

  logout(): void {
    this.authService.logout();
  }
}
