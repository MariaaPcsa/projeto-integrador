import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  email?: string | number | boolean;
  password?: string | number | boolean;

  constructor(private http: HttpClient,  private cookieService: CookieService) { }
  
  login(user: User) {{
    this.email = user.email;
    this.password = user.password;
    const url = `http://localhost:8080/user/login?email=${this.email}&password=${this.password}`;
    return this.http.get<HttpResponse<User>>(url, {}).pipe(
      tap(response => {
        if (response) {
          // Salva o token em um cookie com nome 'authToken'
          localStorage.setItem('user', JSON.stringify(response));
      }})
    );
  }
  }

  getUser() {
    return localStorage.getItem('user');
  }
}
