import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaLoginComponent } from './tela-login.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TelaLoginRoutingModule } from './tela-login.-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    TelaLoginRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [TelaLoginComponent],
  declarations: [TelaLoginComponent],
})
export class TelaLoginModule {}
