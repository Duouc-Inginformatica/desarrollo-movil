import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrototipoPageRoutingModule } from './prototipo-routing.module';

import { PrototipoPage } from './prototipo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrototipoPageRoutingModule
  ],
  declarations: [PrototipoPage]
})
export class PrototipoPageModule {}
