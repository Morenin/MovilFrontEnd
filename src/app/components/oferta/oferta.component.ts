import { Component, OnInit,Input } from '@angular/core';
import { Oferta } from '../../interfaces/Ofertas';
import { Cicle } from '../../interfaces/Ciclos';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss'],
})
export class OfertaComponent implements OnInit {
  @Input() oferta:Oferta;
  @Input() ciclos:Cicle [] = [];
  ciclo:Cicle;
  constructor() { 
    this.ciclo=this.ciclos.find(this.esCiclo);
  }

  ngOnInit() {
  }

  esCiclo(ciclo: Cicle){
    // return ciclo.id === this.oferta.cicle_id;
  }
}
