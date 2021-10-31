import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfessorService {
  showSuccess = { message: '', valid: false };

  constructor(private httpClient: HttpClient) {}

  salvarEdicaoProfessor(professorAtualizado: any) {
    this.httpClient
      .post(
        'http://localhost:8080/api/professor/editar-professor',
        professorAtualizado
      )
      .subscribe((result) => {
        this.showSuccess.valid = true;
        this.showSuccess.message = `${result}`;
      });
  }

  salvarCadastroProfesor(novoProfessor: any) {
    this.httpClient
      .post(
        'http://localhost:8080/api/admin/cadastrar-professor',
        novoProfessor
      )
      .subscribe((result) => {
        this.showSuccess.valid = true;
        this.showSuccess.message = `${result}`;
      });
  }

  excluirProfessor(professor: any) {
    this.httpClient
      .put('http://localhost:8080/api/admin/delete-professor', professor)
      .subscribe((result) => {
        this.showSuccess.valid = true;
        this.showSuccess.message = `${result}`;
      });
  }

  listarProfessores() {
    this.httpClient
      .get('http://localhost:8080/api/admin/listar/professores')
      .subscribe((professores) => {
        console.log(professores);
        return professores;
      });
  }
}
