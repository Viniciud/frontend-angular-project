import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatorioComponent } from './relatorio.component';

import { MenubarModule } from 'primeng/menubar';
import { ChartModule } from 'primeng/chart';
import { InputTextModule } from 'primeng/inputtext';
import { KnobModule } from 'primeng/knob';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    ChartModule,
    KnobModule,
    FormsModule,
  ],
  exports: [RelatorioComponent],
  declarations: [RelatorioComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RelatorioModule {}
