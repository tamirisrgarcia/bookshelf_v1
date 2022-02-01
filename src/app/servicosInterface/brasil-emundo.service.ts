import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { BrasileMundo } from '../modelosInterface/brasilEMundo'

@Injectable({
  providedIn: 'root'
})
export class BrasilEMundoService {

  private readonly uriAPI = ['../../assets/maisVendidosBrasil.json','../../assets/maisVendidosMundo.json']

  constructor(private brasilMundoHttp: HttpClient) { }

  listaBrasil(){
    return this.brasilMundoHttp.get<BrasileMundo[]>(this.uriAPI[0]).pipe(
      first(),
      tap(apiBrasil => apiBrasil)
    )
  }

  listaMundo(){
    return this.brasilMundoHttp.get<BrasileMundo[]>(this.uriAPI[1]).pipe(
      first(),
      tap(apiMundo => apiMundo)
    )
  }
}
