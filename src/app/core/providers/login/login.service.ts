import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public requestUrl: string = 'http://localhost';
  
  constructor(private http: HttpClient) { }

  getLogin(query: any): Observable<any> {
    return this.http.get(this.requestUrl +'login' + '?query=' + query);
  }

}
