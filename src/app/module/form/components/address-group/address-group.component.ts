import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-group',
  templateUrl: './address-group.component.html',
  styleUrls: ['./address-group.component.less']
})
export class AddressGroupComponent implements OnInit {
  @Input() addressFormGroup: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
