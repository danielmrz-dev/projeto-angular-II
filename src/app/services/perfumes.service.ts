import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPerfume } from '../interfaces/perfume.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerfumesService {

  apiLink: string = "https://gist.githubusercontent.com/danielmrz-dev/05a26ba8aa1eb95f5e7f1cd99d13674f/raw/3b87748fdf27292e5d96e2d141693bb2c3cb52ac/gistfile1.txt"

  constructor(private readonly _http: HttpClient) { }

  getPerfumes(): Observable<IPerfume[]> {
    return this._http.get<IPerfume[]>(this.apiLink)
  }
}
