import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaAlunosComponent } from './aluno/lista-alunos/lista-alunos.component';

const routes: Routes = [
  {
    path: 'alunos',
    component: ListaAlunosComponent,
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
