import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Conductor1PageRoutingModule } from './conductor1-routing.module';

import { Conductor1Page } from './conductor1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Conductor1PageRoutingModule
  ],
  declarations: [Conductor1Page]
})
export class Conductor1PageModule {}
