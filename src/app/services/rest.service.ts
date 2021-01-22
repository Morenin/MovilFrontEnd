import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestService {
  apiUrl = 'https://allsites.es/sales_in_api/public/api';
  token: any;
  constructor(private http: HttpClient) { }
  getCiclos(tok: any) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/cicles', {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok.success.token),
      })
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }
  login() {
    return new Promise(resolve => {
      this.http.post(this.apiUrl + '/login',
        {
          email: 'fran@gmail.com',
          password: '123456'
        })
        .subscribe(data => {
          this.token = data;
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }
}
