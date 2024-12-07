import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IPerfume } from '../../interfaces/perfume.interface';
import { ItemAddedDialogComponent } from '../../components/item-added-dialog/item-added-dialog.component';
import { PerfumesService } from '../../services/perfumes.service';

@Component({
  selector: 'app-perfumes-list',
  templateUrl: './perfumes-list.component.html',
  styleUrl: './perfumes-list.component.scss'
})
export class PerfumesListComponent {
  perfumesService = inject(PerfumesService)
  perfumesList: IPerfume[] = []

  ngOnInit(): void {
    this.perfumesService.getPerfumesList().subscribe((perfumesResponse) => {
      this.perfumesList = perfumesResponse
    })
  }
}
