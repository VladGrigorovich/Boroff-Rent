import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { CarsComponent } from './components/cars/cars.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: '/my-profile',
    component: MyProfileComponent,
  },
  {
    path: '/my-orders',
    component: MyOrdersComponent,
  },
  {
    path: '/cars',
    component: CarsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
