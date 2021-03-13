import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class InputValidacionesService {
  /**
   * Si el campo tiene valores invalidos retorna false ( Esto sirve para
   * bootstrap
   *
   * @param {AbstractControl} campo El campo que se quiere comprobar
   * @returns {boolean}
   * @memberof InputValidacionesService
   */
  invalid(campo: AbstractControl): boolean {
    return campo.touched && campo.invalid;
  }

  /**
   *
   * Si el campo tiene valores validos retorna true
   *
   * @param {AbstractControl} campo El campo que se quiere comprobar
   * @returns {boolean}
   * @memberof InputValidacionesService
   */
  valid(campo: AbstractControl): boolean {
    return campo.touched && campo.valid;
  }

  /**
   *Valida una url
   *
   * @param {AbstractControl} campo
   * @returns {*}
   * @memberof InputValidacionesService
   */
  urlValidator(campo: AbstractControl, mensaje = 'La url no es valida'): any {
    if (campo.pristine) {
      return null;
    }
    // tslint:disable-next-line:max-line-length
    const URL_REGEXP = /^(http?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
    campo.markAsTouched();
    if (URL_REGEXP.test(campo.value)) {
      return null;
    }
    return {
      invalidUrl: true,
      url: campo.value,
      mensaje,
    };
  }

  /**
   *Valida que dos campos llamados password y confirm coincidan.
   *
   * @param {FormGroup} group El formulario completo
   * @returns {*}
   * @memberof InputValidacionesService
   */
  matchPassword(
    group: FormGroup,
    mensaje = 'Las contraseñas no coinciden'
  ): any {
    const password = group.controls.password;
    const confirm = group.controls.confirm;
    if (password.pristine || confirm.pristine) {
      return null;
    }
    group.markAsTouched();
    if (password.value === confirm.value) {
      return null;
    }
    return {
      invalidPassword: true,
      mensaje,
    };
  }

  numberValidator(
    campo: AbstractControl,
    mensaje = 'No es un numero valido'
  ): any {
    if (campo.pristine) {
      return null;
    }
    const NUMBER_REGEXP = /^\-?[0-9]+(?:\.[0-9]+)?$/;
    campo.markAsTouched();

    if (NUMBER_REGEXP.test(campo.value)) {
      return null;
    }

    return {
      invalidNumber: true,
      mensaje,
    };
  }

  /**
 *Valida que solo sean numeros. No lo debes de llamar
 como funcion, si no como un tipo callback. 
 *
 * @param {*} campo
 * @returns {*}
 * @memberof ValidacionesService
 */
  onlyIntegers(
    campo: AbstractControl,
    mensaje = 'Solo se permiten números enteteros'
  ): any {
    if (campo.pristine) {
      return null;
    }
    campo.markAsTouched();
    const INTEGERS_REGEXP = /^[0-9]+$/;

    if (INTEGERS_REGEXP.test(campo.value)) {
      return null;
    }

    return { notInteger: true, mensaje };
  }
  ssnValidator(ssn): any {
    if (ssn.pristine) {
      return null;
    }
    const SSN_REGEXP = /^(?!219-09-9999|078-05-1120)(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4}$/;
    ssn.markAsTouched();
    if (SSN_REGEXP.test(ssn.value)) {
      return null;
    }
    return {
      invalidSsn: true,
    };
  }
  // Validates US phone numbers
  phoneValidator(number): any {
    if (number.pristine) {
      return null;
    }
    const PHONE_REGEXP = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
    number.markAsTouched();
    if (PHONE_REGEXP.test(number.value)) {
      return null;
    }

    return {
      invalidNumber: true,
    };
  }
  // Validates zip codes
  zipCodeValidator(zip): any {
    if (zip.pristine) {
      return null;
    }
    const ZIP_REGEXP = /^[0-9]{5}(?:-[0-9]{4})?$/;
    zip.markAsTouched();
    if (ZIP_REGEXP.test(zip.value)) {
      return null;
    }
    return {
      invalidZip: true,
    };
  }

  /**
   *Valida un registro federal del contribuyente Mexicano
   *
   * @param {AbstractControl} campo
   * @param {string} [mensaje='RFC invalido']
   * @returns {*}
   * @memberof InputValidacionesService
   */
  rfc(campo: AbstractControl, mensaje = 'RFC invalido'): any {
    let _rfc_pattern_pm =
      '^(([A-ZÑ&]{3})([0-9]{2})([0][13578]|[1][02])(([0][1-9]|[12][\\d])|[3][01])([A-Z0-9]{3}))|' +
      '(([A-ZÑ&]{3})([0-9]{2})([0][13456789]|[1][012])(([0][1-9]|[12][\\d])|[3][0])([A-Z0-9]{3}))|' +
      '(([A-ZÑ&]{3})([02468][048]|[13579][26])[0][2]([0][1-9]|[12][\\d])([A-Z0-9]{3}))|' +
      '(([A-ZÑ&]{3})([0-9]{2})[0][2]([0][1-9]|[1][0-9]|[2][0-8])([A-Z0-9]{3}))$';
    // patron del RFC, persona fisica
    let _rfc_pattern_pf =
      '^(([A-ZÑ&]{4})([0-9]{2})([0][13578]|[1][02])(([0][1-9]|[12][\\d])|[3][01])([A-Z0-9]{3}))|' +
      '(([A-ZÑ&]{4})([0-9]{2})([0][13456789]|[1][012])(([0][1-9]|[12][\\d])|[3][0])([A-Z0-9]{3}))|' +
      '(([A-ZÑ&]{4})([02468][048]|[13579][26])[0][2]([0][1-9]|[12][\\d])([A-Z0-9]{3}))|' +
      '(([A-ZÑ&]{4})([0-9]{2})[0][2]([0][1-9]|[1][0-9]|[2][0-8])([A-Z0-9]{3}))$';

    let error = { general: { mensaje } };
    if (!campo.value) return null;
    if (
      campo.value.match(_rfc_pattern_pm) ||
      campo.value.match(_rfc_pattern_pf)
    ) {
      let r = campo.value.length;
      if (r > 11 && r < 14) return null;
    }

    return error;
  }

  /**
   *Valida la estructura de una CURP Mexicana
   *
   * @param {AbstractControl} campo
   * @param {string} [mensaje='CURP invalida']
   * @returns
   * @memberof InputValidacionesService
   */
  curp(campo: AbstractControl, mensaje = 'CURP invalida') {
    let curp_pattern = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/;

    let error = { general: { mensaje } };
    if (!campo.value) return null;

    if (campo.value.match(curp_pattern)) {
      if (campo.value.length == 18) return null;
    }

    return error;
  }

  /**
   * Valida el formato de un numero de seguridad social Mexicano (NSS)
   *
   * @param {AbstractControl} campo
   * @param {string} [mensaje='Numero de seguridad no valido']
   * @returns
   * @memberof InputValidacionesService
   */
  nss(campo: AbstractControl, mensaje = 'Numero de seguridad no valido') {
    let NSS_pattern = /^(\d{2})(\d{2})(\d{2})\d{5}$/;

    let error = { general: { mensaje } };
    if (!campo.value) return null;
    if (campo.value.match(NSS_pattern)) {
      if (campo.value.length === 11) return null;
    }

    return error;
  }

  fechaMenorQue(
    campoFecha1: string,
    campoFecha2: string,
    campoValidador: {} = {
      general: {
        mensaje: 'Se han encontrado fechas invalidas',
      },
    }
  ): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
      const date1 = c.get(campoFecha1).value;
      const date2 = c.get(campoFecha2).value;
      if (date1 !== null && date2 !== null && date1 > date2) {
        c.get(campoFecha1).setErrors({
          general: {
            mensaje: 'Esta fecha tiene que ser menor que la de finalizacion',
          },
        });
        c.get(campoFecha2).setErrors({
          general: {
            mensaje: 'Esta fecha tiene que ser mayor que la de inicio',
          },
        });
        return campoValidador;
      }

      c.get(campoFecha1).updateValueAndValidity({ onlySelf: true });
      c.get(campoFecha2).updateValueAndValidity({ onlySelf: true });
      return null;
    };
  }
}
