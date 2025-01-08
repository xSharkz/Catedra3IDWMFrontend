import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, RouterOutlet]
})
export class AppComponent {
  title = 'Catedra3IDWMFrontend';
  constructor() {
    RouterModule.forRoot(routes); 
  }
}
