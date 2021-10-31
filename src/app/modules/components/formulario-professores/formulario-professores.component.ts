import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-formulario-professores',
  templateUrl: './formulario-professores.component.html',
  styleUrls: ['./formulario-professores.component.scss'],
  providers: [MessageService],
})
export class FormularioProfessoresComponent implements OnInit {
  @Input() titulo: any = 'Cadastro de Professor';

  @Input() formGroup: any;
  @Input() instancia: any;
  @Output() professorAtualizado = new EventEmitter();
  @Output() novoProfessor = new EventEmitter();
  idDoProfessor: any;

  formularioValues = {
    id: '',
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
    disciplina: '',
    rua: '',
    bairro: '',
    numero: '',
    complemento: '',
    cep: '',
    cidade: '',
    estado: '',
  };

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    if (this.instancia == 'edicao') {
      this.idDoProfessor = this.formGroup.value.id;
      this.formularioValues.nome = this.formGroup.value.nome;
      this.formularioValues.sobrenome = this.formGroup.value.sobrenome;
      this.formularioValues.email = this.formGroup.value.email;
      this.formularioValues.senha = this.formGroup.value.senha;
      this.formularioValues.disciplina = this.formGroup.value.disciplina;
      this.formularioValues.rua = this.formGroup.value.rua;
      this.formularioValues.bairro = this.formGroup.value.bairro;
      this.formularioValues.numero = this.formGroup.value.numero;
      this.formularioValues.complemento = this.formGroup.value.complemento;
      this.formularioValues.cep = this.formGroup.value.cep;
      this.formularioValues.cidade = this.formGroup.value.cidade;
      this.formularioValues.estado = this.formGroup.value.estado;
    }
    this.formGroup.controls.disciplina.valueChanges.subscribe(
      (value: string) => {
        this.formGroup.value.disciplina = value.toUpperCase();
        this.formularioValues.disciplina = value.toUpperCase();
      }
    );
    this.formGroup.controls.cidade.valueChanges.subscribe((value: string) => {
      this.formGroup.value.cidade = value.toUpperCase();
      this.formularioValues.cidade = value.toUpperCase();
    });
  }

  salvarEdicao() {
    this.formGroup.value.id = this.idDoProfessor;
    this.professorAtualizado.emit(this.formGroup.value);
  }

  salvarCadastro() {
    if (this.formGroup.valid) {
      this.novoProfessor.emit(this.formGroup.value);
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Mensagem do sistema!',
        detail: 'Preencha corretamente todos os campos!',
      });
    }
  }
}
