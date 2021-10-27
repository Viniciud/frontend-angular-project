import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar.component';

import { MenubarModule } from 'primeng/menubar';

import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [CommonModule, MenubarModule, InputTextModule],
  exports: [MenuBarComponent],
  declarations: [MenuBarComponent],
})
export class MenuBarModule {}
