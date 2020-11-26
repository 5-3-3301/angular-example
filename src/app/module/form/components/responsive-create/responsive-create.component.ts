import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-responsive-create',
  templateUrl: './responsive-create.component.html',
  styleUrls: ['./responsive-create.component.less']
})
export class ResponsiveCreateComponent implements OnInit {
  studentForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      name: new FormControl(''),
      age: new FormControl('')
      // grads: new FormGroup({
      //   chinese: new FormControl(''),
      //   math: new FormControl(''),
      //   english: new FormControl('')
      // })
    });

    console.log('group name control', this.studentForm.get('name'));
  }

  onSubmitStudentInfo(): void {
    alert('学生信息： ' + JSON.stringify(this.studentForm.value));
  }
}
