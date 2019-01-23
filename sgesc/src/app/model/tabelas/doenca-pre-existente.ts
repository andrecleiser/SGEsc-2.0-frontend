import { TabelaGeral } from 'src/app/interfaces/tabela-geral';

export class DoencaPreExistente extends TabelaGeral {

    constructor(id: number, descricao: string) {
        super();
        this.id = id;
        this.descricao = descricao;
    }

}
