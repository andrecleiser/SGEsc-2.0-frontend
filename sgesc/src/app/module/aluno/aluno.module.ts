import { AlunoCanDeactivateGuard } from 'src/app/guard/aluno/aluno-candeactivate.guard';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { CadastroAlunoComponent } from '../../aluno/cadastro-aluno/cadastro-aluno.component';
import { ListaAlunosComponent } from '../../aluno/lista-alunos/lista-alunos.component';
import { ComponentesPadraoModule } from '../material/componentes-padrao.module';
import { AlunoRoutingModule } from './aluno-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,

    ComponentesPadraoModule,

    AlunoRoutingModule
  ],
  exports: [
    ComponentesPadraoModule
  ],
  declarations: [
    ListaAlunosComponent,
    CadastroAlunoComponent
  ],
  providers: [AlunoCanDeactivateGuard]
})

export class AlunoModule { }
