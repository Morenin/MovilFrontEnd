import { Component, OnInit,Input } from '@angular/core';
import { Oferta } from '../../interfaces/Ofertas';
import { Cicle } from '../../interfaces/Ciclos';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss'],
})
export class OfertasComponent implements OnInit {
  @Input() ofertas: any[];
  @Input() ciclos: Cicle[];
  constructor() { }

  ngOnInit() {}

}
