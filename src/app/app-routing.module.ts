import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'gestao-alunos',
    loadChildren: () =>
      import('./modules/pages/gestao-alunos/gestao-alunos.module').then(
        (m) => m.GestaoAlunosModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
