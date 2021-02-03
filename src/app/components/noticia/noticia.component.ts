import { Component, OnInit, Input } from '@angular/core';
import { Noticia } from '../../interfaces/Noticias';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
  @Input() noticia: Noticia;
  imagen = "/assets/icon/";
  esGrande: boolean;
  constructor() { 
  }

  ngOnInit() {
    this.comprobarTamaño(this.noticia);
  }

  comprobarTamaño(noticia: Noticia){
    if(noticia.description.length>100){
      this.esGrande=true;
    }
    else{
      this.esGrande=false;
    }
  }

  cambiar(){
    this.esGrande=!this.esGrande;
  }

}
