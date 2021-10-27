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
  {
    path: 'gestao-professores',
    loadChildren: () =>
      import(
        './modules/pages/gestao-professores/gestao-professores.module'
      ).then((m) => m.GestaoProfessoresModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
