import { AppDialogosComponent } from './../app-compartilhado/app-dialogos/app-dialogos.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { Observable, catchError, of, map } from 'rxjs';
import { PaginaUsuarioService } from './../servicosInterface/pagina-usuario.service';
import { FavUsuarios } from '../modelosInterface/favUsuarios';
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


export interface Interesses {
  area: string;
}

@Component({
  selector: 'app-app-pagina-usuario',
  templateUrl: './app-pagina-usuario.component.html',
  styleUrls: ['./app-pagina-usuario.component.scss']
})

export class AppPaginaUsuarioComponent implements OnInit {

  interesses$: Interesses[] = [
    { area: 'Artes' },
    { area: 'Direito'},
    { area: 'Psicologia'},
    { area: 'Sagas'},
    { area: 'Teatro'},
    { area: '...'},
    { area: '...'},
    { area: '...'},
    { area: '...'},
    { area: '...'},
    { area: '...'},
    { area: '...'}
  ]

  // Foto de Perfil
  perfilFoto?: File;
  @ViewChild('perfilInput') perfilInput!: ElementRef

  favoritosUsuario$: Observable<FavUsuarios[]>

  usuario$ = this.autenticacaoFirebaseService.usuarioLogado$;
  usuarioUsername = 'Definir Username'
  usuarioDataNasc = '00/00/0000'
  usuarioGenero = 'Definir Gênero'
  usuarioPlano = 'Plano Básico'
  todayDate: Number = new Date().getMonth()
  fotoPerfil = "../../assets/imagens/userdefault.png"
  babyPerfil = "../../assets/imagens/baby-svgrepo-com.svg"

  livrosFav = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if(matches){
        return this.favoritosUsuario$
      }
        return this.favoritosUsuario$
    })
  )

  constructor(
    private autenticacaoFirebaseService: AutenticacaoFirebaseService,
    private paginaUsuario: PaginaUsuarioService,
    public dialogo: MatDialog,
    private breakpointObserver: BreakpointObserver
  ) {
    this.favoritosUsuario$ = paginaUsuario.livrosFavoritos().pipe(
      catchError(error => {
        this.abrirDialogoErro('Erro ao carregar a tabela: #BS -' + error.status)
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

