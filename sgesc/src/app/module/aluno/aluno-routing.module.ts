import { AlunoCanDeactivateGuard } from 'src/app/guard/aluno/aluno-candeactivate.guard';
import { CadastroAlunoComponent } from './../../aluno/cadastro-aluno/cadastro-aluno.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaAlunosComponent } from '../../aluno/lista-alunos/lista-alunos.component';

const ROTAS: Routes = [
  {
    path: '',
    component: ListaAlunosComponent,
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  },
  {
    path: 'novo',
    component: CadastroAlunoComponent,
    canDeactivate: [AlunoCanDeactivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROTAS)],
  exports: [RouterModule]
})

export class AlunoRoutingModule { }
