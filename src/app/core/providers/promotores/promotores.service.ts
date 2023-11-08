import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotoresService {

  public requestUrl: string = 'http://localhost';
  private loginUrl = 'api/promotores'; 

  constructor(private http: HttpClient) { }

  getPromotores(): Observable<Event> {
    return this.http.get<Event>(this.loginUrl)
  }

}
