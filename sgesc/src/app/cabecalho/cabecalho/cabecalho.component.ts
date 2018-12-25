import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sge-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  @Input()
  public nomeEmpresa: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public listarTodos(): void {
    this.router.navigate(['alunos'], { queryParams: {'resumo': 'basico', 'page': 1, 'size': 3} });
  }
}
