import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
import { MatDialog } from '@angular/material/dialog';
import { PsicologiaService } from './../servicosInterface/psicologia.service';
import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of, map } from 'rxjs';
import { AppDialogosComponent } from '../app-compartilhado/app-dialogos/app-dialogos.component';
import { Psicologia } from '../modelosInterface/psicologia';

@Component({
  selector: 'app-psicologia',
  templateUrl: './psicologia.component.html',
  styleUrls: ['./psicologia.component.scss']
})
export class PsicologiaComponent implements OnInit {

  livrosPsico$: Observable<Psicologia[]>;
  visaoColunas = ['ranking', 'img', 'titulo', 'autor', 'descricao', 'ano'];

  usuario$ = this.autenticacaoFirebaseService.usuarioLogado$;
  livrosPsico = this.breakPointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(({matches}) => {
      if(matches) {
        return this.livrosPsico$
      }
      return this.livrosPsico$;
    })
  )

  constructor(
    private breakPointObserver: BreakpointObserver,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService,
    private psicologiaService: PsicologiaService,
    private dialogo: MatDialog
    ) {
      this.livrosPsico$ = psicologiaService.listaLivrosPsico()
      .pipe(
        catchError(error => {
          this.abrirDialogoErro("Erro ao carregar a tabela #BS -"+error.status)
          return of([])
        })
      );
    }

    abrirDialogoErro(erroMsg: string) {
      this.dialogo.open(AppDialogosComponent, {
        data: erroMsg
      })
    }


  ngOnInit() {
  }

}
