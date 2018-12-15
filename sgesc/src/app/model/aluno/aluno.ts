import { Endereco } from '../geral/endereco';
import { Telefone } from '../geral/telefone';
import { Responsavel } from '../geral/responsavel';
import { MotivoMatriculaEnum } from 'src/app/enum/motivo-matricula.enum';
import { DoencaPreExistenteEnum } from 'src/app/enum/doenca-pre-exixtente.enum';

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
    public motivoMatricula: MotivoMatriculaEnum;
    public doencaPreExistente: DoencaPreExistenteEnum;
    public diaVencimento: number;
}
