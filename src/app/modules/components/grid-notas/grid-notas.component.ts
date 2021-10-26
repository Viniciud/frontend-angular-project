import { Component, OnInit } from '@angular/core';
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
  customers: AlunoModel[] = [
    {
      id: 1,
      nome: 'Joao de Teste de sobrenome',
      notaUm: 22.1,
      notaDois: 23,
      notaTres: 20,
      notaQuatro: 12,
      notaFinal: 77.1,
    },
    {
      id: 2,
      nome: 'Maria de Teste de sobrenome',
      notaUm: 22.1,
      notaDois: 23,
      notaTres: 20,
      notaQuatro: 12,
      notaFinal: 77.1,
    },
    {
      id: 3,
      nome: 'Paulo de Teste de sobrenome',
      notaUm: 22.1,
      notaDois: 23,
      notaTres: 20,
      notaQuatro: 12,
      notaFinal: 77.1,
    },
    {
      id: 4,
      nome: 'Pedro de Teste de sobrenome',
      notaUm: 22.1,
      notaDois: 23,
      notaTres: 20,
      notaQuatro: 12,
      notaFinal: 77.1,
    },
    {
      id: 5,
      nome: 'Matheus de Teste de sobrenome',
      notaUm: 22.1,
      notaDois: 23,
      notaTres: 20,
      notaQuatro: 12,
      notaFinal: 77.1,
    },
    {
      id: 6,
      nome: 'Carlos de Teste de sobrenome',
      notaUm: 22.1,
      notaDois: 23,
      notaTres: 20,
      notaQuatro: 12,
      notaFinal: 77.1,
    },
    {
      id: 7,
      nome: 'Andre de Teste de sobrenome',
      notaUm: 22.1,
      notaDois: 23,
      notaTres: 20,
      notaQuatro: 12,
      notaFinal: 77.1,
    },
    {
      id: 8,
      nome: 'Leticia com sobrenome',
      notaUm: 22.1,
      notaDois: 23,
      notaTres: 20,
      notaQuatro: 12,
      notaFinal: 77.1,
    },
    {
      id: 9,
      nome: 'Sara sobrenome',
      notaUm: 22.1,
      notaDois: 23,
      notaTres: 20,
      notaQuatro: 12,
      notaFinal: 77.1,
    },
    {
      id: 10,
      nome: 'Marcos',
      notaUm: 22.1,
      notaDois: 23,
      notaTres: 20,
      notaQuatro: 12,
      notaFinal: 77.1,
    },
    {
      id: 11,
      nome: 'Jose',
      notaUm: 22.1,
      notaDois: 23,
      notaTres: 20,
      notaQuatro: 12,
      notaFinal: 77.1,
    },
    {
      id: 12,
      nome: 'Cristiano',
      notaUm: 22.1,
      notaDois: 23,
      notaTres: 20,
      notaQuatro: 12,
      notaFinal: 77.1,
    },
    {
      id: 13,
      nome: 'Suzana',
      notaUm: 22.1,
      notaDois: 23,
      notaTres: 20,
      notaQuatro: 12,
      notaFinal: 77.1,
    },
    {
      id: 14,
      nome: 'Kevin',
      notaUm: 22.1,
      notaDois: 23,
      notaTres: 20,
      notaQuatro: 12,
      notaFinal: 77.1,
    },
    {
      id: 15,
      nome: 'Marina',
      notaUm: 22.1,
      notaDois: 23,
      notaTres: 20,
      notaQuatro: 12,
      notaFinal: 77.1,
    },
    {
      id: 16,
      nome: 'Yuri',
      notaUm: 22.1,
      notaDois: 23,
      notaTres: 20,
      notaQuatro: 12,
      notaFinal: 77.1,
    },
    {
      id: 17,
      nome: 'Cesar',
      notaUm: 22.1,
      notaDois: 23,
      notaTres: 20,
      notaQuatro: 12,
      notaFinal: 77.1,
    },
    {
      id: 18,
      nome: 'Bryan',
      notaUm: 22.1,
      notaDois: 23,
      notaTres: 20,
      notaQuatro: 12,
      notaFinal: 77.1,
    },
    {
      id: 19,
      nome: 'Roberto',
      notaUm: 22.1,
      notaDois: 23,
      notaTres: 20,
      notaQuatro: 12,
      notaFinal: 77.1,
    },
    {
      id: 20,
      nome: 'Lucas',
      notaUm: 22.1,
      notaDois: 23,
      notaTres: 20,
      notaQuatro: 12,
      notaFinal: 77.1,
    },
  ];

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
    return this.customers
      ? this.first === this.customers.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.customers ? this.first === 0 : true;
  }

  onRowEditInit(aluno: AlunoModel) {
    console.log('ALUNO:', aluno);
    // this.customers[aluno.id] = { ...aluno };
  }

  onRowEditSave(aluno: AlunoModel) {
    if (aluno.id > 0 && aluno != undefined) {
      console.log(aluno);
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Atualizado com Sucesso!',
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Invalid Price',
      });
    }
  }

  onRowEditCancel(aluno: AlunoModel, index: number) {}
}
