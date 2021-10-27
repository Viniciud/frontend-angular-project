import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gestao-alunos',
  templateUrl: './gestao-alunos.component.html',
  styleUrls: ['./gestao-alunos.component.scss'],
})
export class GestaoAlunosComponent implements OnInit {
  showListaAlunos: Boolean = false;
  showListaNotaAlunos: Boolean = false;
  showRelatorio: Boolean = false;
  showFormAluno: Boolean = false;
  sair: Boolean = false;

  formInstancia: string = 'cadastro';
  tituloForm: string = '';

  formGroup: FormGroup = this.formBuilder.group({
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

  constructor(private formBuilder: FormBuilder) {}

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

    this.formGroup.value.nome = item.nome;
    console.log('Aluno', item);
  }

  ngOnInit(): void {
    this.itemSelector(2);
  }
}
