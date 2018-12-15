import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Aluno } from '../model/aluno/aluno';
import { AlunoResumo } from '../model/aluno/aluno-resumo';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private http: HttpClient) { }

  public listar(): Observable<Aluno[]> {
    return this.http
      .get<Aluno[]>(`${environment.endpoints.backend}/alunos`)
      .pipe(
        tap((aluno: Aluno[]) => console.log(aluno))
      );
  }

  public resumir(): Observable<AlunoResumo[]> {
    return this.http
      .get<AlunoResumo[]>(`${environment.endpoints.backend}/alunos?resumo`)
      .pipe(
        tap((aluno: AlunoResumo[]) => console.log(aluno))
      );
  }
}
