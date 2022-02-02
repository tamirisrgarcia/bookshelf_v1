import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss'],
})
export class AppLoginComponent {
  formularioLogin = this.loginBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required),
  });

  hasUnitNumber = false;

  constructor(
    private loginBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public conteudo: string,
    public dialogRef: MatDialogRef<AppLoginComponent>,
    private toast: HotToastService,
    private rotas: Router,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService
  ) {}

  get email() {
    return this.formularioLogin.get('email');
  }

  get senha() {
    return this.formularioLogin.get('senha');
  }

  // Rotina para fechar diálogo com a validação do login pelo firebase
  fecharDialogo(){
    this.dialogRef.close()
  }

  loginFirebase() {
    if (!this.formularioLogin.valid) {
      return;
    } else {
      this.fecharDialogo()
    }

    const { email, senha } = this.formularioLogin.value;
    this.autenticacaoFirebaseService
      .loginUsuario(email, senha)
      .pipe(
        // Correção de Português no Toast
        this.toast.observe({
          success: 'Login válido, obrigado!',
          loading: 'Redirecionando...',
          error: 'Algo deu errado, confira suas informações!',
        })
      )
      .subscribe(() => {
        this.rotas.navigate(['/cdd']);
        this.limparLogin();
      });
  }


  // Rotina de limpar campos de login
  limparLogin() {
    this.formularioLogin = new FormGroup({
      email: new FormControl(''),
      senha: new FormControl(''),
    });
    this.formularioLogin.reset();
  }

  loginGoogle(){
    this.autenticacaoFirebaseService.googleAuthProvider().subscribe(() =>{
      this.rotas.navigate(['/feed']),
      this.fecharDialogo()
    });
  }

}
