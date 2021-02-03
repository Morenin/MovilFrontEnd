import { Component, OnInit, Input } from '@angular/core';
import { Oferta } from '../../interfaces/Ofertas';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  @Input() oferta: Oferta;
  constructor() { }

  ngOnInit() {
  }

}
