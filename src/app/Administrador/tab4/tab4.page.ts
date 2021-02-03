
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { RestService } from 'src/app/services/rest.service';
import { Data } from '../../interfaces/Ofertas';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page{
  ofertas:any;
  offer: Data[];
  valor: any;
  cont: number=0;
  constructor(public restService:RestService) {
    this.BuscarOfertas();
   }

  BuscarOfertas() {
    this.restService.getOffers().then(data=>{
      this.ofertas=data;
      console.log(this.ofertas)
      
    });
  }
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [], label:  ''}
  ];
  seleccion(offer){
    console.log(this.valor);
    console.log(offer);
    this.offer=offer;
    for(var x=0;x<this.offer.length;x++){
      if(this.offer[x].cicle_name==this.valor){
        this.cont++;
      }
    }
    console.log(this.cont);
    
    this.barChartData.push({data: [this.cont],label:'ofertas'});
  }

}
