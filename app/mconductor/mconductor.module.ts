import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MconductorPageRoutingModule } from './mconductor-routing.module';

import { MconductorPage } from './mconductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MconductorPageRoutingModule
  ],
  declarations: [MconductorPage]
})
export class MconductorPageModule {}
