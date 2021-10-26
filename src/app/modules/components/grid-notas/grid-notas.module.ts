import { GridNotasComponent } from './grid-notas.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
    InputTextModule,
    ToastModule,
  ],
  exports: [GridNotasComponent],
  declarations: [GridNotasComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GridNotasModule {}
