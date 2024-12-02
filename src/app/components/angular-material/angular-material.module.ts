import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatRadioModule,
    MatButtonModule
  ],
  exports: [
    MatSidenavModule,
    MatRadioModule,
    MatButtonModule
  ]
})
export class AngularMaterialModule { }
