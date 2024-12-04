import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { IPerfume } from '../../interfaces/perfume.interface';
import { PerfumesService } from '../../services/perfumes.service';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.scss'
})
export class CardsContainerComponent implements OnInit {

  @Output() addPerfumeToCart = new EventEmitter<IPerfume>();

  perfumesList: IPerfume[] = []
  perfumesService = inject(PerfumesService)

  ngOnInit(): void {
    this.perfumesService.getPerfumes().subscribe((perfumesResponse) => {
      this.perfumesList = perfumesResponse
    })
  }

  sendPerfumeToCart(perfume: IPerfume) {
    this.addPerfumeToCart.emit(perfume)
  }
  
}
