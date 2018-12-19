import { Subscription } from 'rxjs';

import { Component, OnDestroy } from '@angular/core';
import { AlunoService } from 'src/app/service/aluno.service';
import { Router, NavigationEnd } from '@angular/router';

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

  protected acaoAtualizar(): void {}

  ngOnDestroy(): void {
    this.$navigation.unsubscribe();
  }
}
