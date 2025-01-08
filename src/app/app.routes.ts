import { Routes } from '@angular/router';
import { RegisterComponent } from './Components/Auth/Register/register.component';
import { LoginComponent } from './Components/Auth/Login/login.component';
import { PostsComponent } from './Components/Post/posts/posts.component';
import { CreatePostComponent } from './Components/Post/create-post/create-post.component';
import { AuthGuard } from './Guards/auth.guard';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'posts', component: PostsComponent , canActivate: [AuthGuard]},
  { path: 'create-post', component: CreatePostComponent , canActivate: [AuthGuard]},
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
