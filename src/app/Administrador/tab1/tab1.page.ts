import { Component } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  usuarios:any;
  constructor(public restService:RestService) {
    this.buscarUsuarios();
  }
  buscarUsuarios(){
    this.restService.getUsuarios().then(data=>{
      this.usuarios=data;
      console.log(this.usuarios)
    });
  }
  activarUsuario(id){
    this.restService.activarusuario(id);
  }
}
