import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { catchError, Observable, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MenuTop10 } from '../modelosInterface/menuTop10';

import { AppLoginComponent } from './../app-login/app-login.component';
import { MenuNavegador } from './../modelosInterface/menuNavegador';
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
import { NavegacaoService } from './../servicosInterface/navegacao.service'
// import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})
export class NavegacaoComponent {
  usuario$ = this.autenticacaoFirebaseService.usuarioLogado$;
  //Itens co menu principal.
  logoMenu='../../assets/imagens/logoBS4.png';
  //Itens de icones e imagens de navegação.
  iconeGeral='../../assets/imagens/ShelfBook.png';
  lIcone=80;
  aIcone=80;
  //Controle das rotas do menu.
  itensMenu$: Observable<MenuNavegador[]>
  itensMenuTop10$!: Observable<MenuTop10[]>

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(
    private breakpointObserver: BreakpointObserver,
    private telaLogin: MatDialog,
    private rotas: Router,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService,
    private navegadorService: NavegacaoService,
    private toast: HotToastService
    // public tooltip: MatTooltip
    ) {
      this.itensMenu$ = navegadorService.listagemMenu()
      .pipe(
        catchError(error =>{
          return of([])
        })
      )

      this.itensMenuTop10$ = navegadorService.listagemMenuTop10()
      .pipe(
        catchError(error => {
          return of([])
        })
      )


    }

    abrirLogin(erroMsg: string){
      this.telaLogin.open(AppLoginComponent,{
        data: erroMsg
      })
    }

    //Autenticação de Logout
    sairUsuario(){
      this.autenticacaoFirebaseService.sairLogin()
      .pipe(
        this.toast.observe({
          success: 'Você não está mais logado!',
        })
      ).subscribe(() =>{
        this.rotas.navigate([''])
     })
    }
}
