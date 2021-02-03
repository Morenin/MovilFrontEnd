import { Component } from '@angular/core';
import { RestService } from '../../services/rest.service';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { Data } from 'src/app/interfaces/Ofertas';



pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  pdfObj: any;
  ofertas: any;
  usuarios: any;
  ofers:Data[];
  constructor(public restService:RestService) {
    this.BuscarOfertas();
    this.BuscarUsuario();
  }
  
  BuscarOfertas(){
    this.restService.getOffers().then(data=>{
      this.ofertas=data;
      console.log(this.ofertas)
    });
  }

  BuscarUsuario(){
    this.restService.getUsuarios().then(data=>{
      this.usuarios=data;
      console.log(this.usuarios)
    });
  }
  generarPDF(ofer){
    console.log(ofer);
    this.ofers=ofer;
    console.log(this.ofers);
    var body=this.pdfofertas();
    console.log(body);
    let docDefinition={
      content:[
        {table: {
          body: body,
        }}
    ]  
  };
    this.pdfObj=pdfMake.createPdf(docDefinition);
    this.pdfObj.download();
  }
  pdfofertas(){
    var headers={
       top:{
         col_1:{text:"Oferta" , alignment: 'center'},
         col_2:{text:"Ciclo que pertenece", alignment: 'center'},
         col_3:{text:"Numero de candidatos",alignment:'center'},
       }
    }
    var rows=this.ofers;
    var body=[];
    for (var key in headers){
      if(headers.hasOwnProperty(key)){
        var header=headers[key];
        var row= new Array();
        row.push(header.col_1);
        row.push(header.col_2);
        row.push(header.col_3);
        body.push(row);
      }
    }
    for( var key in rows){
      if(rows.hasOwnProperty(key)){
        var data=rows[key];
        var row=new Array();
        row.push({text: data.headline});
        row.push({text: data.cicle_name});
        row.push({text:data.num_candidates,alignment:'center'});
        body.push(row);
      }
    }
    return body;
  }
  
}

