
import { Component, OnInit } from '@angular/core';
import { Biblioteconomia } from '../modelos/biblioteconomia';
import { BiblioteconomiaService } from './../servicos/biblioteconomia.service';
import { catchError, Observable, of } from 'rxjs';

@Component({
  selector: 'app-biblioteconomia',
  templateUrl: './biblioteconomia.component.html',
  styleUrls: ['./biblioteconomia.component.scss']
})
export class BiblioteconomiaComponent implements OnInit {

  logoCards='/assets/imagens/logoBS4.png';

  cardsBiblio$: Observable <Biblioteconomia[]>;

  constructor(
    private biblioteconomiaService: BiblioteconomiaService
  ) {
    this.cardsBiblio$ = biblioteconomiaService.listagemBiblio()
    .pipe(
      catchError(error =>{
        return of([])
      })
    )
   }

  ngOnInit(): void {
  }

}
