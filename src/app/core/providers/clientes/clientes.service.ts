import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  public requestUrl: string = environment.requestUrl;
  private loginUrl = 'api/clientes'; 

  constructor(private http: HttpClient) { }

  getClients(): Observable<any> {
    return this.http.get<any>(this.loginUrl)
  }
}
