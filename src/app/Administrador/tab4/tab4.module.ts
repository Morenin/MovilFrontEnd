import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab4PageRoutingModule } from './tab4-routing.module';
import { ChartsModule } from 'ng2-charts';
import { Tab4Page } from './tab4.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab4PageRoutingModule,
    ChartsModule,
    ComponentsModule,
  ],
  declarations: [Tab4Page]
})
export class Tab4PageModule {}
