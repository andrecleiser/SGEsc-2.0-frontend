import { MotivosMatricula } from 'src/app/model/tabelas/motivos-matricula';

import { Endereco } from '../geral/endereco';
import { Responsavel } from '../responsavel/responsavel';
import { Telefone } from '../geral/telefone';
import { DoencaPreExistente } from '../tabelas/doenca-pre-existente';

export class Aluno {
    public id: number;
    public nome: string;
    public dataNascimento: Date;
    public endereco: Endereco;
    public telefone: Telefone;
    public responsavel: Responsavel;
    public nomePai: string;
    public nomeMae: string;
    public dataCadastramento: Date;
    public dataInativacao: Date;
    public observacao: string;
    public motivoMatricula: MotivosMatricula;
    public doencaPreExistente: DoencaPreExistente;
    public diaVencimento: number;
}
