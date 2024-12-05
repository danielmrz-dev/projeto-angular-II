import { Component, ElementRef, inject, TemplateRef, ViewChild } from '@angular/core';
import { IPerfume } from './interfaces/perfume.interface';
import { MatDialog } from '@angular/material/dialog';
import { ItemAddedDialogComponent } from './components/item-added-dialog/item-added-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  dialog = inject(MatDialog);
  carrinho: IPerfume[] = []

  getPerfume(perfume: IPerfume) {
    const itemJaAdicionado = this.carrinho.some((item) => item.id === perfume.id)
    if (itemJaAdicionado) {
      this.dialog.open(ItemAddedDialogComponent, {
        data: "Não é possível adicionar este item novamente! 🚫"
      })
      return
    };
    this.carrinho.push(perfume)
    this.dialog.open(ItemAddedDialogComponent, {
      data: "Item adicionado ao carrinho! ✅"
    })
  }

  removerItem(id: number) {
    this.carrinho.splice(id, 1)
  }
}
