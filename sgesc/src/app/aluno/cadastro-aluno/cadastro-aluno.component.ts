import { ValidadorGeralUtil } from './../../utils/validador-geral.util';
import { DoencaPreExistente } from 'src/app/model/tabelas/doenca-pre-existente';
import { MotivosMatricula } from 'src/app/model/tabelas/motivos-matricula';

import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TabelaService } from '../../service/tabelas.service';

@Component({
  selector: 'sge-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {
  public campoTeste: string;
  public lista_motivos: MotivosMatricula[];
  public lista_doencas: DoencaPreExistente[];

  public formCadastro: FormGroup;

  constructor(
    private fb: FormBuilder,
    private tabelaService: TabelaService
  ) {
    this.criarFormulario();
  }

  ngOnInit(): void {
    this.tabelaService.listarDoencasPreExistentes().subscribe(lista => this.lista_doencas = lista);
    this.tabelaService.listarMotivosMatricula().subscribe(lista => this.lista_motivos = lista);
  }

  /** Métodos get dos campos do formulário - INÍCIO */
  public get nomeAluno(): AbstractControl {
    return this.obterCampoFormulario('nome_aluno');
  }

  public get dataNascimento(): AbstractControl {
    return this.obterCampoFormulario('data_nascimento');
  }

  private obterCampoFormulario(nomeCampo: string): AbstractControl {
    return this.formCadastro.get(nomeCampo);
  }

  /** Métodos get dos campos do formulário - FIM */

  /** Métodos PRIVADOS */
  private criarFormulario() {
    this.formCadastro = this.fb.group({
      nome_aluno: this.fb.control('', [
        Validators.minLength(10), Validators.maxLength(70), Validators.required
      ]),
      data_nascimento: this.fb.control('', [Validators.required, ValidadorGeralUtil.naoPodeDataFutura]),
      nome_pai: this.fb.control('', [Validators.min(10), Validators.max(70)]),
      nome_mae: this.fb.control(''),
      data_inativacao: this.fb.control(''),
      observacao: this.fb.control(''),
      cd_motivo_matricula: this.fb.control('', [Validators.required]),
      cd_doenca_pre_existente: this.fb.control('', [Validators.required]),
      dia_vencimento: this.fb.control(''),
      resp_nome: this.fb.control('', Validators.compose([
        Validators.min(10), Validators.max(70), Validators.required
      ])),
      resp_email: this.fb.control('', [
        Validators.min(10), Validators.max(40), Validators.required
      ]),
      resp_cpf: this.fb.control('', [Validators.required]),
      resp_rg: this.fb.control(''),
      resp_telefone: this.fb.control(''),
      resp_celular: this.fb.control('', [Validators.required])
    });
  }
}
