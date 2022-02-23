import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './components/layout/layout.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LandingComponent } from './components/landing/landing.component';
import { CarsComponent } from './components/cars/cars.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { CarPreviewComponent } from './components/car-preview/car-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LandingComponent,
    CarsComponent,
    MyProfileComponent,
    MyOrdersComponent,
    CarPreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
