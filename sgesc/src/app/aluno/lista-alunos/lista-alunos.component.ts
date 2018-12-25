import { Subscription } from 'rxjs/internal/Subscription';
import { ListaBaseComponent } from 'src/app/base/lista-base/lista-base.component';
import { AlunoResumo } from 'src/app/model/aluno/aluno-resumo';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AlunoService } from '../../service/aluno.service';

@Component({
  selector: 'sge-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css']
})

export class ListaAlunosComponent extends ListaBaseComponent implements OnInit, OnDestroy {

  public resumo: AlunoResumo[];
  public colunasMostradas: string[] = ['nome', 'dataNascimento', 'responsavelNome', 'responsavelCelular'];
  private $parametros: Subscription;
  private pagina: number;
  private nome: string;

  constructor(
    public router: Router,
    private alunoService: AlunoService,
    public route: ActivatedRoute) {

    super(router);
  }

  public ngOnDestroy(): void {
    super.ngOnDestroy();
    this.$parametros.unsubscribe();
  }

  public ngOnInit(): void {
    this.$parametros = this.route.queryParams.subscribe(
      (queryParams: Object) => {
        if (queryParams) {
          if (queryParams['pagina']) {
            this.pagina = queryParams['pagina'];
          }

          if (queryParams['nome']) {
            this.nome = queryParams['nome'];
          }
        }
      }
    );
  }

  protected acaoAtualizar(): void {
    this.alunoService
      .resumir()
      .subscribe(lista => this.resumo = lista);
  }

}
