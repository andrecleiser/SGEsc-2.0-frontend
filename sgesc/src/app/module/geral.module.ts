import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AlunoService } from '../service/aluno.service';
import { MensagemService } from '../service/mensagem.service';
import { TabelaService } from '../service/tabelas.service';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';

@NgModule({
    imports: [],
    exports: [
        MatSnackBarModule,
        MatTooltipModule
    ]
})

export class GeralModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: GeralModule,
            providers: [
                AlunoService,
                MensagemService,
                TabelaService,
                { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
            ]
        };
    }
}
