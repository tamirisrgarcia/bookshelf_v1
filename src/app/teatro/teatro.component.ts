import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
import { MatDialog } from '@angular/material/dialog';
import { TeatroService } from './../servicosInterface/teatro.service';
import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of, map } from 'rxjs';
import { AppDialogosComponent } from '../app-compartilhado/app-dialogos/app-dialogos.component';
import { Teatro} from '../modelosInterface/teatro';

@Component({
  selector: 'app-teatro',
  templateUrl: './teatro.component.html',
  styleUrls: ['./teatro.component.scss']
})
export class TeatroComponent implements OnInit {

  livrosTeatro$: Observable<Teatro[]>;
  visaoColunas = ['ranking', 'img', 'titulo', 'autor', 'descricao', 'ano'];

  usuario$ = this.autenticacaoFirebaseService.usuarioLogado$;
  livrosTeatro = this.breakPointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(({matches}) => {
      if(matches) {
        return this.livrosTeatro$
      }
      return this.livrosTeatro$;
    })
  )

  constructor(
    private breakPointObserver: BreakpointObserver,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService,
    private teatroService: TeatroService,
    private dialogo: MatDialog
    ) {
      this.livrosTeatro$ = teatroService.listaLivroTeatro()
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

