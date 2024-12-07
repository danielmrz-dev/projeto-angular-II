import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PerfumesService } from '../../services/perfumes.service';
import { IPerfume } from '../../interfaces/perfume.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-perfume',
  templateUrl: './cadastro-perfume.component.html',
  styleUrl: './cadastro-perfume.component.scss'
})
export class CadastroPerfumeComponent {
  fb = inject(FormBuilder)
  perfumesService = inject(PerfumesService)
  router = inject(Router)

  cadastroPerfumeForm = this.fb.group({
    perfume: ['', [Validators.required]],
    preco: ['', [Validators.required, Validators.pattern('^[0-9]+(\\.[0-9]+)?$')]],
  })
  
  onSubmit() {
    console.log(this.cadastroPerfumeForm.value);
    const newPerfume: IPerfume = {
      id: this.perfumesService.listaPerfumes.length + 1,
      perfume: this.cadastroPerfumeForm.get('perfume')?.value as string,
      composicao: [],
      fixacao: "",
      imagem: "novo-perfume-1.png",
      preco: Number(this.cadastroPerfumeForm.get('preco')?.value),
      promocao: false
    }
    this.perfumesService.registerNewPerfume(newPerfume)
    this.router.navigate(['/'])
  }

  get preco(): FormControl {
    return this.cadastroPerfumeForm.get('preco') as FormControl
  }
}
