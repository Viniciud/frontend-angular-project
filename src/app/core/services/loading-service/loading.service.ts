import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  exibirLoadingSubject = new Subject<string>();
  removerLoadingSubject = new Subject<string>();
  removerTodosLoadingsSubject = new Subject();

  exibirLoading(metodo: string): void {
    this.exibirLoadingSubject.next(metodo);
  }

  removerLoading(metodo: string): void {
    this.removerLoadingSubject.next(metodo);
  }

  removerTodosOsLoadings(): void {
    this.removerTodosLoadingsSubject.next();
  }
}
