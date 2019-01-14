import { of } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { catchError, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { ListaBaseComponent } from 'src/app/base/lista-base/lista-base.component';
import { AlunoResumo } from 'src/app/model/aluno/aluno-resumo';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

import { AlunoService } from '../../service/aluno.service';
import { MensagemService } from '../../service/mensagem.service';

@Component({
  selector: 'sge-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css']
})

export class ListaAlunosComponent extends ListaBaseComponent implements OnInit, OnDestroy {

  public resumo: AlunoResumo[];
  public colunasMostradas: string[] = ['nome', 'dataNascimento', 'responsavelNome', 'responsavelCelular'];

  public opcoesPagina: number[] = [5, 10];
  public textoFiltro: string;
  public formFiltro: FormGroup;
  public formConteudoFiltro: FormControl;
  private paginaEvento: PageEvent = new PageEvent();

  private $parametros: Subscription;

  constructor(
    public router: Router,
    private alunoService: AlunoService,
    private fb: FormBuilder,
    private mensagem: MensagemService
  ) {

    super(router);
    this.paginaEvento.pageIndex = 0;
    this.paginaEvento.pageSize = 5;
  }

  public ngOnInit(): void {

    this.formConteudoFiltro = this.fb.control('');
    this.formFiltro = this.fb.group({
      conteudoFiltro: this.formConteudoFiltro
    });

    this.formConteudoFiltro
      .valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        tap(texto => this.textoFiltro = `Alunos contendo: ${texto}`)
      )
      .subscribe(nome => {
        if (this.alunoService) {
          this.alunoService.navegarRota(this.paginaEvento.pageIndex, this.paginaEvento.pageSize, nome);
        }
      });
  }

  public ngOnDestroy(): void {
    super.ngOnDestroy();
    if (this.$parametros) {
      this.$parametros.unsubscribe();
    }
  }

  protected acaoAtualizar(): void {
    this.alunoService
      .resumir()
      .pipe(
        tap((objetoPageable: any) => this.paginaEvento.length = objetoPageable.totalElements),
        switchMap((alunoPaginador: any) => of(alunoPaginador.content)),
        catchError((erro: any) => {
          this.mensagem.erro(erro.error[0].mensagemUsuario);
          return of([]);
        })
      )
      .subscribe(lista => this.resumo = lista);
  }

  public paginacao(pagEvento: PageEvent): void {
    this.paginaEvento = pagEvento;
    this.alunoService.navegarRota(this.paginaEvento.pageIndex, this.paginaEvento.pageSize);
  }
}
