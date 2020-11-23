import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-responsive-update',
  templateUrl: './responsive-split.component.html',
  styleUrls: ['./responsive-split.component.less']
})
export class ResponsiveSplitComponent implements OnInit {
  studentForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      name: new FormControl(''),
      age: new FormControl(''),
      grads: new FormGroup({
        chinese: new FormControl(''),
        math: new FormControl(''),
        english: new FormControl('')
      }),
      address: new FormGroup({
        province: new FormControl(''),
        city: new FormControl(''),
        district: new FormControl(''),
        description: new FormControl('')
      }),
      families: new FormArray([])
    });
  }

  get familiesFormArray(): FormArray {
    return this.studentForm.get('families') as FormArray;
  }

  track(item: any, index: number) {
    return index;
  }

  addFamilyMember() {
    this.familiesFormArray.push(
      new FormGroup({
        name: new FormControl(''),
        phone: new FormControl(''),
        relation: new FormControl('')
      })
    );
  }

  removeFamilyMember(index: number) {
    this.familiesFormArray.removeAt(index);
  }

  onSubmitStudentInfo(): void {
    alert('学生信息： ' + JSON.stringify(this.studentForm.value));
  }
}
