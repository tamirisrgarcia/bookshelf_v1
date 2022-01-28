import { AppDialogosComponent } from './../app-compartilhado/app-dialogos/app-dialogos.component';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
import { MatDialog } from '@angular/material/dialog';
import { SagasService } from './../servicosInterface/sagas.service';
import { Sagas } from './../modelosInterface/sagas';
import { Observable, catchError, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sagas',
  templateUrl: './sagas.component.html',
  styleUrls: ['./sagas.component.scss']
})
export class SagasComponent implements OnInit {

  livrosSagas$!: Observable<Sagas[]>
  livrosColunas = ['ranking', 'img', 'titulo', 'autor', 'descricao', 'ano']

  usuario$ = this.AutenticacaoFirebaseService.usuarioLogado$
  livrosSagas = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
    if(matches) {
      return this.livrosSagas$
    }
      return this.livrosSagas$
    })
  )

  constructor(
    private sagasService: SagasService,
    public dialogo: MatDialog,
    private AutenticacaoFirebaseService: AutenticacaoFirebaseService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.livrosSagas$ = sagasService.listaSagas().pipe(
      catchError(error => {
        this.abrirDialogoErro('erro ao carregar tabela: #BS - ' + error.status)
        return of([])
      })
    )
  }

  ngOnInit() {
  }

  abrirDialogoErro(erroMsg: string){
    this.dialogo.open(AppDialogosComponent, {
      data: erroMsg
    })
  }

}
