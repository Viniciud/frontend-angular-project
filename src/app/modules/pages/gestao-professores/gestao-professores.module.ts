import { GestaoProfessoresComponent } from './gestao-professores.component';
import { FormularioProfessoresModule } from '../../components/formulario-professores/formulario-professores.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { GestaoProfessoresRoutingModule } from './gestao-professores-routing.module';
import { GridNotasModule } from '../../components/grid-notas/grid-notas.module';
import { GridProfessoresModule } from '../../components/grid-professores/grid-professores.module';
import { MenuBarModule } from '../../components/menu-bar/menu-bar.module';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    GestaoProfessoresRoutingModule,
    FormsModule,
    FormularioProfessoresModule,
    GridNotasModule,
    GridProfessoresModule,
    MenuBarModule,
  ],
  exports: [GestaoProfessoresComponent],
  declarations: [GestaoProfessoresComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GestaoProfessoresModule {}
