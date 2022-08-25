import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Prototipo1Page } from './prototipo1.page';

const routes: Routes = [
  {
    path: '',
    component: Prototipo1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Prototipo1PageRoutingModule {}
