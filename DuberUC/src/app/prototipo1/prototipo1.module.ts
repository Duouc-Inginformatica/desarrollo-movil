import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Prototipo1PageRoutingModule } from './prototipo1-routing.module';

import { Prototipo1Page } from './prototipo1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Prototipo1PageRoutingModule
  ],
  declarations: [Prototipo1Page]
})
export class Prototipo1PageModule {}
