import { Component, OnInit, Input } from '@angular/core';
import { Oferta } from '../../interfaces/Ofertas';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss'],
})
export class OfertasComponent implements OnInit {
  @Input() ofertas: Oferta[] = [];
  @Input() tipo: boolean; 
  constructor() { }

  ngOnInit() {}


  quitarOferta(offer_id){
    this.ofertas = this.ofertas.filter(oferta => oferta.id != offer_id);
  }
}
