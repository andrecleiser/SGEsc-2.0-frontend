import * as moment from 'moment';

import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ValidadorGeralUtil {

    /**
     * Verifica se a data informada é maior do que a data atual. Retornará erro se for.
     * return: ['dataFutura']: true
     *
     * @param campo: campo usado para receber o valor da data que será validada
     */
    public static naoPodeDataFutura(campo: AbstractControl): ValidationErrors | null {

        const dataCampo = moment(campo.value);

        if (dataCampo.isAfter(moment())) {
            return { datafutura: true };
        }

        return null;
    }

}
