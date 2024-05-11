import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HomeComponent,
              NavbarComponent,
              HttpClientModule,
              RouterOutlet,
              FooterComponent]
})
export class AppComponent {
  constructor() {}
  touchStartX: number = 0;
  touchEndX: number = 0;

  @HostListener('document:touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
  }

  @HostListener('document:touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].clientX;
    this.handleGesture();
  }

  handleGesture() {
    const swipeThreshold = 50; // Define o limiar de deslize

    if (this.touchEndX < this.touchStartX - swipeThreshold) {
      // Deslize para a esquerda (avançar para o próximo slide ou ação desejada)
      console.log('Deslize para a esquerda');
    } else if (this.touchEndX > this.touchStartX + swipeThreshold) {
      // Deslize para a direita (voltar para o slide anterior ou ação desejada)
      console.log('Deslize para a direita');
    }
  }
  
}