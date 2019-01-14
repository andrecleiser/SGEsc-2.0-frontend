import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'sge-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {
  public campoTeste: string;
  public lista_motivos = [
    { id: 1, descricao: 'motivo 1' },
    { id: 2, descricao: 'motivo 2' },
    { id: 3, descricao: 'motivo 3' },
  ];
  public lista_doencas = [
    { id: 1, descricao: 'doença 1' },
    { id: 2, descricao: 'doença 2' },
    { id: 3, descricao: 'doença 3' },
  ];

  public formCadastro: FormGroup;

  /*
  nome varchar(70) NOT NULL,
  data_nascimento date NOT NULL,
  nome_pai varchar(70),
  nome_mae varchar(70),
  data_cadastramento date NOT NULL DEFAULT CURRENT_DATE,
  data_inativacao date,
  observacao varchar(200),
  cd_motivo_matricula integer NOT NULL,
  cd_doenca_pre_existente integer NOT NULL,
  dia_vencimento numeric(2) NOT NULL

  fk_endereco_id integer,
  fk_telefone_id integer,
  fk_responsavel_id integer*/

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formCadastro = this.fb.group({
      campoTeste: [this.fb.control(this.campoTeste)]
    });
  }

}
