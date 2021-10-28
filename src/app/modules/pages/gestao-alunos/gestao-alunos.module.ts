import { ToastModule } from 'primeng/toast';
import { GestaoAlunosComponent } from './gestao-alunos.component';
import { FormularioAlunosModule } from '../../components/formulario-alunos/formulario-alunos.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { GestaoAlunosRoutingModule } from './gestao-alunos-routing.module';
import { GridNotasModule } from '../../components/grid-notas/grid-notas.module';
import { GridAlunosModule } from '../../components/grid-alunos/grid-alunos.module';
import { MenuBarModule } from '../../components/menu-bar/menu-bar.module';
import { RelatorioModule } from '../../components/relatorio/relatorio.module';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    GestaoAlunosRoutingModule,
    FormsModule,
    FormularioAlunosModule,
    GridNotasModule,
    GridAlunosModule,
    MenuBarModule,
    RelatorioModule,
    ToastModule,
  ],
  exports: [GestaoAlunosComponent],
  declarations: [GestaoAlunosComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GestaoAlunosModule {}
