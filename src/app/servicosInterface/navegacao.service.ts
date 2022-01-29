import { MenuTop10 } from './../modelosInterface/menuTop10';
import { MenuNavegador } from './../modelosInterface/menuNavegador';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavegacaoService {

  private readonly uriAPI ='../../assets/menuNavegador.json';
  private readonly uriAPI2 ='../../assets/menuTop10.json';

  constructor(private menuDados: HttpClient) { }

  listagemMenu(){
    return this.menuDados.get<MenuNavegador[]>(this.uriAPI)
    .pipe(
      first(),
      tap(apiMenu => apiMenu)
    )
  }

  listagemMenuTop10(){
    return this.menuDados.get<MenuTop10[]>(this.uriAPI2)
    .pipe(
      first(),
      tap(apiMenuTop => apiMenuTop)
    )
  }




}
