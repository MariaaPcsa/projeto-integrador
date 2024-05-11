import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../model/user.model';
import { SignupService } from '../../services/signup.service';
import { LoginService } from '../../services/login.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signon',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './signon.component.html',
  styleUrl: './signon.component.css'
})
export class SignonComponent {
  user: User = new User();
  errorMessage: string = "";

  constructor(
    private loginService: LoginService, 
    private router: Router) {}

  onSubmit() {
    console.log('DEBUG: ', this.user)

    if(!(this.user.email || this.user.password)) {
      this.errorMessage = 'Todos os campos são obrigatórios.';
      return;
    }
    console.log('DEBUG: sucesso ao validar os campos de login')
    
    this.loginService.login(this.user).subscribe(
      response => {
        console.log('INFO: Login realizado com sucesso!', response);
        console.log('INFO: LocalStorage - ', this.loginService.getUser());
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Erro ao enviar cadastro:', error);
        console.log("ERROR: ", error)
        if ('Usuario ou senha está incorreto') {
          this.errorMessage = 'Usuario ou senha incorretos';
        } else {
          this.errorMessage = 'Entre em contato com o administrador';
        }
      });
  }

   // Método para fechar o popup
   closePopup() {
    this.errorMessage = '';
  }
}