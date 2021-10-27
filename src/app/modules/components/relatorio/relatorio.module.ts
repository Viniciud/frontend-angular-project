import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatorioComponent } from './relatorio.component';

import { MenubarModule } from 'primeng/menubar';
import { ChartModule } from 'primeng/chart';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [CommonModule, MenubarModule, InputTextModule, ChartModule],
  exports: [RelatorioComponent],
  declarations: [RelatorioComponent],
})
export class RelatorioModule {}
