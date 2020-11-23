import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './components/basic/basic.component';
import { ResponsiveCreateComponent } from './components/responsive-create/responsive-create.component';
import { ResponsiveSplitComponent } from './components/responsive-split/responsive-split.component';

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
    path: 'responsive-split',
    component: ResponsiveSplitComponent
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
