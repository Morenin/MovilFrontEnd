import { Component } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Oferta } from '../../interfaces/Ofertas';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  ofertas: Oferta[] = [];
  ciclos: any;
  constructor(public restService: RestService) {
    this.obtenerOfertas();
    this.obtenerCiclos();
  }


  obtenerOfertas(){
    this.restService.getOffers()
    .then(data => {
      this.ofertas = data.data; 
    });
  }

  obtenerCiclos(){
    this.restService.getCicles()
    .then(data => {
      this.ciclos = data;
      console.log(this.ciclos);
    });
  }

}
