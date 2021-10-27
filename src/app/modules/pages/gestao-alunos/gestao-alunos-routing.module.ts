import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestaoAlunosComponent } from './gestao-alunos.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: GestaoAlunosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestaoAlunosRoutingModule {}
