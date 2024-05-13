import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  user: User = new User

  constructor() { }

  ngOnInit(): void {
    // Recupere as informações do usuário do localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    }
  }

  updateProfile(): void {
    // Atualize as informações do usuário no localStorage
    localStorage.setItem('user', JSON.stringify(this.user));
    alert('Perfil atualizado com sucesso!');
  }
}