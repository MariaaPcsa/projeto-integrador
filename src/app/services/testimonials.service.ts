import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../model/testimonial.model';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {
  user: User = new User

  constructor(private http: HttpClient) { }

  sendTestimonials(post: Post, token: string | undefined) {
    console.log("DEBUG " + JSON.stringify(post))

    const headers = new HttpHeaders({
      'Authorization': `${token}`
    });

    const options = { headers: headers };

    return this.http.post('http://localhost:8080/message/postMessage', post, options);
  }

  getAllTestimonialsByUser(): Observable<Post[]> {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    }
  
    const headers = new HttpHeaders({
      'Authorization': `${this.user.token}`
    });

    const options = { headers: headers };

    const url = `http://localhost:8080/message/getAllByUserId`;
    return this.http.get<Post[]>(url, options);
  }

  
  getAllTestimonials(): Observable<Post[]> {
    const url = `http://localhost:8080/message/getAll`;
    return this.http.get<Post[]>(url);
  }

  

  
  delete(postId: Number | undefined) {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    }
  
    const headers = new HttpHeaders({
      'Authorization': `${this.user.token}`
    });

    const options = { headers: headers };

    const url = `http://localhost:8080/message/deleteMessage?idMessage=${postId}`;
    return this.http.delete(url, options);
  } 
}