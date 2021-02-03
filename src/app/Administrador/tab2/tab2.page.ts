import { Component } from '@angular/core';
import { RestService } from '../../services/rest.service';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { Oferta } from 'src/app/interfaces/Ofertas';
import { User } from 'src/app/interfaces/Usuarios';



pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  pdfObj: any;
  ofertas: any;
  usuarios:any;
  ofers:Oferta[];
  user:User[];
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
  generarPDFoferta(ofer){
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
  generarPDFusuarios(user,offer){
    this.user=user;
    this.ofers=offer;
    console.log(this.user);
    console.log(this.ofers);
    var body=this.pdfusuarios();
    console.log(body);
    let docDefinition={
      content:[
        {table: {
          body: body,
        }}
    ]  
  };
    this.pdfObj=pdfMake.createPdf(docDefinition);
    // this.pdfObj.download();
  }
  pdfusuarios(){
    var headers={
      
      top:{
        col_1:{text:"Nombre" , alignment: 'center'},
        col_2:{text:"Apellido", alignment: 'center'},
        col_3:{text:"Email",alignment:'center'},
        col_4:{text:"Nombre del ciclo",alignment:'center'},
        // col_5:{text:"Oferta",alignment:'center'},
      }
   }
   var rows=this.user;
   
   var body=[];
   for (var key in headers){
     if(headers.hasOwnProperty(key)){
       var header=headers[key];
       var row= new Array();
       row.push(header.col_1);
       row.push(header.col_2);
       row.push(header.col_3);
       row.push(header.col_4);
      //  row.push(header.col_5);
       body.push(row);
     }
   }
    for( var key in rows){
      if(rows.hasOwnProperty(key)){
        var data=rows[key];
        var row=new Array();
        row.push({text: data.name});
        row.push({text: data.surname});
        row.push({text: data.email});
        row.push({text: data.cicle_name});
        var id=data.id;
        this.restService.getOffersApplied(id).then(datax=>{
          this.ofers=datax.data;
          console.log(datax);
        })

        body.push(row);
    }
   }
   return body;
  }
}


