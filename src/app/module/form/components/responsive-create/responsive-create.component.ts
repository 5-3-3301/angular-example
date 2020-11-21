import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-responsive-create',
  templateUrl: './responsive-create.component.html',
  styleUrls: ['./responsive-create.component.less']
})
export class ResponsiveCreateComponent implements OnInit {
  studentForm: FormGroup;
  studentsForm: FormArray;

  constructor() {}

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      name: new FormControl(''),
      age: new FormControl(),
      grads: new FormGroup({
        chinese: new FormControl(),
        math: new FormControl(),
        english: new FormControl()
      })
    });
  }

  onSubmitStudentInfo(): void {
    alert('学生信息： ' + JSON.stringify(this.studentForm.value));
  }
}
