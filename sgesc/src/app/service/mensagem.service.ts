import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()

export class MensagemService {

private static TEMPO_SNACK_BAR = 5000;

constructor(
  private snackBar: MatSnackBar) { }

public sucesso(mensagem: string): void {
  this.snackBar.open(mensagem, 'X',
  {
    duration: MensagemService.TEMPO_SNACK_BAR,
    panelClass: 'mensagem-sucesso'
  });
}

public erro(mensagem: string): void {
  this.snackBar.open(mensagem, 'X',
  {
    duration: MensagemService.TEMPO_SNACK_BAR,
    panelClass: 'mensagem-erro'
  });
}

public atencao(mensagem: string): void {
  this.snackBar.open(mensagem, 'X',
  {
    duration: MensagemService.TEMPO_SNACK_BAR,
    panelClass: 'mensagem-atencao'
  });
}

public informe(mensagem: string): void {
  this.snackBar.open(mensagem, 'X',
  {
    duration: MensagemService.TEMPO_SNACK_BAR,
    panelClass: 'mensagem-informe'
  });
}

}
