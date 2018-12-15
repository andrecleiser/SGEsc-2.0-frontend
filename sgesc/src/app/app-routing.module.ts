import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaAlunosComponent } from './aluno/lista-alunos/lista-alunos.component';

const routes: Routes = [
  {
    path: 'alunos',
    component: ListaAlunosComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
