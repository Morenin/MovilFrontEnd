import { Component } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Ciclos } from '../../interfaces/Ciclos';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  ciclos:any;
  token:any;
  constructor(public restService:RestService) {
    this.hacerLogin();
  }

  obtenerCiclos(){
    this.restService.getCiclos(this.token).then(data=>{
      this.ciclos=data;
      console.log(this.ciclos)
    });
  }
  hacerLogin(){
    this.restService.login().then(data=>{this.token=data;});
  }
}
