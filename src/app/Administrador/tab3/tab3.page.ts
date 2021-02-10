import { Component, ViewChild } from '@angular/core';
import { AlertController, IonList } from '@ionic/angular';
import { RestService } from '../../services/rest.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  @ViewChild('lista',{static: true}) lista:IonList;
  ofertas:any;
  is_filtered: boolean=true;
  constructor(public restService:RestService, public alertCtrl:AlertController) {
    this.buscarOfertas();
  }

  buscarOfertas(){
    this.restService.getOffers().then(data=>{
      this.ofertas=data;
    });
  }
  async borrarSitio(id){
    let alert = await this.alertCtrl.create({
      header: 'Confirmar borrado',
      message: '¿Estás seguro de que deseas borrar esta oferta?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Si',
          handler: () => {
            this.restService.borraroferta(id);
            if(this.is_filtered){
              this.ofertas.data = this.ofertas.data.filter(oferta => oferta.id != id);
            }
          }
        }
      ]
    });
    await alert.present();
  }
  
}
