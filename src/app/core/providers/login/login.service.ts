import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/interfaces/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public requestUrl: string = 'http://localhost';
  private loginUrl = 'api/login'; 
  public isLogin: boolean = false;
  
  constructor(private http: HttpClient) { }


  // getLogin(query: any): Observable<any> {
  //   return this.http.get(this.requestUrl +'login' + '?query=' + query);
  // }

  getLogin(query: any ): Observable<Login> {
    this.isLogin = true;
    return this.http.get<Login>(this.loginUrl)
  }

}
