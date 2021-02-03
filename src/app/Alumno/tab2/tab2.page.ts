import { Component } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Oferta } from '../../interfaces/Ofertas';
import { Cicle } from '../../interfaces/Ciclos';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  ofertas: Oferta[] = [];
  ciclos: Cicle[] = [];
  index: number=0;
  constructor(public restService: RestService) {
    
  }

  ionViewWillEnter(){
    this.restService.getOffersNotsApplied()
    .then(data => {
      console.log('ofertas no aplicadas ',data);
      this.ofertas = data.data; 
    });
    this.restService.getCicles()
    .then(data => {
      
      this.ciclos = data.data;
      console.log('ciclos',this.ciclos);
    });
  }

  actualizar(){
    console.log(this.ofertas);
  }
 async obtenerOfertas(){
   this.restService.getOffers()
    .then(data => {
      // console.log(data);
      this.ofertas = data.data; 
      
    });
  }

  obtenerCiclos(){
    this.restService.getCicles()
    .then(data => {
      this.ciclos = data.data;
    });
  }

  filtro(event){
    this.ofertas=this.restService.ofertasNotA.data;
    if(event.detail.value!=0){
      this.ofertas = this.ofertas.filter(oferta => oferta.cicle_id == event.detail.value);
    }
  }
}
