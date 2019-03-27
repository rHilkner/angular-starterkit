import { NgModule } from '@angular/core';
import {
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';


@NgModule({
  imports: [
      MatIconModule,
      MatSidenavModule,
      MatToolbarModule,
      MatListModule
  ],
  exports: [
      MatIconModule,
      MatSidenavModule,
      MatToolbarModule,
      MatListModule
  ]
})
export class MaterialModule { }
