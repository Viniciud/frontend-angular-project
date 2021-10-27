import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-gestao-professores',
  templateUrl: './gestao-professores.component.html',
  styleUrls: ['./gestao-professores.component.scss'],
})
export class GestaoProfessoresComponent implements OnInit {
  showListaProfessores: Boolean = false;
  showRelatorio: Boolean = false;
  showFormProfessor: Boolean = false;
  sair: Boolean = false;

  formInstancia: string = 'cadastro';
  tituloForm: string = '';

  formGroup: FormGroup = this.formBuilder.group({
    nome: new FormControl(null),
    sobrenome: new FormControl(null),
    email: new FormControl(null),
    senha: new FormControl(null),
    disciplina: new FormControl(null),
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
    this.showListaProfessores = false;
    this.showFormProfessor = false;
    this.sair = false;

    if (item == 1) {
      this.showRelatorio = true;
    } else if (item == 2) {
      this.showListaProfessores = true;
    } else if (item == 4) {
      this.sair = true;
    }
  }

  showItemCadastro(value: Boolean) {
    this.formInstancia = 'cadastro';
    this.tituloForm = 'Cadastro de Professor';
    this.showFormProfessor = value;
    this.showListaProfessores = false;
  }

  showItemEdicao(item: any) {
    this.formInstancia = 'edicao';
    this.tituloForm = 'Edição de Professor';
    this.showFormProfessor = true;
    this.showListaProfessores = false;

    this.formGroup.value.nome = item.nome;
    console.log('Professor', item);
  }

  ngOnInit(): void {
    this.itemSelector(2);
  }
}
