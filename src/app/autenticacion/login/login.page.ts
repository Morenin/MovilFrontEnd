import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user= new FormControl('');
  password = new FormControl('');
  datos: any;
  imagen ="assets/icon/User.jpg";
  usuarios: any[];
  constructor(public restService: RestService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.restService.login(this.user.value, this.password.value)
    .then(data => {
      this.datos = data.data;

      if(this.datos.id!=null){
        this.restService.getUsuarios()
        .then(data =>{
            this.usuarios = data.data;

            this.filtro();
  
        if(this.usuarios[0].type=='client'){
          this.router.navigate(['alumno/tabs/tab1']);
        }
        else{
          this.router.navigate(['admin/tabs/tab1']);
        }
        });
  
      }
    });
    
  }


  filtro(){
      this.usuarios = this.usuarios.filter(usuario => usuario.id == this.datos.id);
    
  }

}
