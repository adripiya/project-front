import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/interfaces/clientes.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  public requestUrl: string = 'http://localhost';
  private loginUrl = 'api/clientes'; 

  constructor(private http: HttpClient) { }

  getClients(): Observable<Cliente> {
    return this.http.get<Cliente>(this.loginUrl)
  }
}
