import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { BasicComponent } from './component/basic/basic.component';
import { FormRoutingModule } from './form-routing.module';



@NgModule({
  declarations: [FormComponent, BasicComponent],
  imports: [
    CommonModule,
    FormRoutingModule
  ],
  exports: [FormComponent]
})
export class FormModule { }
