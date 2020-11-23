import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { BasicComponent } from './components/basic/basic.component';
import { FormRoutingModule } from './form-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResponsiveCreateComponent } from './components/responsive-create/responsive-create.component';
import { ResponsiveSplitComponent } from './components/responsive-split/responsive-split.component';
import { ResponsiveDynamicCreateComponent } from './components/responsive-dynamic-create/responsive-dynamic-create.component';
import { ResponsiveValidateComponent } from './components/responsive-validate/responsive-validate.component';

@NgModule({
  declarations: [
    FormComponent,
    BasicComponent,
    ResponsiveCreateComponent,
    ResponsiveSplitComponent,
    ResponsiveDynamicCreateComponent,
    ResponsiveValidateComponent
  ],
  imports: [CommonModule, FormRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [FormComponent]
})
export class FormModule {}
