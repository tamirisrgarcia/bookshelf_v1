import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, map, Observable, of } from 'rxjs';
import { AppDialogosComponent } from '../app-compartilhado/app-dialogos/app-dialogos.component';
import { AutenticacaoFirebaseService } from '../servicosInterface/autenticacao-firebase.service';
import { BrasileMundo } from '../modelosInterface/brasilEMundo';
import { BrasilEMundoService } from '../servicosInterface/brasil-emundo.service';

@Component({
  selector: 'brasil-emundo',
  templateUrl: './brasil-emundo.component.html',
  styleUrls: ['./brasil-emundo.component.scss']
})
export class BrasilEMundoComponent implements OnInit {

  livrosBrasil$!: Observable<BrasileMundo[]>;
  livrosMundo$!: Observable<BrasileMundo[]>;
  livrosColunas=['ranking','img', 'titulo','autor','descricao', 'ano'];

  usuario$ = this.AutenticacaoFirebaseService.usuarioLogado$;
  livrosBrasileMundo = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if(matches){
        return this.livrosBrasil$;
      }
      return this.livrosBrasil$;
    })
  )

  usuarios$ = this.AutenticacaoFirebaseService.usuarioLogado$;
  livrosMundo = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if(matches){
        return this.livrosMundo$;
      }
      return this.livrosMundo$;
    })
  )

  constructor(private breakpointObserver: BreakpointObserver,
    private AutenticacaoFirebaseService: AutenticacaoFirebaseService,
    private BMService: BrasilEMundoService,
    public dialogo: MatDialog) {

      this.livrosBrasil$ = BMService.listaBrasil().pipe(
        catchError(error => {
          this.abrirDialogoErro('Erro ao carregar a tabela: #BS - '+ error.status)
          return of([])
        })
      )

      this.livrosMundo$ = BMService.listaMundo().pipe(
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
