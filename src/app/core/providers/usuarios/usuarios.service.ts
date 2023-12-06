import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private requestUrl: string = environment.requestUrl;
  private user = 'api/users'; 
  private register = 'api/register'; 


  private userUrl = this.requestUrl + this.user;
  private registerUrl = this.requestUrl + this.register;


  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any> {
    return this.http.get<any>(this.userUrl);
  }

  postUsuario(user: any): Observable<any> {
    return this.http.post<any>(this.userUrl, user);
  }

  registerUsuario(user: any): Observable<any> {
    return this.http.post<any>(this.registerUrl, user);
  }

  putUsuario(user: any, id: any): Observable<any> {
    const newUrl = this.userUrl + '/' + id
    return this.http.put<any>(newUrl, user);
  }

  deleteUsuario(id: any): Observable<any> {
    const newUrl = this.userUrl + '/' + id
    return this.http.delete<any>(newUrl)
  }
}
