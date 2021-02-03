import { Component } from '@angular/core';
import { RestService } from '../../services/rest.service';

import {Noticia } from '../../interfaces/Noticias';
import { Cicle } from '../../interfaces/Ciclos';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  noticias:Noticia[] = [];
  ciclos: Cicle[] = [];
  is_filtered: boolean=true;
  constructor(public restService: RestService) {
  }

  ionViewWillEnter(){
    this.restService.getArticles()
    .then(data => {
      
      this.noticias = data.data.filter(noticia => noticia.cicle_id == 3);
      console.log(this.noticias);
      // this.noticias = data.data.filter(noticia => noticia.cicle_id == this.restService.User.data.cicle_id);
      console.log(this.noticias);
    });
    this.restService.getCicles()
    .then(data => {
      
      this.ciclos = data.data;
      console.log('ciclos',this.ciclos);
    });
  }

  


  filtro(event){
    this.noticias=this.restService.noticias.data;
    if(this.is_filtered){
      this.noticias = this.noticias.filter(noticia => noticia.cicle_id == 3);
    }
  }
}
