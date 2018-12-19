import { AlunoResumo } from 'src/app/model/aluno/aluno-resumo';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlunoService } from '../../service/aluno.service';
import { ListaBaseComponent } from 'src/app/base/lista-base/lista-base.component';

@Component({
  selector: 'sge-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css']
})

export class ListaAlunosComponent extends ListaBaseComponent {

  public resumo: AlunoResumo[];
  public colunasMostradas: string[] = ['nome', 'dataNascimento', 'responsavelNome', 'responsavelCelular'];

  constructor(
    public router: Router,
    private alunoService: AlunoService) {

    super(router);
  }

  protected acaoAtualizar(): void {
    this.alunoService
    .resumir()
    .subscribe(lista => this.resumo = lista);
  }

}
