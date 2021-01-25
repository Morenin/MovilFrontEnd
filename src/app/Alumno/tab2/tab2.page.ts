import { Component } from '@angular/core';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
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
