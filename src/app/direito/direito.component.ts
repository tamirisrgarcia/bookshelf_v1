import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppDialogosComponent } from './../app-compartilhado/app-dialogos/app-dialogos.component';
import { Direito } from './../modelosInterface/direito';
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
import { DireitoService } from './../servicosInterface/direito.service';

@Component({
  selector: 'app-direito',
  templateUrl: './direito.component.html',
  styleUrls: ['./direito.component.scss'],
})
export class DireitoComponent implements OnInit {
  livrosDireito$: Observable<Direito[]>;
  livrosColunas = ['ranking', 'img', 'titulo', 'autor', 'descricao', 'ano'];

  usuario$ = this.AutenticacaoFirebaseService.usuarioLogado$;
  livrosDireito = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.livrosDireito$;
      }
      return this.livrosDireito$;
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private AutenticacaoFirebaseService: AutenticacaoFirebaseService,
    private direitoService: DireitoService,
    public dialogo: MatDialog
  ) {
    this.livrosDireito$ = direitoService.listaLivrosDireito().pipe(
      catchError((error) => {
        this.abrirDialogoErrro(
          'Erro ao carregar a tabela: #BS - ' + error.status
        );
        return of([]);
      })
    );
  }

  abrirDialogoErrro(erroMsg: string) {
    this.dialogo.open(AppDialogosComponent, {
      data: erroMsg,
    });
  }

  ngOnInit(): void {}
}
