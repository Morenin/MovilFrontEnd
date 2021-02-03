import { Component } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  usuarios:any;
  constructor(public restService:RestService,public  alertCtrl:AlertController) {
    this.buscarUsuarios();
  }
  buscarUsuarios(){
    this.restService.getUsuarios().then(data=>{
      this.usuarios=data;
      console.log(this.usuarios)
    });
  }
  async activarUsuario(id){
    this.restService.activarusuario(id);
    let alert =this.alertCtrl.create({
      header: 'Usuario activado correctamente',
      buttons: ['Aceptar']
    });
    (await alert).present();
  }
}
