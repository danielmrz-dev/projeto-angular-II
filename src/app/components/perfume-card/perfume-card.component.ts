import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { IPerfume } from '../../interfaces/perfume.interface';
import { PerfumesService } from '../../services/perfumes.service';
import { MatDialog } from '@angular/material/dialog';
import { ItemAddedDialogComponent } from '../item-added-dialog/item-added-dialog.component';

@Component({
  selector: 'app-perfume-card',
  templateUrl: './perfume-card.component.html',
  styleUrl: './perfume-card.component.scss'
})
export class PerfumeCardComponent {

  @Input({ required: true }) perfume: IPerfume = {} as IPerfume;
  dialog = inject(MatDialog);
  perfumesService = inject(PerfumesService)


  onClick(perfume: IPerfume) {
    const itemJaAdicionado = this.perfumesService.carrinho.some((item) => item.id === perfume.id)
    if (itemJaAdicionado) {
      this.dialog.open(ItemAddedDialogComponent, {
        data: "Não é possível adicionar este item novamente! 🚫"
      })
      return
    };
    this.perfumesService.addItemToCart(perfume)
    this.dialog.open(ItemAddedDialogComponent, {
      data: "Item adicionado ao carrinho! ✅"
    })
  }
}
