import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPerfume } from '../../interfaces/perfume.interface';

@Component({
  selector: 'app-perfume-card',
  templateUrl: './perfume-card.component.html',
  styleUrl: './perfume-card.component.scss'
})
export class PerfumeCardComponent {

  @Input({ required: true }) perfume: IPerfume = {} as IPerfume;

  @Output() addPerfumeToCart = new EventEmitter<IPerfume>();

  onClick() {
    this.addPerfumeToCart.emit(this.perfume)
  }

}
