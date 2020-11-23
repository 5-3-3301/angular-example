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
  }

  originValueChange(e: Event): void {
    // TODO 为什么直接使用 e.target.value 取不到值，类型？
    this.originValue = get(e, 'target.value', '');
  }

  tempValueChange(value: string): void {
    this.tempValue = value;
  }
}
