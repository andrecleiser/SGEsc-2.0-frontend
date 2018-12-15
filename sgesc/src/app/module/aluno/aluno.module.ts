import { MaterialModule } from './../material-module/materialmodule.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListaAlunosComponent } from '../../aluno/lista-alunos/lista-alunos.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [ListaAlunosComponent]
})

export class AlunoModule { }
