import { TabelaGeral } from './../../interfaces/tabela-geral';

export class MotivosMatricula extends TabelaGeral {

    constructor(id: number, descricao: string) {
        super();
        this.id = id;
        this.descricao = descricao;
    }

}
