import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroVPage } from './registro-v.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroVPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroVPageRoutingModule {}
