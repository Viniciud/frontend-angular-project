import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlunoService {
  showSuccess = { message: '', valid: false };

  constructor(private httpClient: HttpClient) {}

  salvarEdicaoAluno(alunoAtualizado: any) {
    this.httpClient
      .post('http://localhost:8080/api/aluno/update', alunoAtualizado)
      .subscribe((result) => {
        this.showSuccess.valid = true;
        this.showSuccess.message = `${result}`;
      });
  }

  salvarCadastroAluno(novoAluno: any) {
    this.httpClient
      .post('http://localhost:8080/api/aluno/salvar', novoAluno)
      .subscribe((result) => {
        this.showSuccess.valid = true;
        this.showSuccess.message = `${result}`;
      });
  }

  excluirAluno(aluno: any) {
    this.httpClient
      .put('http://localhost:8080/api/aluno/remover', aluno)
      .subscribe((result) => {
        this.showSuccess.valid = true;
        this.showSuccess.message = `${result}`;
      });
  }

  inserirNotaAluno(alunoNota: any) {
    let notas = {
      notaUm: alunoNota.notaUm,
      notaDois: alunoNota.notaDois,
      notaTres: alunoNota.notaTres,
      notaQuatro: alunoNota.notaQuatro,
      notaFinal: alunoNota.notaFinal,
    };

    this.httpClient
      .post(
        `http://localhost:8080/api/aluno/${alunoNota.id}/update-notas`,
        notas
      )
      .subscribe((result) => {
        this.showSuccess.valid = true;
        this.showSuccess.message = `${result}`;
      });
  }
}
