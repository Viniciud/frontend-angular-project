import { Component, OnInit } from '@angular/core';
import { dataBase, dataBaseProfessores } from 'src/assets/db';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss'],
})
export class RelatorioComponent implements OnInit {
  access = localStorage.getItem('role');
  dados = dataBase;
  dadosProfs = dataBaseProfessores;
  data: any;
  data2: any;
  data3: any;
  qtdProfessores: number = dataBaseProfessores.length;
  qtdAlunos: number = dataBase.length;
  basicOptions: any;

  constructor() {}

  calcMedia() {
    let dado = [0, 0, 0, 0, 0];
    this.dados.map((item) => {
      if (item.notaUm > 15) {
        dado[0] += 1;
      }
      if (item.notaDois > 15) {
        dado[1] += 1;
      }
      if (item.notaTres > 15) {
        dado[2] += 1;
      }
      if (item.notaQuatro > 15) {
        dado[3] += 1;
      }
      if (item.notaFinal > 60) {
        dado[4] += 1;
      }
    });
    console.log(dado);
    return dado;
  }

  calcMediaNotas() {
    let dado = [0, 0, 0, 0, 0];
    let soma1: number = 0;
    let soma2: number = 0;
    let soma3: number = 0;
    let soma4: number = 0;
    let soma5: number = 0;

    this.dados.map((item) => {
      soma1 += item.notaUm;
      soma2 += item.notaDois;
      soma3 += item.notaTres;
      soma4 += item.notaQuatro;
      soma5 += item.notaFinal;
    });

    dado[0] = soma1 / this.dados.length;
    dado[1] = soma2 / this.dados.length;
    dado[2] = soma3 / this.dados.length;
    dado[3] = soma4 / this.dados.length;
    dado[4] = soma5 / this.dados.length;

    return dado;
  }

  calcQtdProfsDisc() {
    let dado = [0, 0, 0, 0];
    this.dadosProfs.map((item) => {
      if (item.disciplina == 'PORTUGUES') {
        dado[0] += 1;
      } else if (item.disciplina == 'MATEMATICA') {
        dado[1] += 1;
      } else if (item.disciplina == 'HISTORIA') {
        dado[2] += 1;
      } else if (item.disciplina == 'INGLES') {
        dado[3] += 1;
      }
    });
    return dado;
  }

  ngOnInit(): void {
    this.data = {
      labels: [
        '1º Bimestre',
        '2º Bimestre',
        '3º Bimestre',
        '4º Bimestre',
        'Nota Final',
      ],
      datasets: [
        {
          type: 'bar',
          label: 'Alunos',
          backgroundColor: '#42A5F5',
          data: this.calcMedia(),
        },
      ],
    };

    this.data3 = {
      labels: [
        '1º Bimestre',
        '2º Bimestre',
        '3º Bimestre',
        '4º Bimestre',
        'Nota Final',
      ],
      datasets: [
        {
          type: 'line',
          label: 'Média',
          borderColor: '#333',
          borderWidth: 2,
          fill: false,
          data: this.calcMediaNotas(),
        },
      ],
    };

    this.data2 = {
      labels: ['Português', 'Matemática', 'História', 'Inglês'],
      datasets: [
        {
          label: 'Disciplina',
          backgroundColor: '#42A5F5',
          data: this.calcQtdProfsDisc(),
        },
      ],
    };
  }
}
