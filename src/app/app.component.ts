import { Component, inject } from '@angular/core';
import { PerfumesService } from './services/perfumes.service';
import { IPerfume } from './interfaces/perfume.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  perfumesService = inject(PerfumesService)
  carrinho: IPerfume[] = this.perfumesService.carrinho

  removerItem(id: number) {
    this.perfumesService.removeItemFromCart(id)
  }
}
