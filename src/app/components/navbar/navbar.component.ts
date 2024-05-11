import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    isMenuOpen: boolean = false;

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }

    isUserLoggedIn(): boolean {
      const user = localStorage.getItem('user');
      return !!user; // Retorna true se o usuário estiver logado, senão retorna false
    }

    logout() {
      // Limpa o localStorage
      localStorage.removeItem('user');
      // Redireciona o usuário para a página de login (ou outra página desejada)
      window.location.href = '/login'; // Altere '/login' para a rota desejada
    }
}