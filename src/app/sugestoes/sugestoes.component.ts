import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Sugestoes } from '../modelosInterface/sugestoes';
import { SugestoesService } from '../servicosInterface/sugestoes.service';
import { AppDialogosComponent } from './../app-compartilhado/app-dialogos/app-dialogos.component';
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';

@Component({
  selector: 'app-sugestoes',
  templateUrl: './sugestoes.component.html',
  styleUrls: ['./sugestoes.component.scss']
})
export class SugestoesComponent implements OnInit {
  livrosSugestoes$: Observable<Sugestoes[]>

  usuario$ = this.AutenticacaoFirebaseService.usuarioLogado$;
  livrosSugestoes = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if(matches){
        return this.livrosSugestoes$;
      }
      return this.livrosSugestoes$;
    })
  )

  constructor(
    private breakpointObserver: BreakpointObserver,
    private AutenticacaoFirebaseService: AutenticacaoFirebaseService,
    private sugestoesService: SugestoesService,
    public dialogo: MatDialog
  ) {

    this.livrosSugestoes$ = sugestoesService.listagemSugestoes().pipe(
      catchError(error => {
        this.abrirDialogoErro('Erro ao carregar a tabela: #BS - '+ error.status)
        return of([])
      })
    )
  }
    abrirDialogoErro(erroMsg: string){
      this.dialogo.open(AppDialogosComponent, {
        data: erroMsg
      })
    }

  ngOnInit(): void {
  }

}
