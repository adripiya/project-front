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
  private logout = 'api/logout'; 

  public isLogin: boolean = false;
  public rol: any;
  public userId: any;
  public userName: any;
  private password: any;


  private loginUrl: any = this.requestUrl + this.login;
  private logOutUrl: any = this.requestUrl + this.logout;

  
  constructor(private http: HttpClient) { }


  getLogin(query: any ): Observable<any> {
    this.isLogin = true;
    this.password = query.password
    return this.http.post<any>(this.loginUrl, query);
  }

  logOut(): Observable<any> {
    const send = {
      'email': this.userName,
      'password': this.password,
    }
    return this.http.get<any>(this.logOutUrl);
  }

}
