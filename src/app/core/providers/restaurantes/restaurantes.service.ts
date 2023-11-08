import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/interfaces/clientes.model';
import { Restaurante } from 'src/app/interfaces/restaurante.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {
  public requestUrl: string = 'http://localhost';
  private loginUrl = 'api/restaurantes'; 

  constructor(private http: HttpClient) { }

  getRestaurantes(): Observable<Restaurante> {
    return this.http.get<Restaurante>(this.loginUrl)
  }
}
