import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mconductor1Page } from './mconductor1.page';

const routes: Routes = [
  {
    path: '',
    component: Mconductor1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mconductor1PageRoutingModule {}
