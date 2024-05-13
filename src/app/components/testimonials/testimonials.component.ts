import { Component, OnInit } from '@angular/core';
import { TestimonialsService } from '../../services/testimonials.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Post } from '../../model/testimonial.model';
import { User } from '../../model/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule ],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent  implements OnInit{
  errorMessage: string = '';
  sucessMessage: string = '';
  post: Post | undefined;
  testimonial: string = '';
  token: string | undefined = '';
  posts: Post[] = []
  
  constructor(private testimonialsService: TestimonialsService) {}
  ngOnInit(): void {
    this.loadTestimonials();
  }

  sendTestimonial(event: Event, testimonial: string) {
    event.preventDefault();
    console.info('Iniciando envio do depoimento:', testimonial);
    const userData: string | null = localStorage.getItem('user');

    if (userData !== null) {
      console.info('Usuario existe');
      const user: User = JSON.parse(userData);
      this.post = new Post()
      this.post.text = testimonial
      this.post.creatorId = user.id
      this.post.creatorName = user.name
      this.token = user.token
      console.info('Post: ', this.post);
    } else {
      console.error('Usuario não logado');
      return;
    }

    testimonial = '';
    
    if (this.post) {
      this.testimonialsService.sendTestimonials(this.post, this.token)
        .subscribe(
          () => {
            console.log('Depoimento enviado com sucesso!');
          },
          error => {
            console.error('Erro ao enviar depoimento:', error);
          }
        );
    }
  }

  deletePost(postId: Number | undefined) {
      this.testimonialsService.delete(postId)
        .subscribe(
          () => {
            console.log('Depoimento deletado com sucesso!');
            this.posts = this.posts.filter(post => post.id !== postId);
          },
          error => {
            console.error('Erro ao deletar depoimento:', error);
          }
        );
  }

  loadTestimonials() {
    this.testimonialsService.getAllTestimonialsByUser()
      .subscribe(
        (posts: Post[]) => {
          this.posts = posts;
        },
        error => {
          console.error('Error fetching testimonials:', error);
        }
      );
  }

  closePopup() {
      this.errorMessage = '';
      this.sucessMessage = '';
  }
}