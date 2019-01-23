import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DoencaPreExistente } from '../model/tabelas/doenca-pre-existente';
import { MotivosMatricula } from '../model/tabelas/motivos-matricula';

@Injectable()
export class TabelaService {

    private URL_TABELAS = '/tabelas';
    private URL_MOTIVO = '/motivo-matricula';
    private URL_DOENCAS = '/doenca-pre-existente';

    constructor(
        private http: HttpClient
    ) { }

    public listarMotivosMatricula(): Observable<MotivosMatricula[]> {
        return this.http
            .get<MotivosMatricula[]>(`${environment.endpoints.backend}${this.URL_TABELAS}${this.URL_MOTIVO}`)
            .pipe(
                take(1)
            );
    }

    public listarDoencasPreExistentes(): Observable<DoencaPreExistente[]> {
        return this.http
            .get<DoencaPreExistente[]>(`${environment.endpoints.backend}${this.URL_TABELAS}${this.URL_DOENCAS}`)
            .pipe(
                take(1)
            );
    }

}
