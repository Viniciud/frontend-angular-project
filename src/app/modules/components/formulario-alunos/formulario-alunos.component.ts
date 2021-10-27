import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-alunos',
  templateUrl: './formulario-alunos.component.html',
  styleUrls: ['./formulario-alunos.component.scss'],
})
export class FormularioAlunosComponent implements OnInit {
  @Input() titulo: any = 'Cadastro de Alunos';

  @Input() formGroup: any;
  @Input() instancia: any;

  formularioValues = {
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
      this.formularioValues.nome = this.formGroup.value.nome;
      this.formularioValues.sobrenome = this.formGroup.value.sobrenome;
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
