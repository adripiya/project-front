import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment';

@Injectable({
  providedIn: 'root'
})
export class PromotoresService {

  public requestUrl: string = environment.requestUrl;
  private promotores = 'api/promoter';
  private promotorRestaurante = 'api/promoter/restaurant';
  private restaurantePromotor = 'api/restaurantsPromoters';


  private promotoresUrl = this.requestUrl + this.promotores;
  private promotorRestauranteUrl = this.requestUrl + this.promotorRestaurante;
  private restaurantePromotorUrl = this.requestUrl + this.restaurantePromotor;



  constructor(private http: HttpClient) { }

  getPromotores(): Observable<any> {
    return this.http.get<any>(this.promotoresUrl);
  }
  // getLoggedInUser(auth_toke: any): Observable<any> {
  //   const headers: any = new Headers({
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${auth_token}`
  //   })
  //   return this.http.get(this.promotoresUrl, { headers: headers })
  // }

  postPromotores(promotor: any): Observable<any> {
    return this.http.post<any>(this.promotoresUrl, promotor);
  }

  putPromotores(promotor: any, id: any): Observable<any> {
    const newUrl = this.promotoresUrl + '/' + id;
    return this.http.put<any>(newUrl, promotor);
  }

  deletePromotores(id: any): Observable<any> {
    const newUrl = this.promotoresUrl + '/' + id;
    return this.http.delete<any>(newUrl);
  }

  getPromotorRestaurante(): Observable<any> {
    return this.http.get<any>(this.restaurantePromotorUrl);
  }

  atachPromotorRestaurante(promotorRestaurante: any): Observable<any> {
    return this.http.post<any>(this.promotorRestauranteUrl, promotorRestaurante);
  }

  detachPromotorRestaurante(promotorRestaurante: any): Observable<any> {
    const newUrl = this.promotorRestauranteUrl + '/detach';
    return this.http.post<any>(newUrl, promotorRestaurante);
  }
}
