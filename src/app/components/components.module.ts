import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { OfertasComponent } from './ofertas/ofertas.component';
import { OfertaComponent } from './oferta/oferta.component';


@NgModule({
  declarations: [
    NoticiasComponent,
    NoticiaComponent,
    OfertasComponent,
    OfertaComponent
    ,
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [
    NoticiasComponent,
    OfertasComponent,
  ]
})
export class ComponentsModule { }
