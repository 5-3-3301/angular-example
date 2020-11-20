import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './components/basic/basic.component';
import { ResponsiveCreateComponent } from './components/responsive-create/responsive-create.component';

const routes: Routes = [
  {
    path: 'basic',
    component: BasicComponent
  },
  {
    path: 'responsive-create',
    component: ResponsiveCreateComponent
  },
  {
    path: '',
    component: BasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule {}
