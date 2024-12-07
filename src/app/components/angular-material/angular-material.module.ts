import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogContent } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatRadioModule,
    MatButtonModule,
    MatDialogContent,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    MatSidenavModule,
    MatRadioModule,
    MatButtonModule,
    MatDialogContent,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class AngularMaterialModule { }
