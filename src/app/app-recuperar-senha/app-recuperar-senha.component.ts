
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
import { Router } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-app-recuperar-senha',
  templateUrl: './app-recuperar-senha.component.html',
  styleUrls: ['./app-recuperar-senha.component.scss']
})
export class AppRecuperarSenhaComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(
    private rotas: Router,
    private loginBuilder: FormBuilder,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService,
    private toast: HotToastService,
  ) { }

  formularioRecuperar = this.loginBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  get email() {
    return this.formularioRecuperar.get('email');
  }

  esqueceuSenha() {
    if (this.formularioRecuperar.valid) {
      const {email} = this.formularioRecuperar.value;
      this.autenticacaoFirebaseService.recuperarSenha(email).subscribe({
        next: () => {
        this.toast.success('Email de recuperação de senha enviado!')
      },
      error: (err) => {
        this.toast.error('Email não cadastrado')
      }
    })
  }
  }
}
