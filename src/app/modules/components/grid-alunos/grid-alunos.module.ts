import { GridAlunosComponent } from './grid-alunos.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [GridAlunosComponent],
  declarations: [GridAlunosComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GridAlunosModule {}
