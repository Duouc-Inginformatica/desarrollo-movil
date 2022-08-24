import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MconductorPage } from './mconductor.page';

const routes: Routes = [
  {
    path: '',
    component: MconductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MconductorPageRoutingModule {}
