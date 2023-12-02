import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  public requestUrl: string = environment.requestUrl;
  private loginUrl = 'api/events'; 

  constructor(private http: HttpClient) { }

  getEvents(): Observable<any> {
    return this.http.get<any>(this.loginUrl)
  }

  getCochesDetalle(): Observable<any> {
    return this.http.get(this.requestUrl);
  }
}
