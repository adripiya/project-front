import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/interfaces/login.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  public requestUrl: string = 'http://localhost';
  private loginUrl = 'api/events'; 

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event> {
    return this.http.get<Event>(this.loginUrl)
  }

}
