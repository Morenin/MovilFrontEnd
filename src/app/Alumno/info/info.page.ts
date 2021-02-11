import { DatePipe } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Oferta } from '../../interfaces/Ofertas';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  @Input() oferta: Oferta;
  date=new Date();
  latest_date: any;
  constructor( public datePipe: DatePipe) { }

  ngOnInit() {
    this.latest_date =this.datePipe.transform(this.oferta.date_max, 'dd-MM-yy')
  }


}
