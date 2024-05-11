import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestimonialsService } from '../../services/testimonials.service';
import { Post } from '../../model/testimonial.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  images: string[] = ['assets/images/img1.jpg',
                      'assets/images/img2.jpg',
                      'assets/images/Img3.jpg',
                      'assets/images/Img4.jpg'];
  currentIndex: number = 0;
  interval: any;
  errorMessage: string = '';
  sucessMessage: string = '';
  post: Post | undefined;
  testimonial: string = '';
  token: string | undefined = '';
  posts: Post[] = []
  messages: string = ''
  typingName: string | undefined;
  currentMessage: string | null | undefined;
  lastIndexDisplayed: number | undefined;
  isDeletingMessage: boolean = false
  isTypingMessage!: boolean;
  

  constructor(private testimonialsService: TestimonialsService ) { }

  ngOnInit(): void {
    this.startCarousel();
    this.loadPosts();
  }

  startCarousel(): void {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 6000);
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  loadPosts(): void {
    this.testimonialsService.getAllTestimonials()
      .subscribe((posts: Post[]) => {
        console.log("DEBUG Todas as mensagens", posts)
        this.posts = posts;
        this.startTypingEffect();
      });
  }


  startTypingEffect() {
    setInterval(() => {
      if (!this.isTypingMessage && !this.isDeletingMessage && this.posts && this.posts.length > 0) {
        let randomIndex = Math.floor(Math.random() * this.posts.length);
        while (randomIndex === this.lastIndexDisplayed) {
          randomIndex = Math.floor(Math.random() * this.posts.length);
        }
        const randomPost = this.posts[randomIndex];
        this.lastIndexDisplayed = randomIndex;
        this.typingName = randomPost?.creatorName || '';
        if (randomPost?.text) { 
          this.isTypingMessage = true;
          this.typingEffect(randomPost.text, () => {
            this.deleteMessage(() => {
              this.isTypingMessage = false;
            });
          });
        }
      }
    }, 7000);
  }

  typingEffect(message: string, callback: () => void): void {
    let index = 0;
    const interval = setInterval(() => {
      if (index === message.length) {
        clearInterval(interval);
        setTimeout(() => {
          callback(); // Chama a função de callback após o efeito de digitação
        }, 5000);
        return;
      }
      this.currentMessage = message.slice(0, index + 1);
      index++;
    }, 100);
  }

  deleteMessage(callback: () => void): void {
    this.isDeletingMessage = true;
    if (!this.currentMessage) {
      this.isDeletingMessage = false;
      return;
    }
    let index = this.currentMessage.length;
    const interval = setInterval(() => {
      if (index === 0) {
        clearInterval(interval);
        this.currentMessage = null;
        this.isDeletingMessage = false;
        callback(); // Chama a função de callback após a exclusão
        return;
      }
      this.currentMessage = this.currentMessage?.slice(0, index - 1);
      index--;
    }, 50);
  }
}