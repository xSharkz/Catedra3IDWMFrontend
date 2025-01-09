import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { ToastService } from './Services/toast.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, RouterOutlet, CommonModule]
})
export class AppComponent {
  toastMessage: string | null = null;
  title = 'Catedra3IDWMFrontend';
  constructor(private toastService: ToastService) {
    RouterModule.forRoot(routes); 
    this.toastService.toastMessages$.subscribe(message => {
      this.toastMessage = message;
      setTimeout(() => this.toastMessage = null, 3000); // Ocultar el mensaje después de 3 segundos
    });
  }
}
