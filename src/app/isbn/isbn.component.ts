import { IsbnService } from './../servicosInterface/isbn.service';
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Isbn } from '../modelosInterface/isbn';
import { Isbn_ref } from '../modelosInterface/isbn_ref';

@Component({
  selector: 'app-isbn',
  templateUrl: './isbn.component.html',
  styleUrls: ['./isbn.component.scss']
})
export class IsbnComponent implements OnInit {

  isbn$!: Observable<Isbn[]>;
  isbn_ref$!: Observable<Isbn_ref[]>;
  visaoColunas = ['titulo', 'img', 'conteudo'];
  visaoColunasRef = ['ref', 'link'];
  logoCards='../../assets/imagens/logoBS5.png';

  usuario$ = this.autenticacaoFirebaseService.usuarioLogado$;
  isbnCode = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if(matches){
        return this.isbn$;
      }
      return this.isbn$;
    })
  )

  isbnCodeRef = this.breakpointObserverRef.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if(matches){
        return this.isbn_ref$;
      }
      return this.isbn_ref$;
    })
  )

  constructor(
    private autenticacaoFirebaseService: AutenticacaoFirebaseService,
    private isbn: IsbnService,
    private isbn_ref: IsbnService,
    private breakpointObserverRef: BreakpointObserver,
    private breakpointObserver: BreakpointObserver,) {
      this.isbn$ = isbn.isbnCreate().pipe(
        catchError(error => {
          return of([])
        })
      )
      this.isbn_ref$ = isbn_ref.isbnCreateRef().pipe(
        catchError(error => {
          return of([])
        })
      )
    }

  ngOnInit() {
  }

}
