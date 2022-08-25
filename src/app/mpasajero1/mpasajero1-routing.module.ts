import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mpasajero1Page } from './mpasajero1.page';

const routes: Routes = [
  {
    path: '',
    component: Mpasajero1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mpasajero1PageRoutingModule {}
