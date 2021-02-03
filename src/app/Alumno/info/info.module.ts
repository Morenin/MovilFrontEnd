import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

import { InfoPageRoutingModule } from './info-routing.module';

import { InfoPage } from './info.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    IonicModule, 
    InfoPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [InfoPage]
})
export class InfoPageModule {}
