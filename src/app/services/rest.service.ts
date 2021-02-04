import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Oferta } from '../interfaces/Ofertas';



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
    this.token='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNjI3Y2IzMTAxMGRmMDlhODJlZjg4Y2YzY2E1ZmI3ZTUyNTJjYjY2MTNlOTFlZTZlMWIxZWFiYTdhYTNhOGQ5M2E2N2UzOWE4M2JkZWM5OTciLCJpYXQiOjE2MTEwNTUwOTQsIm5iZiI6MTYxMTA1NTA5NCwiZXhwIjoxNjQyNTkxMDk0LCJzdWIiOiIyMiIsInNjb3BlcyI6W119.dWgqVhhb5RdKdtK5Jl9xzenPIs0PZlSL0-GtR4akNdk2052noWdhSDb-Z2ym2iDUHVimAO7d8JNiQwBpvVjswiNtPcu9QIXu9wBkUKbPd0PlMljGESvpBowmEw7XJe9m07BseQhqDXxdRuuB6dIIXPzqb-8ICmr5E2An4WWvdfzOjx8vQEdfPYOePWWQy2ZoGer59qpn2DCs-w69kBoKt45akZvOq0dlCT_1dLi587ZYnsFR60EdNAX6quwLZ95GIRpjkQuKJsiYO78xWUNztbWntacRQt0pd8jVv_yIA1Ktuw3Z_qNRjoU-gn6G-Qyb6hf2hYmkI6Qi72DjlT5jwUKFMo_sYHbJe4XDP4xdsLoabuBLeQgAPpAGewen3XkhbUIhG9eZpecGEYEAae477AkOX2YauQxKnMphbAXWXYjcej2epWxlp8fM8NYdm0lEkLF7mVoK1QJgwySUSfj8DBqTONdbGvVZ9Aaj3Tt_WU82XnWj_J5hja35MRCbmWL-Wi8FG1-RpTWfazRxNt6sqhGu5E_1P-U23M79rKQObsKG7vlraPJj1cNkzrXA_Ohur_LOBI2A64gGpL66zOcV_nrIrj-Ohr69uwZsjlJwkOU_yYwYKDlNiHSbECBmuz8OTFoUsxH0_3Fsw1N36_5jn79LaxaZ-IVCm1QADKXyqco'
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
    this.token='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNjI3Y2IzMTAxMGRmMDlhODJlZjg4Y2YzY2E1ZmI3ZTUyNTJjYjY2MTNlOTFlZTZlMWIxZWFiYTdhYTNhOGQ5M2E2N2UzOWE4M2JkZWM5OTciLCJpYXQiOjE2MTEwNTUwOTQsIm5iZiI6MTYxMTA1NTA5NCwiZXhwIjoxNjQyNTkxMDk0LCJzdWIiOiIyMiIsInNjb3BlcyI6W119.dWgqVhhb5RdKdtK5Jl9xzenPIs0PZlSL0-GtR4akNdk2052noWdhSDb-Z2ym2iDUHVimAO7d8JNiQwBpvVjswiNtPcu9QIXu9wBkUKbPd0PlMljGESvpBowmEw7XJe9m07BseQhqDXxdRuuB6dIIXPzqb-8ICmr5E2An4WWvdfzOjx8vQEdfPYOePWWQy2ZoGer59qpn2DCs-w69kBoKt45akZvOq0dlCT_1dLi587ZYnsFR60EdNAX6quwLZ95GIRpjkQuKJsiYO78xWUNztbWntacRQt0pd8jVv_yIA1Ktuw3Z_qNRjoU-gn6G-Qyb6hf2hYmkI6Qi72DjlT5jwUKFMo_sYHbJe4XDP4xdsLoabuBLeQgAPpAGewen3XkhbUIhG9eZpecGEYEAae477AkOX2YauQxKnMphbAXWXYjcej2epWxlp8fM8NYdm0lEkLF7mVoK1QJgwySUSfj8DBqTONdbGvVZ9Aaj3Tt_WU82XnWj_J5hja35MRCbmWL-Wi8FG1-RpTWfazRxNt6sqhGu5E_1P-U23M79rKQObsKG7vlraPJj1cNkzrXA_Ohur_LOBI2A64gGpL66zOcV_nrIrj-Ohr69uwZsjlJwkOU_yYwYKDlNiHSbECBmuz8OTFoUsxH0_3Fsw1N36_5jn79LaxaZ-IVCm1QADKXyqco'
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
    this.token='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNjI3Y2IzMTAxMGRmMDlhODJlZjg4Y2YzY2E1ZmI3ZTUyNTJjYjY2MTNlOTFlZTZlMWIxZWFiYTdhYTNhOGQ5M2E2N2UzOWE4M2JkZWM5OTciLCJpYXQiOjE2MTEwNTUwOTQsIm5iZiI6MTYxMTA1NTA5NCwiZXhwIjoxNjQyNTkxMDk0LCJzdWIiOiIyMiIsInNjb3BlcyI6W119.dWgqVhhb5RdKdtK5Jl9xzenPIs0PZlSL0-GtR4akNdk2052noWdhSDb-Z2ym2iDUHVimAO7d8JNiQwBpvVjswiNtPcu9QIXu9wBkUKbPd0PlMljGESvpBowmEw7XJe9m07BseQhqDXxdRuuB6dIIXPzqb-8ICmr5E2An4WWvdfzOjx8vQEdfPYOePWWQy2ZoGer59qpn2DCs-w69kBoKt45akZvOq0dlCT_1dLi587ZYnsFR60EdNAX6quwLZ95GIRpjkQuKJsiYO78xWUNztbWntacRQt0pd8jVv_yIA1Ktuw3Z_qNRjoU-gn6G-Qyb6hf2hYmkI6Qi72DjlT5jwUKFMo_sYHbJe4XDP4xdsLoabuBLeQgAPpAGewen3XkhbUIhG9eZpecGEYEAae477AkOX2YauQxKnMphbAXWXYjcej2epWxlp8fM8NYdm0lEkLF7mVoK1QJgwySUSfj8DBqTONdbGvVZ9Aaj3Tt_WU82XnWj_J5hja35MRCbmWL-Wi8FG1-RpTWfazRxNt6sqhGu5E_1P-U23M79rKQObsKG7vlraPJj1cNkzrXA_Ohur_LOBI2A64gGpL66zOcV_nrIrj-Ohr69uwZsjlJwkOU_yYwYKDlNiHSbECBmuz8OTFoUsxH0_3Fsw1N36_5jn79LaxaZ-IVCm1QADKXyqco'
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
    this.token='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNjI3Y2IzMTAxMGRmMDlhODJlZjg4Y2YzY2E1ZmI3ZTUyNTJjYjY2MTNlOTFlZTZlMWIxZWFiYTdhYTNhOGQ5M2E2N2UzOWE4M2JkZWM5OTciLCJpYXQiOjE2MTEwNTUwOTQsIm5iZiI6MTYxMTA1NTA5NCwiZXhwIjoxNjQyNTkxMDk0LCJzdWIiOiIyMiIsInNjb3BlcyI6W119.dWgqVhhb5RdKdtK5Jl9xzenPIs0PZlSL0-GtR4akNdk2052noWdhSDb-Z2ym2iDUHVimAO7d8JNiQwBpvVjswiNtPcu9QIXu9wBkUKbPd0PlMljGESvpBowmEw7XJe9m07BseQhqDXxdRuuB6dIIXPzqb-8ICmr5E2An4WWvdfzOjx8vQEdfPYOePWWQy2ZoGer59qpn2DCs-w69kBoKt45akZvOq0dlCT_1dLi587ZYnsFR60EdNAX6quwLZ95GIRpjkQuKJsiYO78xWUNztbWntacRQt0pd8jVv_yIA1Ktuw3Z_qNRjoU-gn6G-Qyb6hf2hYmkI6Qi72DjlT5jwUKFMo_sYHbJe4XDP4xdsLoabuBLeQgAPpAGewen3XkhbUIhG9eZpecGEYEAae477AkOX2YauQxKnMphbAXWXYjcej2epWxlp8fM8NYdm0lEkLF7mVoK1QJgwySUSfj8DBqTONdbGvVZ9Aaj3Tt_WU82XnWj_J5hja35MRCbmWL-Wi8FG1-RpTWfazRxNt6sqhGu5E_1P-U23M79rKQObsKG7vlraPJj1cNkzrXA_Ohur_LOBI2A64gGpL66zOcV_nrIrj-Ohr69uwZsjlJwkOU_yYwYKDlNiHSbECBmuz8OTFoUsxH0_3Fsw1N36_5jn79LaxaZ-IVCm1QADKXyqco'
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
    this.token='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNjI3Y2IzMTAxMGRmMDlhODJlZjg4Y2YzY2E1ZmI3ZTUyNTJjYjY2MTNlOTFlZTZlMWIxZWFiYTdhYTNhOGQ5M2E2N2UzOWE4M2JkZWM5OTciLCJpYXQiOjE2MTEwNTUwOTQsIm5iZiI6MTYxMTA1NTA5NCwiZXhwIjoxNjQyNTkxMDk0LCJzdWIiOiIyMiIsInNjb3BlcyI6W119.dWgqVhhb5RdKdtK5Jl9xzenPIs0PZlSL0-GtR4akNdk2052noWdhSDb-Z2ym2iDUHVimAO7d8JNiQwBpvVjswiNtPcu9QIXu9wBkUKbPd0PlMljGESvpBowmEw7XJe9m07BseQhqDXxdRuuB6dIIXPzqb-8ICmr5E2An4WWvdfzOjx8vQEdfPYOePWWQy2ZoGer59qpn2DCs-w69kBoKt45akZvOq0dlCT_1dLi587ZYnsFR60EdNAX6quwLZ95GIRpjkQuKJsiYO78xWUNztbWntacRQt0pd8jVv_yIA1Ktuw3Z_qNRjoU-gn6G-Qyb6hf2hYmkI6Qi72DjlT5jwUKFMo_sYHbJe4XDP4xdsLoabuBLeQgAPpAGewen3XkhbUIhG9eZpecGEYEAae477AkOX2YauQxKnMphbAXWXYjcej2epWxlp8fM8NYdm0lEkLF7mVoK1QJgwySUSfj8DBqTONdbGvVZ9Aaj3Tt_WU82XnWj_J5hja35MRCbmWL-Wi8FG1-RpTWfazRxNt6sqhGu5E_1P-U23M79rKQObsKG7vlraPJj1cNkzrXA_Ohur_LOBI2A64gGpL66zOcV_nrIrj-Ohr69uwZsjlJwkOU_yYwYKDlNiHSbECBmuz8OTFoUsxH0_3Fsw1N36_5jn79LaxaZ-IVCm1QADKXyqco'
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
    this.token='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNjI3Y2IzMTAxMGRmMDlhODJlZjg4Y2YzY2E1ZmI3ZTUyNTJjYjY2MTNlOTFlZTZlMWIxZWFiYTdhYTNhOGQ5M2E2N2UzOWE4M2JkZWM5OTciLCJpYXQiOjE2MTEwNTUwOTQsIm5iZiI6MTYxMTA1NTA5NCwiZXhwIjoxNjQyNTkxMDk0LCJzdWIiOiIyMiIsInNjb3BlcyI6W119.dWgqVhhb5RdKdtK5Jl9xzenPIs0PZlSL0-GtR4akNdk2052noWdhSDb-Z2ym2iDUHVimAO7d8JNiQwBpvVjswiNtPcu9QIXu9wBkUKbPd0PlMljGESvpBowmEw7XJe9m07BseQhqDXxdRuuB6dIIXPzqb-8ICmr5E2An4WWvdfzOjx8vQEdfPYOePWWQy2ZoGer59qpn2DCs-w69kBoKt45akZvOq0dlCT_1dLi587ZYnsFR60EdNAX6quwLZ95GIRpjkQuKJsiYO78xWUNztbWntacRQt0pd8jVv_yIA1Ktuw3Z_qNRjoU-gn6G-Qyb6hf2hYmkI6Qi72DjlT5jwUKFMo_sYHbJe4XDP4xdsLoabuBLeQgAPpAGewen3XkhbUIhG9eZpecGEYEAae477AkOX2YauQxKnMphbAXWXYjcej2epWxlp8fM8NYdm0lEkLF7mVoK1QJgwySUSfj8DBqTONdbGvVZ9Aaj3Tt_WU82XnWj_J5hja35MRCbmWL-Wi8FG1-RpTWfazRxNt6sqhGu5E_1P-U23M79rKQObsKG7vlraPJj1cNkzrXA_Ohur_LOBI2A64gGpL66zOcV_nrIrj-Ohr69uwZsjlJwkOU_yYwYKDlNiHSbECBmuz8OTFoUsxH0_3Fsw1N36_5jn79LaxaZ-IVCm1QADKXyqco'
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
