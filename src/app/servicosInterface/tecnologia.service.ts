import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { Tecnologia } from '../modelosInterface/tecnologia';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {

  private readonly uriAPI = '../../assets/tecnologia.json'

  constructor(private tecHttp: HttpClient) { }

  listaLivrosTec(){
    return this.tecHttp.get<Tecnologia[]>(this.uriAPI).pipe(
      first(),
      tap(apiTec => apiTec)
    )
  }

}
