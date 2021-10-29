import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-grid-alunos',
  templateUrl: './grid-alunos.component.html',
  styleUrls: ['./grid-alunos.component.scss'],
})
export class GridAlunosComponent implements OnInit {
  @Output() showCadastro = new EventEmitter();
  @Output() showEdicao = new EventEmitter();
  @Output() alunoExclusao = new EventEmitter();

  @Input() alunos = [];

  first = 0;

  rows = 10;

  constructor() {}

  ngOnInit() {}

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.alunos ? this.first === this.alunos.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.alunos ? this.first === 0 : true;
  }

  showItemCadastro(value: Boolean) {
    this.showCadastro.emit(value);
  }

  showItemEdicao(item: any) {
    this.showEdicao.emit(item);
  }

  excluirAluno(aluno: any) {
    this.alunoExclusao.emit(aluno);
  }
}
