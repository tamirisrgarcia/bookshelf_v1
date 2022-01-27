import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { Direito } from './../modelosInterface/direito';

@Injectable({
  providedIn: 'root'
})
export class DireitoService {

  private readonly uriAPI = '../../assets/direito.json'

  constructor(private direitoHttp: HttpClient) { }

  listaLivrosDireito() {
    return this.direitoHttp.get<Direito[]>(this.uriAPI).pipe(
      first(),
      tap(apiDireito => console.log(apiDireito))
    )
  }
}
