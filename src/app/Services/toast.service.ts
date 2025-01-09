import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastSubject = new Subject<string>();
  toastMessages$ = this.toastSubject.asObservable();

  show(message: string): void {
    this.toastSubject.next(message);
  }
}
