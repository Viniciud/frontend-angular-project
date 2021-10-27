import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-professores',
  templateUrl: './formulario-professores.component.html',
  styleUrls: ['./formulario-professores.component.scss'],
})
export class FormularioProfessoresComponent implements OnInit {
  @Input() titulo: any = 'Cadastro de Professor';

  @Input() formGroup: any;
  @Input() instancia: any;

  formularioValues = {
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

  constructor() {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    if (this.instancia == 'edicao') {
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

      console.log('DADOS', this.formularioValues);

      this.formGroup.controls.nome.valueChanges.subscribe((value: any) => {
        console.log('VALUE', value);
      });
    }
  }
}
