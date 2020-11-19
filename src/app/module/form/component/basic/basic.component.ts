import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.less']
})
export class BasicComponent implements OnInit {
  respControl: FormControl;
  tempValue = '';

  constructor() {}

  ngOnInit(): void {
    this.respControl = new FormControl('');
  }

  tempValueChange(value: string): void {
    this.tempValue = value;
  }

}
