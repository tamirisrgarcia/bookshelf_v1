import { WikiErro } from './../modelosInterface/wikiErro';
import { WikiCadastro } from './../modelosInterface/wikiCadastro';
import { WikiLogin } from './../modelosInterface/wikiLogin';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  private readonly uriApiLogin = '../../assets/usoLogin.json';
  private readonly uriApiUsoCadastro = '../../assets/usoCadastro.json';
  private readonly uriApiErroCadastro = '../../assets/errosCadastro.json'

  constructor(
    private httpClientLogin: HttpClient,
    private httpClientCadastro: HttpClient,
    private httpClientErro: HttpClient
  ) { }

    loginCreate() {
    return this.httpClientLogin.get<WikiLogin[]>(this.uriApiLogin).pipe(
      first(),
      tap(apiLogin => apiLogin),
    )
    }

    cadastroCreate() {
      return this.httpClientCadastro.get<WikiCadastro[]>(this.uriApiUsoCadastro).pipe(
        first(),
        tap(apiLogin => apiLogin),
      )
    }

    erroCreate() {
      return this.httpClientErro.get<WikiErro[]>(this.uriApiErroCadastro).pipe(
        first(),
        tap(apiLogin => apiLogin),
      )
    }

}
