import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-responsive-update',
  templateUrl: './responsive-split.component.html',
  styleUrls: ['./responsive-split.component.less']
})
export class ResponsiveSplitComponent implements OnInit {
  studentForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      name: new FormControl(''),
      age: new FormControl(''),
      address: new FormGroup({
        province: new FormControl(''),
        city: new FormControl(''),
        district: new FormControl(''),
        description: new FormControl('')
      }),
      families: new FormArray([])
    });

    // this.studentForm = this.fb.group({
    //   name: [''],
    //   age: [''],
    //   address: this.fb.group({
    //     province: [''],
    //     city: [''],
    //     district: [''],
    //     description: ['']
    //   }),
    //   families: this.fb.array([])
    // });
  }

  get familiesFormArray(): FormArray {
    return this.studentForm.get('families') as FormArray;
  }

  get addressFormGroup(): FormGroup {
    return this.studentForm.get('address') as FormGroup;
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
