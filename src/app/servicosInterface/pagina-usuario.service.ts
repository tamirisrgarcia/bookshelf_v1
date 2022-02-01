import { first, tap } from 'rxjs';
import { FavUsuarios } from './../modelosInterface/favUsuarios';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PaginaUsuarioService {

  private readonly uriApi = '../../assets/favoritosUsuario.json'

  constructor(
    private favHttp: HttpClient
    ) { }

  livrosFavoritos(){
    return this.favHttp.get<FavUsuarios[]>(this.uriApi).pipe(
      first(),
      tap(apiFavoritos => apiFavoritos)
    )
  }

}
