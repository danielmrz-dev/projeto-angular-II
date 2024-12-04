import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogContent } from '@angular/material/dialog';


@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatRadioModule,
    MatButtonModule,
    MatDialogContent
  ],
  exports: [
    MatSidenavModule,
    MatRadioModule,
    MatButtonModule,
    MatDialogContent
  ]
})
export class AngularMaterialModule { }
