import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPerfume } from '../interfaces/perfume.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerfumesService {

  apiLink: string = "https://gist.githubusercontent.com/danielmrz-dev/05a26ba8aa1eb95f5e7f1cd99d13674f/raw/62dfb358dc84c8040560269f13aa31b467de7136/gistfile1.txt"
  listaPerfumes: IPerfume[] = []
  carrinho: IPerfume[] = []

  constructor(private readonly _http: HttpClient) {}

  getPerfumesList(): Observable<IPerfume[]> {
    return this._http.get<IPerfume[]>(this.apiLink)
  }

  addItemToCart(perfume: IPerfume) {
    this.carrinho.push(perfume)
  }

  removeItemFromCart(id: number) {
    this.carrinho.splice(id, 1)
  }
}
