import { EspecialMes } from './../modelosInterface/especialMes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecialMesService {

  private readonly uriAPI =  '../../assets/especialMes.json'

  constructor(private especMes: HttpClient) { }

  listagemEspecMes(){
    return this.especMes.get<EspecialMes[]>(this.uriAPI).pipe(
      first(),
      tap(apiEspec => apiEspec)
    )
  }

}
