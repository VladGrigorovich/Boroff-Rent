import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// prettier-ignore
const MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
]

@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class MaterialModule {}
