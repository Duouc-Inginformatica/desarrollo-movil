import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrototipoPage } from './prototipo.page';

const routes: Routes = [
  {
    path: '',
    component: PrototipoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrototipoPageRoutingModule {}
