import { Component } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Oferta } from '../../interfaces/Ofertas';
import { Cicle } from '../../interfaces/Ciclos';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  ofertas: Oferta[] = [];
  ciclos: Cicle[] = [];
  
  constructor(public restService: RestService) {}

  ionViewWillEnter(){
    this.restService.getOffersApplied()
    .then(data => {
      console.log('ofertas ',data);
      this.ofertas = data.data; 
    });
    this.restService.getCicles()
    .then(data => {
      
      this.ciclos = data.data;
      console.log('ciclos',this.ciclos);
    });
  }

}
