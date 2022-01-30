import { EspecialMesService } from './../servicosInterface/especial-mes.service';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
import { EspecialMes } from './../modelosInterface/especialMes';
import { Observable, catchError, of } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-especial-mes',
  templateUrl: './especial-mes.component.html',
  styleUrls: ['./especial-mes.component.scss']
})
export class EspecialMesComponent implements OnInit {

  todayDate: Number = new Date().getMonth()


  especialMes$!: Observable<EspecialMes[]>;


  usuario$ = this.autenticacaoFirebaseService.usuarioLogado$;
  especialMes= this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if(matches){
        return this.especialMes$;
      }
      return this.especialMes$;
    })
  )

  constructor(private autenticacaoFirebaseService: AutenticacaoFirebaseService,
    private especMes: EspecialMesService ,
    private breakpointObserver: BreakpointObserver) {
      this.especialMes$ = especMes.listagemEspecMes().pipe(
        catchError(error => {
          return of([])
        })
      )
    }




  ngOnInit(): void {
  }

}
