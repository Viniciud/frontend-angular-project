import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { dataBase } from 'src/assets/db';

@Component({
  selector: 'app-gestao-alunos',
  templateUrl: './gestao-alunos.component.html',
  styleUrls: ['./gestao-alunos.component.scss'],
  providers: [MessageService],
})
export class GestaoAlunosComponent implements OnInit {
  dados: any = dataBase;
  access: Boolean = false;
  showListaAlunos: Boolean = false;
  showListaNotaAlunos: Boolean = false;
  showRelatorio: Boolean = false;
  showFormAluno: Boolean = false;
  sair: Boolean = false;

  formInstancia: string = 'cadastro';
  tituloForm: string = '';

  formGroup: FormGroup = this.formBuilder.group({
    id: new FormControl(null),
    nome: new FormControl(null),
    sobrenome: new FormControl(null),
    rua: new FormControl(null),
    bairro: new FormControl(null),
    numero: new FormControl(null),
    complemento: new FormControl(null),
    cep: new FormControl(null),
    cidade: new FormControl(null),
    estado: new FormControl(null),
    foto: new FormControl(null),
  });

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private httpClient: HttpClient
  ) {}

  itemSelector(item: number) {
    this.showRelatorio = false;
    this.showListaAlunos = false;
    this.showListaNotaAlunos = false;
    this.showFormAluno = false;
    this.sair = false;

    if (item == 1) {
      this.showRelatorio = true;
    } else if (item == 2) {
      this.showListaAlunos = true;
    } else if (item == 3) {
      this.showListaNotaAlunos = true;
    } else if (item == 4) {
      this.sair = true;
    }
  }

  showItemCadastro(value: Boolean) {
    this.formInstancia = 'cadastro';
    this.tituloForm = 'Cadastro de Aluno';
    this.showFormAluno = value;
    this.showListaAlunos = false;
  }

  showItemEdicao(item: any) {
    this.formInstancia = 'edicao';
    this.tituloForm = 'Edição de Aluno';
    this.showFormAluno = true;
    this.showListaAlunos = false;

    this.formGroup.value.id = item.id;
    this.formGroup.value.nome = item.nome;
    this.formGroup.value.sobrenome = item.sobrenome;
    this.formGroup.value.rua = item.rua;
    this.formGroup.value.bairro = item.bairro;
    this.formGroup.value.numero = item.numero;
    this.formGroup.value.complemento = item.complemento;
    this.formGroup.value.cep = item.cep;
    this.formGroup.value.cidade = item.cidade;
    this.formGroup.value.estado = item.estado;
    console.log('Aluno', item);
  }

  salvarEdicao(alunoAtualizado: any) {
    this.httpClient.post('http://localhost:8080/api/aluno/update', alunoAtualizado).subscribe(result => {
      console.log('result: ' + result);
    });
    console.log('RECEBIDO', alunoAtualizado);

    dataBase.map((aluno, index) => {
      if (aluno.id == alunoAtualizado.id) {
        dataBase[index] = alunoAtualizado;
        this.messageService.add({
          severity: 'success',
          summary: 'Mensagem do sistema!',
          detail: 'Atualizado com Sucesso!',
        });
        console.log('BASE ATUALIZADA', dataBase);
        this.itemSelector(2);
      }
    });
  }

  salvarCadastro(novoAluno: any) {
    this.httpClient.post('http://localhost:8080/api/aluno/salvar', novoAluno).subscribe(result => {
      console.log('result: ' + result);
    });
    novoAluno.id = dataBase.length + 1;

    dataBase.push(novoAluno);
    this.messageService.add({
      severity: 'success',
      summary: 'Mensagem do sistema!',
      detail: 'Aluno Cadastrado com Sucesso!',
    });
    this.itemSelector(2);
  }

  excluirAluno(aluno: any) {
    this.httpClient.put('http://localhost:8080/api/aluno/remover', aluno).subscribe(result => {
      console.log('result: ' + result);
    });
    var indice = dataBase.indexOf(aluno);
    while (indice >= 0) {
      dataBase.splice(indice, 1);
      indice = dataBase.indexOf(aluno);
    }
    console.log(dataBase);
  }

  inserirNota(alunoNota: any) {
    let notas = {
      notaUm: alunoNota.notaUm,
      notaDois: alunoNota.notaDois,
      notaTres: alunoNota.notaTres,
      notaQuatro: alunoNota.notaQuatro,
      notaFinal: alunoNota.notaFinal,
    }

    this.httpClient.post(`http://localhost:8080/api/aluno/${alunoNota.id}/update-notas`, notas).subscribe(result => {
      console.log('result: ' + result);
    });
    dataBase.map((aluno, index) => {
      if (aluno.id == alunoNota.id) {
        alunoNota.notaFinal =
          alunoNota.notaUm +
          alunoNota.notaDois +
          alunoNota.notaTres +
          alunoNota.notaQuatro;
        dataBase[index] = alunoNota;
        this.messageService.add({
          severity: 'success',
          summary: 'Mensagem do sistema!',
          detail: 'Atualizado com Sucesso!',
        });
        console.log('BASE ATUALIZADA', dataBase);
      }
    });
  }

  pegarTodosAlunos(){
    this.httpClient.get('http://localhost:8080/api/aluno/listar').subscribe(alunos => {
      console.log(alunos);
      return alunos;
    });
  }

  ngOnInit(): void {
    this.access = Boolean(localStorage.getItem('role') == 'professor');
    this.itemSelector(2);

    // this.dados = this.pegarTodosAlunos();
  }
}
