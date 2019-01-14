import { CadastroAlunoComponent } from './../../aluno/cadastro-aluno/cadastro-aluno.component';
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AlunoCanDeactivateGuard implements CanDeactivate<CadastroAlunoComponent> {
    canDeactivate(
        component: CadastroAlunoComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return (component.formCadastro.controls['campoTeste'].value === '1');
    }
}
