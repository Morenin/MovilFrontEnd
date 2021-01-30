import { Component, OnInit, Input } from '@angular/core';
import { Noticia } from '../../interfaces/Noticias';
@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {
  @Input() noticias: Noticia[];
  constructor() {
    }

  ngOnInit() {
    if(this.noticias){
      this.noticias= this.ordenar(this.noticias);
    }
  }

  ordenar = (noticias: Noticia[]) =>
    noticias.sort((noticiaA: Noticia, noticiaB: Noticia)=>
    {
      if(noticiaA > noticiaB) return 1;
      if(noticiaA < noticiaB) return 0;
      return 0
  });

}
