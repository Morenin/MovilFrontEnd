import { Component, OnInit, Input } from '@angular/core';
import { Noticia } from '../../interfaces/Noticias';
import { Cicle } from '../../interfaces/Ciclos';
import { RestService } from '../../services/rest.service';
@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {
  @Input() noticias: Noticia[] = [];
  @Input() ciclos: Cicle[] = [];
  
  constructor(public restService: RestService) {
    }

  ngOnInit() {
    
  }

}
