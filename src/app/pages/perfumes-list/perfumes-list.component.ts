import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IPerfume } from '../../interfaces/perfume.interface';
import { ItemAddedDialogComponent } from '../../components/item-added-dialog/item-added-dialog.component';

@Component({
  selector: 'app-perfumes-list',
  templateUrl: './perfumes-list.component.html',
  styleUrl: './perfumes-list.component.scss'
})
export class PerfumesListComponent {
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
