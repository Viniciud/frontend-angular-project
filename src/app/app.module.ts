import { NgModule } from '@angular/core';
import { MenuBarModule } from './modules/components/menu-bar/menu-bar.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    FieldsetModule,
    BrowserAnimationsModule,
    MenuBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
