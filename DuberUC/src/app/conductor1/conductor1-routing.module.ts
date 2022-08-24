import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Conductor1Page } from './conductor1.page';

const routes: Routes = [
  {
    path: '',
    component: Conductor1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Conductor1PageRoutingModule {}
