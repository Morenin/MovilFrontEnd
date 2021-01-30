import { Component } from '@angular/core';
import { RestService } from '../../services/rest.service';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { Data, } from '../../interfaces/Ofertas';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  pdfObj: any;
  ofertas: any;
  ofers: Data[];
  constructor(public restService:RestService) {
    this.BuscarOfertas();
  }
  
  BuscarOfertas(){
    this.restService.getOffers().then(data=>{
      this.ofertas=data;
      console.log(this.ofertas)
    });
  }
  generarPDF(ofer){
    console.log(ofer);
    this.ofers=ofer;
    console.log(this.ofers);
    
    let docDefinition={
      content:[
        {table: {
          body:[
          ['Nombre de la oferta', 'Ciclo que pertenece', 'Numero de candidatos'],
          this.ofers.forEach(x => {
            if( typeof(x) !== "undefined" && x !== null){
            [x.headline,x.cicle_name,x.num_candidates]
          }})
        ]
      }}
    ]
  }
    this.pdfObj=pdfMake.createPdf(docDefinition)
    this.pdfObj.download();
  
  }
}

