import { FormularioAlunosComponent } from './formulario-alunos.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    ToastModule,
  ],
  exports: [FormularioAlunosComponent],
  declarations: [FormularioAlunosComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FormularioAlunosModule {}
