import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-validate',
  templateUrl: './template-validate.component.html',
  styleUrls: ['./template-validate.component.less']
})
export class TemplateValidateComponent implements OnInit {
  student = {
    name: '',
    age: ''
  };

  constructor() {}

  ngOnInit(): void {}

  onSubmitStudentInfo(): void {
    alert('学生信息： ' + JSON.stringify(this.student));
  }
}
