import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROTAS: Routes = [
  {
    path: 'alunos',
    loadChildren: './module/aluno/aluno.module#AlunoModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROTAS)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
