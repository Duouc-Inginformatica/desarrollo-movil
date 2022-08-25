import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MpasajeroPage } from './mpasajero.page';

const routes: Routes = [
  {
    path: '',
    component: MpasajeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MpasajeroPageRoutingModule {}
