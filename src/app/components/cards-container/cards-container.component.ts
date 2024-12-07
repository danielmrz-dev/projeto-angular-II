import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { IPerfume } from '../../interfaces/perfume.interface';
import { PerfumesService } from '../../services/perfumes.service';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.scss'
})
export class CardsContainerComponent implements OnInit {

  perfumesList: IPerfume[] = []
  perfumesService = inject(PerfumesService)

  ngOnInit(): void {
    this.perfumesService.getPerfumesList().subscribe((perfumesResponse) => {
      this.perfumesList = perfumesResponse
    })
  }
}
