import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PerfumesService } from '../../services/perfumes.service';
import { IPerfume } from '../../interfaces/perfume.interface';

@Component({
  selector: 'app-cadastro-perfume',
  templateUrl: './cadastro-perfume.component.html',
  styleUrl: './cadastro-perfume.component.scss'
})
export class CadastroPerfumeComponent {
  fb = inject(FormBuilder)
  perfumesService = inject(PerfumesService)
  cadastroPerfumeForm = this.fb.group({
    id: ['', [Validators.required]],
    perfume: ['', [Validators.required]],
    preco: ['', [Validators.required]],
    promocao: ['', [Validators.required]],
    composicao: this.fb.array([], [Validators.required]),
    fixacao: ['', [Validators.required]],
    imagem: ['', [Validators.required]],
  })
  newPerfume: IPerfume = {} as IPerfume
  
  onSubmit() {
    console.log(this.cadastroPerfumeForm.value);
  }
}
