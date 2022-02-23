import { Component, OnInit } from '@angular/core';
import { Car } from '../../models';
import { AuthService } from '../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  cars: Car[] = [
    {
      dayPrice: 100,
      model: 'Octavia',
      brand: 'Skoda',
      year: 2020,
      transmission: 'auto',
      color: 'red',
      status: 'available',
      engine: '2.0 l',
      description: 'Short description of car',
      numberOfPassengers: 4,
      type: 'light',
    },
  ];

  constructor(private readonly authService: AuthService, private readonly dialog: MatDialog) {}

  ngOnInit(): void {}

  login(): void {
    this.dialog.open(LoginComponent, {
      minWidth: '400px',
    });
  }
}
