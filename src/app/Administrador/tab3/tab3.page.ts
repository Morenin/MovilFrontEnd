import { Component } from '@angular/core';
import { RestService } from '../../services/rest.service';


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
    });
  }
  hacerLogin(){
    this.restService.login().then(data=>{this.token=data;});
  }
}
