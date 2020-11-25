import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import forEach from 'lodash/forEach';

@Component({
  selector: 'app-responsive-validate',
  templateUrl: './responsive-validate.component.html',
  styleUrls: ['./responsive-validate.component.less']
})
export class ResponsiveValidateComponent implements OnInit {
  studentForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern(/[\u4E00-\u9FA5]/g),
        Validators.minLength(2),
        Validators.maxLength(4)
      ]),
      age: new FormControl('', null, this.ageAsyncValidator)
    });
  }

  get nameControl(): FormControl {
    return this.studentForm.get('name') as FormControl;
  }

  get ageControl(): FormControl {
    return this.studentForm.get('age') as FormControl;
  }

  ageAsyncValidator(control): Promise<ValidationErrors | null> {
    // if (!control.value) {
    //   return of({ required: true });
    // }
    // if (!Number(control.value)) {
    //   return of({ format: true });
    // }
    // if (Number(control.value) < 0 || Number(control.value) > 1000) {
    //   return of({ size: true });
    // }
    // return of(null);

    if (!control.value) {
      return Promise.resolve({ required: true });
    }
    if (!Number(control.value)) {
      return Promise.resolve({ format: true });
    }
    if (Number(control.value) < 0 || Number(control.value) > 1000) {
      return Promise.resolve({ size: true });
    }
    return Promise.resolve(null);
  }

  onSubmitStudentInfo(): void {
    forEach(this.studentForm.controls, control => {
      console.log(1111, control);
      control.markAsPristine();
      control.updateValueAndValidity();
      console.log(2222, control);
    });

    if (this.studentForm.valid) {
      alert('学生信息： ' + JSON.stringify(this.studentForm.value));
    }
  }
}
