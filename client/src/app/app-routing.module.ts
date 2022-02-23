import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { CarsComponent } from './components/cars/cars.component';
import { AuthRequiredGuard } from './components/guards/auth-required.guard';
import { OnlyGuestGuard } from './components/guards/only-guest.guard';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    canActivate: [OnlyGuestGuard],
  },
  {
    path: 'my-profile',
    component: MyProfileComponent,
    canActivate: [AuthRequiredGuard],
  },
  {
    path: 'my-orders',
    component: MyOrdersComponent,
    canActivate: [AuthRequiredGuard],
  },
  {
    path: 'cars',
    component: CarsComponent,
    canActivate: [AuthRequiredGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
