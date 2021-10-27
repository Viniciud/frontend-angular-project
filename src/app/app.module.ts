import { NgModule } from '@angular/core';
import { MenuBarModule } from './modules/components/menu-bar/menu-bar.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';
import { GridAlunosModule } from './modules/components/grid-alunos/grid-alunos.module';
import { GridNotasModule } from './modules/components/grid-notas/grid-notas.module';
import { FormularioAlunosModule } from './modules/components/formulario-alunos/formulario-alunos.module';
import { CommonModule } from '@angular/common';

import { ChartModule } from 'primeng/chart';
import { RelatorioModule } from './modules/components/relatorio/relatorio.module';
import { TelaLoginModule } from './modules/pages/tela-login/tela-login.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    FieldsetModule,
    BrowserAnimationsModule,
    MenuBarModule,
    GridAlunosModule,
    GridNotasModule,
    FormularioAlunosModule,
    RelatorioModule,
    ChartModule,
    TelaLoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
