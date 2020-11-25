import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { forbiddenNameValidator } from '../utils/forbiddenNameValidator';

@Directive({
  selector: '[appForbiddenName]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenNameValidatorDirective, multi: true }]
})
export class ForbiddenNameValidatorDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } | null {
    return forbiddenNameValidator(control);
  }
}
