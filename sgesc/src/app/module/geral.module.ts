import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AlunoService } from '../service/aluno.service';
import { MensagemService } from '../service/mensagem.service';
import { RippleGlobalOptions, MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';

const globalRippleConfig: RippleGlobalOptions = {
    disabled: false,
    animation: {
      enterDuration: 300,
      exitDuration: 1
    }
  };

@NgModule({
    imports: [MatTooltipModule],
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
                MensagemService /*,
                { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig } */
            ]
        };
    }
}
