import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'form',
    loadChildren: () => import('./module/form/form.module').then(m => m.FormModule),
    data: { preload: true }
  },
  {
    path: '',
    redirectTo: '/form',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
