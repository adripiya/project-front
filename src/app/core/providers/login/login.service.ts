import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public requestUrl: string = environment.requestUrl;
  private login = 'api/login'; 
  public isLogin: boolean = false;
  public rol: any;
  public userId: any;
  public userName: any;


  private loginUrl: any = this.requestUrl + this.login;
  
  constructor(private http: HttpClient) { }


  getLogin(query: any ): Observable<any> {
    this.isLogin = true;
    return this.http.post<any>(this.loginUrl, query);
  }

}
