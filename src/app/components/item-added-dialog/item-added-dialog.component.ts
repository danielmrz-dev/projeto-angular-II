import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-item-added-dialog',
  templateUrl: './item-added-dialog.component.html',
  styleUrl: './item-added-dialog.component.scss'
})
export class ItemAddedDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {name: string}) { }

}
