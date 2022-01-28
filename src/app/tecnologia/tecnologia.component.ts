import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, map, Observable, of } from 'rxjs';
import { AppDialogosComponent } from '../app-compartilhado/app-dialogos/app-dialogos.component';
import { Tecnologia } from '../modelosInterface/tecnologia';
import { AutenticacaoFirebaseService } from '../servicosInterface/autenticacao-firebase.service';
import { TecnologiaService } from '../servicosInterface/tecnologia.service';

@Component({
  selector: 'tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.scss']
})
export class TecnologiaComponent implements OnInit {

  livrosTec$!: Observable<Tecnologia[]>
  livrosColunas = ['ranking','img', 'titulo','autor','descricao', 'ano'];

  usuario$ = this.autenticacaoFirebaseService.usuarioLogado$;
  livrosTec = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches}) => {
      if(matches){
        return this.livrosTec$;
      }
      return this.livrosTec$;
    })
  )

  constructor(
    private breakpointObserver: BreakpointObserver,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService,
    private tecnologiaService: TecnologiaService,
    private dialogo: MatDialog
  ) {
    this.livrosTec$ = tecnologiaService.listaLivrosTec().pipe(
      catchError(error => {
        this.abrirDialogoErro('Erro ao carregar a tabela: #BS -'+ error.status)
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
