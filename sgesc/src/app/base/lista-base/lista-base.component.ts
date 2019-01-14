import { Subscription } from 'rxjs';

import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { AlunoService } from '../../service/aluno.service';

@Component({
  selector: 'sge-lista',
})

export class ListaBaseComponent implements OnDestroy {
  protected $navigation: Subscription;

  constructor(
    public router: Router) {

    this.$navigation = this.router.events.subscribe(evento => {
      if (evento instanceof NavigationEnd) {
        this.acaoAtualizar();
      }
    });
  }

  protected acaoAtualizar(): void { }

  ngOnDestroy(): void {
    this.$navigation.unsubscribe();
  }
}
