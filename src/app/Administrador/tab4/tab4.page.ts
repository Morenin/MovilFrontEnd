import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { RestService } from 'src/app/services/rest.service';
import { Oferta } from '../../interfaces/Ofertas';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page{
  ofertas:any;
  offer: Oferta[];
  prueba:any;
  valor: any;
  cont: number=0;
  fecha:any=[];
  fechatotal:any=[];
  Enero:number=0;
  Febrero:number=0;
  Marzo:number=0;
  Abril:number=0;
  Mayo:number=0;
  Junio:number=0;
  Julio:number=0;
  Agosto:number=0;
  Septiembre:number=0;
  Octubre:number=0;
  Noviembre:number=0;
  Diciembre:number=0;
  constructor(public restService:RestService) {
    this.BuscarOfertas();
   }

  BuscarOfertas() {
    this.restService.getOffers().then(data=>{
      this.ofertas=data;
      console.log(this.ofertas);
    });
  }
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [], label:  ''}
  ];
  seleccion(offer){
    // const d=new Date().getMonth();
    var d=4;
    console.log(this.mes(d));
    console.log(this.valor);
    console.log(offer);
    this.offer=offer;
    this.offer.forEach(x=>{
      if(this.valor==x.cicle_name){
        this.fecha.push(x.date_max.split('-'))}});
    console.log(this.fecha) 
    this.fecha.forEach(element => {
      this.fechatotal.push(element[1])
    });
    console.log(this.fechatotal);
    for(var y=0;y<this.fechatotal.length;y++){
      this.contarofertas(this.fechatotal[y])
    }
    console.log(this.Mayo);
    this.barChartLabels=[this.mes(d-5),this.mes(d-4),this.mes(d-3),this.mes(d-2),this.mes(d-1),this.mes(d)];
    this.barChartLegend=true;
    this.hacerGrafica(this.mes(d));
    this.fecha=[];
    this.fechatotal=[];
    this.Enero=0;
    this.Febrero=0;
    this.Marzo=0;
    this.Abril=0;
    this.Mayo=0;
    this.Junio=0;
    this.Julio=0;
    this.Agosto=0;
    this.Septiembre=0;
    this.Octubre=0;
    this.Noviembre=0;
    this.Diciembre=0;
  }
  mes(d){
    if(d==(-1)){
      d=11
    }
    if(d==(-2)){
      d=10
    }
    if(d==(-3)){
      d=9
    }
    if(d==(-4)){
      d=8
    }
    if(d==(-5)){
      d=7
    }
    if(d==(-6)){
      d=6
    }
    switch(d){
      case 0:
        return 'Enero'; 
      case 1:
        return 'Febrero'; 
      case 2:
        return 'Marzo'; 
      case 3:
        return 'Abril'; 
      case 4:
        return 'Mayo'; 
      case 5:
        return 'Junio'; 
      case 6:
        return 'Julio'; 
      case 7:
        return 'Agosto'; 
      case 8:
        return 'Septiembre';
      case 9:
        return 'Octubre';
      case 10:
        return 'Noviembre';
      case 11:
        return 'Diciembre'; 
      default:
        break;   
    } 
  }
  contarofertas(x){
    switch(x){
      case '01':
        this.Enero++;
        break;
      case '02':
        this.Febrero++;
        break;
      case '03':
        this.Marzo++;
        break;
      case '04':
        this.Abril++;
        break;
      case '05':
        this.Mayo++;
        break;
      case '06':
        this.Junio++;
        break;
      case '07':
        this.Julio++;
        break;
      case '08':
        this.Agosto++;
        break;
      case '09':
        this.Septiembre++;
        break;
      case '10':
        this.Octubre++;
        break;
      case '11':
        this.Noviembre++;
        break;
      case '12':
        this.Diciembre++;
        break;
    }
  }
  hacerGrafica(x){

    switch(x){
      case 'Enero':
        return this.barChartData=[{data:[this.Agosto,this.Septiembre,this.Octubre,this.Noviembre,this.Diciembre,this.Enero],label:'oferta'}];
      case 'Febero':
        return this.barChartData=[{data:[this.Septiembre,this.Octubre,this.Noviembre,this.Diciembre,this.Enero,this.Febrero],label:'oferta'}];
      case 'Marzo':
        return this.barChartData=[{data:[this.Octubre,this.Noviembre,this.Diciembre,this.Enero,this.Febrero,this.Marzo],label:'oferta'}];
      case 'Abril':
        return this.barChartData=[{data:[this.Noviembre,this.Diciembre,this.Enero,this.Febrero,this.Marzo,this.Abril],label:'oferta'}];
      case 'Mayo':
        return this.barChartData=[{data:[this.Diciembre,this.Enero,this.Febrero,this.Marzo,this.Abril,this.Mayo],label:'oferta'}];
      case 'Junio':
        return this.barChartData=[{data:[this.Enero,this.Febrero,this.Marzo,this.Abril,this.Mayo,this.Junio],label:'oferta'}];
      case 'Julio':
        return this.barChartData=[{data:[this.Febrero,this.Marzo,this.Abril,this.Mayo,this.Junio,this.Julio],label:'oferta'}];
      case 'Agosto':
        return this.barChartData=[{data:[this.Marzo,this.Abril,this.Mayo,this.Junio,this.Julio,this.Julio],label:'oferta'}];
      case 'Septiembre':
        return this.barChartData=[{data:[this.Abril,this.Mayo,this.Junio,this.Julio,this.Julio,this.Agosto],label:'oferta'}];
      case 'Octubre':
        return this.barChartData=[{data:[this.Mayo,this.Junio,this.Julio,this.Julio,this.Agosto,this.Septiembre],label:'oferta'}];
      case 'Noviembre':
        return this.barChartData=[{data:[this.Junio,this.Julio,this.Julio,this.Agosto,this.Septiembre,this.Noviembre],label:'oferta'}];
      case 'Noviembre':
        return this.barChartData=[{data:[this.Julio,this.Agosto,this.Septiembre,this.Noviembre,this.Diciembre],label:'oferta'}];
      default:
        break;
      }
  }
}
