import { Component, OnInit } from '@angular/core';
import { dataBase } from 'src/assets/db';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss'],
})
export class RelatorioComponent implements OnInit {
  dados = dataBase;
  data: any;
  data2: any;

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
          label: 'Nota',
          backgroundColor: '#42A5F5',
          data: this.calcMedia(),
        },
      ],
    };
  }
}
