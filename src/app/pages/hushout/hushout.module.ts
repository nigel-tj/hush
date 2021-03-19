import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HushoutPageRoutingModule } from './hushout-routing.module';

import { HushoutPage } from './hushout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HushoutPageRoutingModule
  ],
  declarations: [HushoutPage]
})
export class HushoutPageModule {}
