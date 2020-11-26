import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import get from 'lodash/get';

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
    console.log('basic respControl', this.respControl);
  }

  originValueChange(e: Event): void {
    // console.log((e.target as HTMLInputElement).value);
    this.originValue = get(e, 'target.value', '');
  }

  tempValueChange(value: string): void {
    this.tempValue = value;
  }

  setOriginValue() {
    this.originValue = '1111';
  }

  setRespControlValue() {
    this.respControl.setValue('2222');
  }

  setTempValue() {
    this.tempValue = '3333';
  }
}
