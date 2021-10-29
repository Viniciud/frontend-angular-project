import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { dataBaseProfessores } from 'src/assets/db';

@Component({
  selector: 'app-gestao-professores',
  templateUrl: './gestao-professores.component.html',
  styleUrls: ['./gestao-professores.component.scss'],
  providers: [MessageService],
})
export class GestaoProfessoresComponent implements OnInit {
  dados: any = dataBaseProfessores;
  access: Boolean = false;
  showListaProfessores: Boolean = false;
  showRelatorio: Boolean = false;
  showFormProfessor: Boolean = false;
  sair: Boolean = false;

  formInstancia: string = 'cadastro';
  tituloForm: string = '';

  formGroup: FormGroup = this.formBuilder.group({
    id: new FormControl(null),
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

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private httpClient: HttpClient
  ) {}

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

    this.formGroup.value.id = item.id;
    this.formGroup.value.nome = item.nome;
    this.formGroup.value.sobrenome = item.sobrenome;
    this.formGroup.value.email = item.email;
    this.formGroup.value.senha = item.senha;
    this.formGroup.value.disciplina = item.disciplina;
    this.formGroup.value.rua = item.rua;
    this.formGroup.value.bairro = item.bairro;
    this.formGroup.value.numero = item.numero;
    this.formGroup.value.complemento = item.complemento;
    this.formGroup.value.cep = item.cep;
    this.formGroup.value.cidade = item.cidade;
    this.formGroup.value.estado = item.estado;
  }

  salvarEdicao(professorAtualizado: any) {
    this.httpClient.post('http://localhost:8080/api/professor/editar-professor', professorAtualizado).subscribe(result => {
      console.log(result);
    });
    console.log('RECEBIDO', professorAtualizado);

    dataBaseProfessores.map((professor, index) => {
      if (professor.id == professorAtualizado.id) {
        dataBaseProfessores[index] = professorAtualizado;
        this.messageService.add({
          severity: 'success',
          summary: 'Mensagem do sistema!',
          detail: 'Atualizado com Sucesso!',
        });
        console.log('BASE ATUALIZADA', dataBaseProfessores);
        this.itemSelector(2);
      }
    });
  }

  salvarCadastro(novoProfessor: any) {
    this.httpClient.post('http://localhost:8080/api/admin/cadastrar-professor', novoProfessor).subscribe(result => {
      console.log(result);
    });
    novoProfessor.id = dataBaseProfessores.length + 1;

    dataBaseProfessores.push(novoProfessor);
    this.messageService.add({
      severity: 'success',
      summary: 'Mensagem do sistema!',
      detail: 'Professor Cadastrado com Sucesso!',
    });
    this.itemSelector(2);
  }

  excluirProfessor(professor: any) {
    this.httpClient.put('http://localhost:8080/api/admin/delete-professor', professor).subscribe(result => {
      console.log(result);
    });

    var indice = dataBaseProfessores.indexOf(professor);
    while (indice >= 0) {
      dataBaseProfessores.splice(indice, 1);
      indice = dataBaseProfessores.indexOf(professor);
    }
    console.log(dataBaseProfessores);
  }

  pegarTodosProfessores(){
    this.httpClient.get('http://localhost:8080/api/admin/listar/professores').subscribe(professores => {
      console.log(professores);
      return professores;
    });
  }

  ngOnInit(): void {
    this.access = Boolean(localStorage.getItem('role') == 'admin');
    this.itemSelector(2);

    // this.dados = this.pegarTodosProfessores();
  }
}
