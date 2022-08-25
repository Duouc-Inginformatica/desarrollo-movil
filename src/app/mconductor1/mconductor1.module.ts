import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mconductor1PageRoutingModule } from './mconductor1-routing.module';

import { Mconductor1Page } from './mconductor1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mconductor1PageRoutingModule
  ],
  declarations: [Mconductor1Page]
})
export class Mconductor1PageModule {}
