import { Component, OnInit } from '@angular/core';
import { AlunoModel } from '../../models/aluno.model';

@Component({
  selector: 'app-grid-alunos',
  templateUrl: './grid-alunos.component.html',
  styleUrls: ['./grid-alunos.component.scss'],
})
export class GridAlunosComponent implements OnInit {
  customers: AlunoModel[] = [
    {
      id: 1,
      nome: 'Joao de Teste de sobrenome',
    },
    {
      id: 2,
      nome: 'Maria de Teste de sobrenome',
    },
    {
      id: 3,
      nome: 'Paulo de Teste de sobrenome',
    },
    {
      id: 4,
      nome: 'Pedro de Teste de sobrenome',
    },
    {
      id: 5,
      nome: 'Matheus de Teste de sobrenome',
    },
    {
      id: 6,
      nome: 'Carlos de Teste de sobrenome',
    },
    {
      id: 7,
      nome: 'Andre de Teste de sobrenome',
    },
    {
      id: 8,
      nome: 'Leticia com sobrenome',
    },
    {
      id: 9,
      nome: 'Sara sobrenome',
    },
    {
      id: 10,
      nome: 'Marcos',
    },
    {
      id: 11,
      nome: 'Jose',
    },
    {
      id: 12,
      nome: 'Cristiano',
    },
    {
      id: 13,
      nome: 'Suzana',
    },
    {
      id: 14,
      nome: 'Kevin',
    },
    {
      id: 15,
      nome: 'Marina',
    },
    {
      id: 16,
      nome: 'Yuri',
    },
    {
      id: 17,
      nome: 'Cesar',
    },
    {
      id: 18,
      nome: 'Bryan',
    },
    {
      id: 19,
      nome: 'Roberto',
    },
    {
      id: 20,
      nome: 'Lucas',
    },
  ];

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
    return this.customers
      ? this.first === this.customers.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.customers ? this.first === 0 : true;
  }
}
