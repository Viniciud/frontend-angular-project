import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaLoginComponent } from './tela-login.component';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TelaLoginRoutingModule } from './tela-login.-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    TelaLoginRoutingModule,
    ButtonModule,
  ],
  exports: [TelaLoginComponent],
  declarations: [TelaLoginComponent],
})
export class TelaLoginModule {}
