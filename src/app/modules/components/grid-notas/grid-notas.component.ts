import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { AlunoModel } from '../../models/aluno.model';

@Component({
  selector: 'app-grid-notas',
  templateUrl: './grid-notas.component.html',
  styleUrls: ['./grid-notas.component.scss'],
  providers: [MessageService],
})
export class GridNotasComponent implements OnInit {
  @Input() alunos: any;
  @Output() notaAluno = new EventEmitter();

  first = 0;

  rows = 10;

  constructor(private messageService: MessageService) {}

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

  onRowEditInit(aluno: any) {
    console.log('ALUNO:', aluno);
  }

  onRowEditSave(aluno: any) {
    if (aluno.id > 0 && aluno != undefined) {
      this.notaAluno.emit(aluno);
    }
  }

  onRowEditCancel(aluno: AlunoModel, index: number) {}
}
