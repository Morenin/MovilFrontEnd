import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() titulo: string;
  data: any;
  
  constructor(public restService: RestService,private router: Router) { }

  ngOnInit() {}

  logout(){
    this.restService.logout()
    .then(data => {
      
      this.data=data;
      this.router.navigate(['']);
      
    });
  }

}
