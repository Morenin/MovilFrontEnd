import { Component, OnInit, Input } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { Oferta } from '../../interfaces/Ofertas';
import { InfoPage } from '../../Alumno/info/info.page';
import { RestService } from '../../services/rest.service';
import { OfertasComponent } from '../ofertas/ofertas.component';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss'],
})
export class OfertaComponent implements OnInit {
  @Input() oferta:Oferta;
  @Input() tipo: boolean;
  imagen = "/assets/icon/";
  constructor(private routerOutlet: IonRouterOutlet,
    public modalController: ModalController, 
    public restService: RestService, 
    public ofertasComponent:OfertasComponent) 
  { }

  ngOnInit() {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: InfoPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: {
        'oferta':this.oferta
      }
    });
    return await modal.present();
  }

  aplicarOferta(){
    if(this.tipo){
      this.restService.aplicarOferta(this.oferta.id)
      this.ofertasComponent.quitarOferta(this.oferta.id);
    }else{
      this.restService.quitarOfertaAplicada(this.oferta.id)
      this.ofertasComponent.quitarOferta(this.oferta.id);
    }
    
  }

}
