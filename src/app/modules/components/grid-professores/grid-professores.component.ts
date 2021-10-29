import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlunoModel } from '../../models/aluno.model';

@Component({
  selector: 'app-grid-professores',
  templateUrl: './grid-professores.component.html',
  styleUrls: ['./grid-professores.component.scss'],
})
export class GridProfessoresComponent implements OnInit {
  @Output() showCadastro = new EventEmitter();
  @Output() showEdicao = new EventEmitter();
  @Output() professorExclusao = new EventEmitter();

  @Input() professores = [];

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
    return this.professores
      ? this.first === this.professores.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.professores ? this.first === 0 : true;
  }

  showItemCadastro(value: Boolean) {
    this.showCadastro.emit(value);
  }

  showItemEdicao(item: any) {
    this.showEdicao.emit(item);
  }

  excluirProfessor(professor: any) {
    this.professorExclusao.emit(professor);
  }
}
