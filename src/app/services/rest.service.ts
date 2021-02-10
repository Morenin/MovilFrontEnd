import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class RestService {
  apiUrl = 'https://allsites.es/sales_in_api/public/api';
  token: any;
  ofertas: any;
  ofertasA: any;
  ofertasNotA: any;
  noticias: any;
  User: any;
  constructor(private http: HttpClient) { }
  getCiclos(tok: any) {
    return new Promise<any>(resolve => {
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
    return new Promise<any>(resolve => {
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
  async getOffers() {
    this.token='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiN2M2OGFjM2RmZjY2ZjljNzk0ODAzYjdhYTZmZDc2ZjBjZjEzNmYzNzY2MjVlYTllMzJkMDZlYTZiYjgyODIyYzg4M2RhODc3MzU5Y2Y0OGMiLCJpYXQiOjE2MTI5NDM1MDAsIm5iZiI6MTYxMjk0MzUwMCwiZXhwIjoxNjQ0NDc5NTAwLCJzdWIiOiIyMiIsInNjb3BlcyI6W119.U2pH5OCvJb4iViCi1dB0UMQaxJyzXYGuudl4S7js0KOcE403GammUgthpQi-R3AxjZVFDI8yUJqp2e7JGK5AQMXuNRj0GVz5IPUW7oT0DkVepiHqCY1KGDD77rShblpD1FJmunMlVui8byIENr8tawB9wrm-wQOW_O3Fx4I0YWmOT5o_Qvb4qijOjapaUtHDtPaEQe51OpNjPc6jqrPdYmDcX8uikyKKouH4d8BvypJRLcNMPhzF6YYrQq9wObyD4mgy7VWE9Um5DbkG3XpRUZh7WdqdN_AgAhTsmZd2Z9UeeCRZy8TqUN4bZcjagVlIkumD9waZrLg9tlO3YHH3aGpT4MqZEseuILexFVYwQpyBT3mHMKyZmBKlD7hZx4syJTc9h5HcPaW45ayH8z8QUmfQgmS3CLgiZHZhbjmZIC9it_BkoCp9LbR6Nqq_xtp5PMSuio7-DnQUA9b7RmEP4kbVY4OGRhnzQSzssn3Cwf0WgtxQkR7zVq24e-YYLTSFCH6q-eMkpAGDeYpxRdS310UaRoDzmjB7-RGn5slEKODIylkkrbkzwaXqrrfH9cea23UjmsHkdtDSz5WpLDgEexSVwLSB-gHZAHMSPh9aS4Usfcus8YR_GJnezY3nJc6iNIEvHvmkeLrJ5f_0rFDcQPfi__mGxFQCtfH4To85wTM'
    return await new Promise<any>(resolve => {
      
      this.http.get(this.apiUrl + '/offers', {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token),
      })
        .subscribe(data => {
          this.ofertas = data;
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }
  async getArticles() {
    return await new Promise<any>(resolve => {
      this.http.get(this.apiUrl + '/articles')
        .subscribe(data => {
          this.noticias=data;
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  async getCicles() {
    return await new Promise<any>(resolve => {
      this.http.get(this.apiUrl + '/cicles')
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  async getUsuarios(){
    this.token='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiN2M2OGFjM2RmZjY2ZjljNzk0ODAzYjdhYTZmZDc2ZjBjZjEzNmYzNzY2MjVlYTllMzJkMDZlYTZiYjgyODIyYzg4M2RhODc3MzU5Y2Y0OGMiLCJpYXQiOjE2MTI5NDM1MDAsIm5iZiI6MTYxMjk0MzUwMCwiZXhwIjoxNjQ0NDc5NTAwLCJzdWIiOiIyMiIsInNjb3BlcyI6W119.U2pH5OCvJb4iViCi1dB0UMQaxJyzXYGuudl4S7js0KOcE403GammUgthpQi-R3AxjZVFDI8yUJqp2e7JGK5AQMXuNRj0GVz5IPUW7oT0DkVepiHqCY1KGDD77rShblpD1FJmunMlVui8byIENr8tawB9wrm-wQOW_O3Fx4I0YWmOT5o_Qvb4qijOjapaUtHDtPaEQe51OpNjPc6jqrPdYmDcX8uikyKKouH4d8BvypJRLcNMPhzF6YYrQq9wObyD4mgy7VWE9Um5DbkG3XpRUZh7WdqdN_AgAhTsmZd2Z9UeeCRZy8TqUN4bZcjagVlIkumD9waZrLg9tlO3YHH3aGpT4MqZEseuILexFVYwQpyBT3mHMKyZmBKlD7hZx4syJTc9h5HcPaW45ayH8z8QUmfQgmS3CLgiZHZhbjmZIC9it_BkoCp9LbR6Nqq_xtp5PMSuio7-DnQUA9b7RmEP4kbVY4OGRhnzQSzssn3Cwf0WgtxQkR7zVq24e-YYLTSFCH6q-eMkpAGDeYpxRdS310UaRoDzmjB7-RGn5slEKODIylkkrbkzwaXqrrfH9cea23UjmsHkdtDSz5WpLDgEexSVwLSB-gHZAHMSPh9aS4Usfcus8YR_GJnezY3nJc6iNIEvHvmkeLrJ5f_0rFDcQPfi__mGxFQCtfH4To85wTM'
    return await new Promise<any>(resolve => {
      
      this.http.get(this.apiUrl + '/users', {
        
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token),
      })
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }
  async activarusuario(id){
    this.token='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiN2M2OGFjM2RmZjY2ZjljNzk0ODAzYjdhYTZmZDc2ZjBjZjEzNmYzNzY2MjVlYTllMzJkMDZlYTZiYjgyODIyYzg4M2RhODc3MzU5Y2Y0OGMiLCJpYXQiOjE2MTI5NDM1MDAsIm5iZiI6MTYxMjk0MzUwMCwiZXhwIjoxNjQ0NDc5NTAwLCJzdWIiOiIyMiIsInNjb3BlcyI6W119.U2pH5OCvJb4iViCi1dB0UMQaxJyzXYGuudl4S7js0KOcE403GammUgthpQi-R3AxjZVFDI8yUJqp2e7JGK5AQMXuNRj0GVz5IPUW7oT0DkVepiHqCY1KGDD77rShblpD1FJmunMlVui8byIENr8tawB9wrm-wQOW_O3Fx4I0YWmOT5o_Qvb4qijOjapaUtHDtPaEQe51OpNjPc6jqrPdYmDcX8uikyKKouH4d8BvypJRLcNMPhzF6YYrQq9wObyD4mgy7VWE9Um5DbkG3XpRUZh7WdqdN_AgAhTsmZd2Z9UeeCRZy8TqUN4bZcjagVlIkumD9waZrLg9tlO3YHH3aGpT4MqZEseuILexFVYwQpyBT3mHMKyZmBKlD7hZx4syJTc9h5HcPaW45ayH8z8QUmfQgmS3CLgiZHZhbjmZIC9it_BkoCp9LbR6Nqq_xtp5PMSuio7-DnQUA9b7RmEP4kbVY4OGRhnzQSzssn3Cwf0WgtxQkR7zVq24e-YYLTSFCH6q-eMkpAGDeYpxRdS310UaRoDzmjB7-RGn5slEKODIylkkrbkzwaXqrrfH9cea23UjmsHkdtDSz5WpLDgEexSVwLSB-gHZAHMSPh9aS4Usfcus8YR_GJnezY3nJc6iNIEvHvmkeLrJ5f_0rFDcQPfi__mGxFQCtfH4To85wTM'
    return await new Promise(resolve => {
      this.http.post(this.apiUrl + '/activate' ,{
        user_id: id},{
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token),
        
      })
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }
  borraroferta(id){
    this.token='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiN2M2OGFjM2RmZjY2ZjljNzk0ODAzYjdhYTZmZDc2ZjBjZjEzNmYzNzY2MjVlYTllMzJkMDZlYTZiYjgyODIyYzg4M2RhODc3MzU5Y2Y0OGMiLCJpYXQiOjE2MTI5NDM1MDAsIm5iZiI6MTYxMjk0MzUwMCwiZXhwIjoxNjQ0NDc5NTAwLCJzdWIiOiIyMiIsInNjb3BlcyI6W119.U2pH5OCvJb4iViCi1dB0UMQaxJyzXYGuudl4S7js0KOcE403GammUgthpQi-R3AxjZVFDI8yUJqp2e7JGK5AQMXuNRj0GVz5IPUW7oT0DkVepiHqCY1KGDD77rShblpD1FJmunMlVui8byIENr8tawB9wrm-wQOW_O3Fx4I0YWmOT5o_Qvb4qijOjapaUtHDtPaEQe51OpNjPc6jqrPdYmDcX8uikyKKouH4d8BvypJRLcNMPhzF6YYrQq9wObyD4mgy7VWE9Um5DbkG3XpRUZh7WdqdN_AgAhTsmZd2Z9UeeCRZy8TqUN4bZcjagVlIkumD9waZrLg9tlO3YHH3aGpT4MqZEseuILexFVYwQpyBT3mHMKyZmBKlD7hZx4syJTc9h5HcPaW45ayH8z8QUmfQgmS3CLgiZHZhbjmZIC9it_BkoCp9LbR6Nqq_xtp5PMSuio7-DnQUA9b7RmEP4kbVY4OGRhnzQSzssn3Cwf0WgtxQkR7zVq24e-YYLTSFCH6q-eMkpAGDeYpxRdS310UaRoDzmjB7-RGn5slEKODIylkkrbkzwaXqrrfH9cea23UjmsHkdtDSz5WpLDgEexSVwLSB-gHZAHMSPh9aS4Usfcus8YR_GJnezY3nJc6iNIEvHvmkeLrJ5f_0rFDcQPfi__mGxFQCtfH4To85wTM'
    return new Promise(resolve => {
      this.http.delete(this.apiUrl + '/offers/'+id, {
        
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token),
        
        
      })
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }
  async getOffersApplied(id) {
    this.token='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiN2M2OGFjM2RmZjY2ZjljNzk0ODAzYjdhYTZmZDc2ZjBjZjEzNmYzNzY2MjVlYTllMzJkMDZlYTZiYjgyODIyYzg4M2RhODc3MzU5Y2Y0OGMiLCJpYXQiOjE2MTI5NDM1MDAsIm5iZiI6MTYxMjk0MzUwMCwiZXhwIjoxNjQ0NDc5NTAwLCJzdWIiOiIyMiIsInNjb3BlcyI6W119.U2pH5OCvJb4iViCi1dB0UMQaxJyzXYGuudl4S7js0KOcE403GammUgthpQi-R3AxjZVFDI8yUJqp2e7JGK5AQMXuNRj0GVz5IPUW7oT0DkVepiHqCY1KGDD77rShblpD1FJmunMlVui8byIENr8tawB9wrm-wQOW_O3Fx4I0YWmOT5o_Qvb4qijOjapaUtHDtPaEQe51OpNjPc6jqrPdYmDcX8uikyKKouH4d8BvypJRLcNMPhzF6YYrQq9wObyD4mgy7VWE9Um5DbkG3XpRUZh7WdqdN_AgAhTsmZd2Z9UeeCRZy8TqUN4bZcjagVlIkumD9waZrLg9tlO3YHH3aGpT4MqZEseuILexFVYwQpyBT3mHMKyZmBKlD7hZx4syJTc9h5HcPaW45ayH8z8QUmfQgmS3CLgiZHZhbjmZIC9it_BkoCp9LbR6Nqq_xtp5PMSuio7-DnQUA9b7RmEP4kbVY4OGRhnzQSzssn3Cwf0WgtxQkR7zVq24e-YYLTSFCH6q-eMkpAGDeYpxRdS310UaRoDzmjB7-RGn5slEKODIylkkrbkzwaXqrrfH9cea23UjmsHkdtDSz5WpLDgEexSVwLSB-gHZAHMSPh9aS4Usfcus8YR_GJnezY3nJc6iNIEvHvmkeLrJ5f_0rFDcQPfi__mGxFQCtfH4To85wTM'
    return await new Promise<any>(resolve => {
      
      this.http.get(this.apiUrl + '/offersApplied/'+id, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token),
      })
        .subscribe(data => {
          this.ofertasA = data;
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }
  async getOffersNotsApplied() {
    this.token='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiN2M2OGFjM2RmZjY2ZjljNzk0ODAzYjdhYTZmZDc2ZjBjZjEzNmYzNzY2MjVlYTllMzJkMDZlYTZiYjgyODIyYzg4M2RhODc3MzU5Y2Y0OGMiLCJpYXQiOjE2MTI5NDM1MDAsIm5iZiI6MTYxMjk0MzUwMCwiZXhwIjoxNjQ0NDc5NTAwLCJzdWIiOiIyMiIsInNjb3BlcyI6W119.U2pH5OCvJb4iViCi1dB0UMQaxJyzXYGuudl4S7js0KOcE403GammUgthpQi-R3AxjZVFDI8yUJqp2e7JGK5AQMXuNRj0GVz5IPUW7oT0DkVepiHqCY1KGDD77rShblpD1FJmunMlVui8byIENr8tawB9wrm-wQOW_O3Fx4I0YWmOT5o_Qvb4qijOjapaUtHDtPaEQe51OpNjPc6jqrPdYmDcX8uikyKKouH4d8BvypJRLcNMPhzF6YYrQq9wObyD4mgy7VWE9Um5DbkG3XpRUZh7WdqdN_AgAhTsmZd2Z9UeeCRZy8TqUN4bZcjagVlIkumD9waZrLg9tlO3YHH3aGpT4MqZEseuILexFVYwQpyBT3mHMKyZmBKlD7hZx4syJTc9h5HcPaW45ayH8z8QUmfQgmS3CLgiZHZhbjmZIC9it_BkoCp9LbR6Nqq_xtp5PMSuio7-DnQUA9b7RmEP4kbVY4OGRhnzQSzssn3Cwf0WgtxQkR7zVq24e-YYLTSFCH6q-eMkpAGDeYpxRdS310UaRoDzmjB7-RGn5slEKODIylkkrbkzwaXqrrfH9cea23UjmsHkdtDSz5WpLDgEexSVwLSB-gHZAHMSPh9aS4Usfcus8YR_GJnezY3nJc6iNIEvHvmkeLrJ5f_0rFDcQPfi__mGxFQCtfH4To85wTM'
    return await new Promise<any>(resolve => {
      
      this.http.get(this.apiUrl + '/offersNotApplied/1', {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token),
      })
        .subscribe(data => {
          this.ofertasNotA = data;
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }

  async aplicarOferta(offer_id){
    return await new Promise<any>(resolve => {
      this.http.post(this.apiUrl + '/applied',
        {
          user_id: 1,
          offer_id: offer_id
        },{
          headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token)
        })
        .subscribe(data => {
          this.token = data;
          resolve(data);
        }, err => {
          console.log(err);
        });
    });
  }
  

  async quitarOfertaAplicada(offer_id){
    return await new Promise<any>(resolve => {
      this.http.post(this.apiUrl + '/unapplied',
        {
          user_id: 1,
          offer_id: offer_id
        },{
          headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token)
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
