import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestaoProfessoresComponent } from './gestao-professores.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: GestaoProfessoresComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestaoProfessoresRoutingModule {}
