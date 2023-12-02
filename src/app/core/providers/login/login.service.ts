import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public requestUrl: string = environment.requestUrl;
  private loginUrl = 'api/login'; 
  public isLogin: boolean = false;
  
  constructor(private http: HttpClient) { }


  getLogin(query: any ): Observable<any> {
    this.isLogin = true;
    return this.http.get<any>(this.loginUrl)
  }

}
