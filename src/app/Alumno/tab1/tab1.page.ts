import { Component } from '@angular/core';
import { RestService } from '../../services/rest.service';
import {Noticia } from '../../interfaces/Noticias';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  noticias: any;
  constructor(public restService: RestService) {
    this.obtenerNoticias();
  }

  obtenerNoticias(){
    this.restService.getArticles()
    .then(data => {
      this.noticias = data;
      console.log(this.noticias);
    });
  }

}
