import { Artes } from './../modelosInterface/artes';
import { ArtesService } from './../servicosInterface/artes.service';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
import { AppDialogosComponent } from './../app-compartilhado/app-dialogos/app-dialogos.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable, catchError, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artes',
  templateUrl: './artes.component.html',
  styleUrls: ['./artes.component.scss'],

})
export class ArtesComponent implements OnInit {


  livrosArtes$: Observable<Artes[]>
  livrosColunas=['ranking','img', 'titulo','autor','descricao', 'ano'];

  usuario$ = this.AutenticacaoFirebaseService.usuarioLogado$;
  livrosArtes = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if(matches){
        return this.livrosArtes$;
      }
      return this.livrosArtes$;
    })
  )

  constructor(
    private breakpointObserver: BreakpointObserver,
    private AutenticacaoFirebaseService: AutenticacaoFirebaseService,
    private artesService: ArtesService,
    public dialogo: MatDialog) {

    this.livrosArtes$ = artesService.listagemLivrosArtes().pipe(
      catchError(error => {
        this.abrirDialogoErro('Erro ao carregar a tabela: #BS - '+ error.status)
        return of([])
      }
      )
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
