import { WikiCadastro } from './../modelosInterface/wikiCadastro';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
import { WikiService } from './../servicosInterface/wiki.service';
import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { WikiLogin } from '../modelosInterface/wikiLogin';
import { WikiErro } from '../modelosInterface/wikiErro';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss']
})
export class WikiComponent implements OnInit {

  wikiLogin$ !: Observable<WikiLogin[]>;
  wikiCadastro$ !: Observable<WikiCadastro[]>;
  wikiErro$ !: Observable<WikiErro[]>;

  visaoColunas = ['titulo', 'descricao'];

  usuario$ = this.autenticacaoFirebaseService.usuarioLogado$;

  wikiCadastroCode = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if(matches){
        return this.wikiCadastro$;
      }
      return this.wikiCadastro$;
    })
  );

  wikiErroCode = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if(matches){
        return this.wikiErro$;
      }
      return this.wikiErro$;
    })
  );

  wikiLoginCode = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if(matches){
        return this.wikiLogin$;
      }
      return this.wikiLogin$;
    })
  );

  constructor(private wikiLogin: WikiService,
   private wikiErro: WikiService,
   private wikiCadastro: WikiService,
   private autenticacaoFirebaseService: AutenticacaoFirebaseService,
   private breakpointObserver: BreakpointObserver) {
    this.wikiCadastro$ = wikiCadastro.cadastroCreate().pipe(
      catchError(error => {
        return of([])
      })
    )
    this.wikiLogin$ = wikiLogin.loginCreate().pipe(
      catchError(error => {
        return of([])
      })
    )
    this.wikiErro$ = wikiErro.erroCreate().pipe(
      catchError(error => {
        return of([])
      })
    )
   }

  ngOnInit() {
  }

}
