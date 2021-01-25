import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { RestService } from '../../services/rest.service';
import { Offers } from '../../interfaces/Offers';







@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  @ViewChild('lista',{static: true}) lista:IonList;
  // ofertas: any[];
  ofertas:any;
  token:any;
  constructor(public restService:RestService) {
    this.hacerLogin();
  }

  ngOnInit(){
    this.restService.getOffers().then(data=>{
      this.ofertas=data;
      console.log(this.ofertas)
    });
    // this.restService.getOffers().subscribe(data=>{
    //   this.ofertas=data.json();
    //   console.log(data);
    // },
    // error=>{
    //   console.log(error);
    // });
    console.log(this.ofertas)
  }
  hacerLogin(){
    this.restService.login().then(data=>{this.token=data;});
  }
  
}
