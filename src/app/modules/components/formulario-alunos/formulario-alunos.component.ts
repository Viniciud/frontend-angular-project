import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { dataBase } from 'src/assets/db';

@Component({
  selector: 'app-formulario-alunos',
  templateUrl: './formulario-alunos.component.html',
  styleUrls: ['./formulario-alunos.component.scss'],
})
export class FormularioAlunosComponent implements OnInit {
  @Input() titulo: any = 'Cadastro de Alunos';

  @Input() formGroup: any;
  @Input() instancia: any;
  @Output() alunoAtualizado = new EventEmitter();
  @Output() novoAluno = new EventEmitter();
  idDoAluno: any;

  formularioValues = {
    id: '',
    nome: '',
    sobrenome: '',
    rua: '',
    bairro: '',
    numero: '',
    complemento: '',
    cep: '',
    cidade: '',
    estado: '',
  };

  constructor() {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    if (this.instancia == 'edicao') {
      this.idDoAluno = this.formGroup.value.id;
      this.formularioValues.id = this.formGroup.value.id;
      this.formularioValues.nome = this.formGroup.value.nome;
      this.formularioValues.sobrenome = this.formGroup.value.sobrenome;
      this.formularioValues.rua = this.formGroup.value.rua;
      this.formularioValues.bairro = this.formGroup.value.bairro;
      this.formularioValues.numero = this.formGroup.value.numero;
      this.formularioValues.complemento = this.formGroup.value.complemento;
      this.formularioValues.cep = this.formGroup.value.cep;
      this.formularioValues.cidade = this.formGroup.value.cidade;
      this.formularioValues.estado = this.formGroup.value.estado;
    }
  }

  salvarEdicao() {
    this.formGroup.value.id = this.idDoAluno;
    this.alunoAtualizado.emit(this.formGroup.value);
  }

  salvarCadastro() {
    this.novoAluno.emit(this.formGroup.value);
  }
}
