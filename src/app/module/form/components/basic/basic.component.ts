import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.less']
})
export class BasicComponent implements OnInit {
  originValue = '';
  respControl: FormControl;
  tempValue = '';

  constructor() {}

  ngOnInit(): void {
    this.respControl = new FormControl('');
  }

  originValueChange(e: Event): void {
    // this.originValue = e.target.value;
  }

  tempValueChange(value: string): void {
    this.tempValue = value;
  }
}
