import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-responsive-dynamic-create',
  templateUrl: './responsive-dynamic-create.component.html',
  styleUrls: ['./responsive-dynamic-create.component.less']
})
export class ResponsiveDynamicCreateComponent implements OnInit {
  studentsForm: FormArray;

  constructor() {}

  ngOnInit(): void {
    this.studentsForm = new FormArray([this.studentGroup]);
  }

  get studentGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl(''),
      age: new FormControl('')
    });
  }

  addStudent() {
    this.studentsForm.push(this.studentGroup);
  }

  removeStudent(index: number) {
    this.studentsForm.removeAt(index);
  }

  onSubmitStudentInfo(): void {
    alert('学生信息： ' + JSON.stringify(this.studentsForm.value));
  }
}
