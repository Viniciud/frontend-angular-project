import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar.component';

import { MenubarModule } from 'primeng/menubar';

import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, MenubarModule, InputTextModule, RouterModule],
  exports: [MenuBarComponent],
  declarations: [MenuBarComponent],
})
export class MenuBarModule {}
