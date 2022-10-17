import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mpasajero2Page } from './mpasajero2.page';

const routes: Routes = [
  {
    path: '',
    component: Mpasajero2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mpasajero2PageRoutingModule {}
