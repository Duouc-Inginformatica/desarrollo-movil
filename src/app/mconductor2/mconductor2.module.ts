import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mconductor2PageRoutingModule } from './mconductor2-routing.module';

import { Mconductor2Page } from './mconductor2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mconductor2PageRoutingModule
  ],
  declarations: [Mconductor2Page]
})
export class Mconductor2PageModule {}
