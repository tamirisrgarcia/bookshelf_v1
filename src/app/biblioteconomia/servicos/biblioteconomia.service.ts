import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { Biblioteconomia } from '../modelos/biblioteconomia';

@Injectable({
  providedIn: 'root'
})
export class BiblioteconomiaService {


  private readonly uriAPI = '/assets/biblioteconomia.json';

  constructor(private clienteDados: HttpClient) { }
  listagemBiblio() {
    return this.clienteDados.get<Biblioteconomia[]>(this.uriAPI)
    .pipe(
      first(),
      tap(apiBiblio => console.log(apiBiblio))
    )
  }
}
