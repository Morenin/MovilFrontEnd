import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cicle } from 'src/app/interfaces/Ciclos';
import { RestService } from '../../services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  name= new FormControl('');
  surname = new FormControl('');
  email= new FormControl('');
  password = new FormControl('');
  c_password= new FormControl('');
  ciclo_id = new FormControl('');
  cicles: Cicle[] = [];
  imagen ="assets/icon/User.jpg";
  datos: any;
  constructor(public restService: RestService, public router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.restService.getCicles()
    .then(data => {
      this.cicles = data.data; 
    });
  }


  evento(){
    console.log(this.ciclo_id.value);
  }

  registro(){
    this.restService.registrar(this.email.value, this.password.value,this.c_password.value,this.name.value,this.surname.value,this.ciclo_id.value)
    .then(data => {
      this.datos = data.data;

      if(this.datos.name!=null){
        this.router.navigate(['']);
      }
    });
  }
}
