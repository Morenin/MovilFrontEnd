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
  ciclos:any;
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
    this.BuscarCiclos();
   }

  BuscarOfertas() {
    this.restService.getOffers().then(data=>{
      this.ofertas=data;
    });
  }
  BuscarCiclos(){
    this.restService.getCicles().then(data=>{
      this.ciclos=data;
    })
  }
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['seleciona un ciclo'];
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [], label:  ''}
  ];
  seleccion(){
    var d=new Date().getMonth();
    this.offer=this.ofertas.data;
    this.offer.forEach(x=>{
      if(this.valor==x.cicle_name){
        this.fecha.push(x.date_max.split('-'))}});
    this.fecha.forEach(element => {
      this.fechatotal.push(element[1])
    });
    console.log(this.fechatotal);
    for(var y=0;y<this.fechatotal.length;y++){
      this.contarofertas(this.fechatotal[y])
    };
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
      case 'Febrero':
        return this.barChartData=[{data:[this.Septiembre,this.Octubre,this.Noviembre,this.Diciembre,this.Enero,this.Febrero],label:'ofertas creada'}];
      case 'Marzo':
        return this.barChartData=[{data:[this.Octubre,this.Noviembre,this.Diciembre,this.Enero,this.Febrero,this.Marzo],label:'ofertas creada'}];
      case 'Abril':
        return this.barChartData=[{data:[this.Noviembre,this.Diciembre,this.Enero,this.Febrero,this.Marzo,this.Abril],label:'ofertas creada'}];
      case 'Mayo':
        return this.barChartData=[{data:[this.Diciembre,this.Enero,this.Febrero,this.Marzo,this.Abril,this.Mayo],label:'ofertas creada'}];
      case 'Junio':
        return this.barChartData=[{data:[this.Enero,this.Febrero,this.Marzo,this.Abril,this.Mayo,this.Junio],label:'ofertas creada'}];
      case 'Julio':
        return this.barChartData=[{data:[this.Febrero,this.Marzo,this.Abril,this.Mayo,this.Junio,this.Julio],label:'ofertas creada'}];
      case 'Agosto':
        return this.barChartData=[{data:[this.Marzo,this.Abril,this.Mayo,this.Junio,this.Julio,this.Agosto],label:'ofertas creada'}];
      case 'Septiembre':
        return this.barChartData=[{data:[this.Abril,this.Mayo,this.Junio,this.Julio,this.Agosto,this.Septiembre],label:'ofertas creada'}];
      case 'Octubre':
        return this.barChartData=[{data:[this.Mayo,this.Junio,this.Julio,this.Agosto,this.Septiembre,this.Octubre],label:'ofertas creada'}];
      case 'Noviembre':
        return this.barChartData=[{data:[this.Junio,this.Julio,this.Agosto,this.Septiembre,this.Octubre,this.Noviembre],label:'ofertas creada'}];
      case 'Diciembre':
        return this.barChartData=[{data:[this.Julio,this.Agosto,this.Septiembre,this.Octubre,this.Noviembre,this.Diciembre],label:'ofertas creada'}];
      default:
        break;
      }
  }
}
