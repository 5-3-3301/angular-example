import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      // TODO Validators 提供的验证，多个相加会出现同时显示问题，所以这种情况推荐使用自定义验证
      name: new FormControl('', [
        Validators.required,
        Validators.pattern(/[\u4E00-\u9FA5]/g),
        Validators.minLength(2),
        Validators.maxLength(4)
      ]),
      age: new FormControl('')
    });
  }

  get nameControl(): FormControl {
    return this.studentForm.get('name') as FormControl;
  }

  onSubmitStudentInfo(): void {
    forEach(this.studentForm.controls, control => {
      control.markAsPristine();
      control.updateValueAndValidity();
    });

    if (this.studentForm.valid) {
      alert('学生信息： ' + JSON.stringify(this.studentForm.value));
    }
  }
}
