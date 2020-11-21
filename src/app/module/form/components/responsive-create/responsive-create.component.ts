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
    });
  }

  onSubmitStudentInfo(): void {
    alert('学生信息： ' + JSON.stringify(this.studentForm.value));
  }
}
