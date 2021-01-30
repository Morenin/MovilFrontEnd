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
  constructor(public restService:RestService, public alertCtrl:AlertController) {
    this.buscarOfertas();
  }

  buscarOfertas(){
    this.restService.getOffers().then(data=>{
      this.ofertas=data;
      console.log(this.ofertas)
    });
  }
  borrarSitio(id){
    let alert = this.alertCtrl.create({
      header: 'Confirmar borrado',
      message: '¿Estás seguro de que deseas eliminar este sitio?',
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
           }
        }
      ]
    });
    
  }
  
}
