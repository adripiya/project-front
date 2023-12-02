import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment';

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {
  private requestUrl: string = environment.requestUrl;
  private restaurante = 'api/restaurants'; 

  private restauranteUrl = this.requestUrl + this.restaurante;

  constructor(private http: HttpClient) { }

  getRestaurantes(): Observable<any> {
    return this.http.get<any>(this.restauranteUrl);
  }

  postRestaurante(restaurante: any): Observable<any> {
    return this.http.post<any>(this.restauranteUrl, restaurante);
  }

  putRestaurante(restaurante: any, id: any): Observable<any> {
    const newUrl = this.restauranteUrl + '/' + id
    return this.http.put<any>(newUrl, restaurante);
  }

  deleteRestaurante(id: any): Observable<any> {
    const newUrl = this.restauranteUrl + '/' + id
    return this.http.delete<any>(newUrl)
  }
}
