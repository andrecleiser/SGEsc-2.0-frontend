import { AlunoResumo } from 'src/app/model/aluno/aluno-resumo';

import { Component, OnInit } from '@angular/core';

import { AlunoService } from '../../service/aluno.service';

@Component({
  selector: 'sge-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css']
})
export class ListaAlunosComponent implements OnInit {

  public displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  public resumo: AlunoResumo[];
  public colunasMostradas: string[] = ['nome', 'dataNascimento', 'responsavelNome', 'responsavelCelular'];

  constructor(
    private alunoService: AlunoService) { }

  ngOnInit() {
    this.alunoService
      .resumir()
      .subscribe(lista => this.resumo = lista);
  }
}
