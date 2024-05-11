import { Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { SignonComponent } from './components/signon/signon.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { WhoweareComponent } from './components/whoweare/whoweare.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signon', component: SignonComponent },
    { path: 'testimonials', component: TestimonialsComponent },
    { path: 'whoweare', component: WhoweareComponent },
    { path: 'profile', component: ProfileComponent}
  ];
  