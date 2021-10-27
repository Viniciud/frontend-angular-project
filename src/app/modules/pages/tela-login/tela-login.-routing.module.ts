import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaLoginComponent } from './tela-login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TelaLoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaLoginRoutingModule {}
