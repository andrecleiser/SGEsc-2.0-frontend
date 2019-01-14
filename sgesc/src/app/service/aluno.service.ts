import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
import { Aluno } from '../model/aluno/aluno';

@Injectable()

export class AlunoService {

  constructor(
    private http: HttpClient,
    private router: Router) { }

  public listar(): Observable<Aluno[]> {
    return this.http
      .get<Aluno[]>(`${environment.endpoints.backend}/alunos`);
  }

  public resumir(): Observable<Object[]> {
    return this.http
      .get<Object[]>(`${environment.endpoints.backend}${this.router.url}`);
  }

  public navegarRota(pagina: number, tamanho: number, nome?: string): void {
    const nomeFiltro = nome ? nome : undefined;

    this.router.navigate(
      ['alunos'],
      { queryParams: {'page': pagina, 'size': tamanho, 'nome': nomeFiltro} }
    );
  }
}
