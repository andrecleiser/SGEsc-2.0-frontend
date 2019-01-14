import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlunoService } from '../../service/aluno.service';

@Component({
  selector: 'sge-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  @Input()
  public nomeEmpresa: string;

  constructor(
    private alunoService: AlunoService,
    private router: Router) { }

  ngOnInit() {
  }

  public listarTodos(): void {
    this.alunoService.navegarRota(0, 5);
  }

  public navegarInicio(): void {
    this.router.navigate(['']);
  }

  public novo(): void {
    this.router.navigate(['alunos/novo']);
  }
}
