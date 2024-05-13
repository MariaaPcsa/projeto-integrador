import { Component } from '@angular/core';
import { SignupService } from '../../services/signup.service';
import { User } from '../../model/user.model';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  user: User = new User();
  errorMessage: string = '';
  sucessMessage: string = '';

  constructor(private signupService: SignupService) {} // Injeta o UserService no construtor

  // Método para enviar o cadastro do usuário
  onSubmit() {
    console.log("DEBUG: ", this.user)
  // Validar os campos do formulário
    if (!this.user.name 
        || !this.user.surname 
        || !this.user.email 
        || !this.user.password 
        || !this.user.phone 
        || !this.user.birthday)  {
      this.errorMessage = 'Todos os campos são obrigatórios.';
      return; // Impede o envio do formulário se algum campo estiver vazio
    }

    if (!this.validateEmail(this.user.email)) {
      this.errorMessage = 'Por favor, insira um email válido.';
      return; // Impede o envio do formulário se o email não for válido
    }

    if (this.user.password.length < 7) {
      this.errorMessage = 'A senha deve ter pelo menos 7 caracteres.';
      return; // Impede o envio do formulário se a senha for curta demais
    }

    console.log("INFO: Validações realizadas com sucesso")

    // Chama um método do UserService para enviar os dados do cadastro
    this.signupService.registerUser(this.user).subscribe(
      response => {
        console.log('Cadastro enviado com sucesso!', response);
        this.errorMessage = 'Usuario cadastrado com sucesso';
      },
      error => {
        console.error('Erro ao enviar cadastro:', error);
        if (error.message.includes('Unique index or primary key violation')) {
          this.errorMessage = 'Nome de usuario ou email já cadastrado';
        } else {
          this.errorMessage = 'Entre em contato com o administrador';
        }
      });
  }

  // Método para fechar o popup
  closePopup() {
    this.errorMessage = '';
    this.sucessMessage = '';
  }

  validateEmail(email: string) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
}