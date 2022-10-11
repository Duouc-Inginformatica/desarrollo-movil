import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mconductor2Page } from './mconductor2.page';

const routes: Routes = [
  {
    path: '',
    component: Mconductor2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mconductor2PageRoutingModule {}
