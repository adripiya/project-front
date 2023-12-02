import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment';

@Injectable({
  providedIn: 'root'
})
export class DireccionService {

  private requestUrl: string = environment.requestUrl;
  private direccion = 'api/directions';
  private ciudades = 'api/cities';
  private codigoPostal = 'api/postalCodes';


  private direccionUrl = this.requestUrl + this.direccion;
  private ciudadesUrl = this.requestUrl + this.ciudades;
  private codigoPostalUrl = this.requestUrl + this.codigoPostal;


  constructor(private http: HttpClient) { }

  getDireccion(): Observable<any> {
    return this.http.get<any>(this.direccionUrl);
  }

  postDireccion(direccion: any): Observable<any> {
    return this.http.post<any>(this.direccionUrl, direccion);
  }

  putDireccion(direccion: any, id: any): Observable<any> {
    const newUrl = this.direccionUrl + '/' + id
    return this.http.put<any>(newUrl, direccion);
  }

  deleteDireccion(id: any): Observable<any> {
    const newUrl = this.direccionUrl + '/' + id
    return this.http.delete<any>(newUrl)
  }

  getCiudades(): Observable<any> {
    return this.http.get<any>(this.ciudadesUrl);
  }

  postCiudades(ciudad: any): Observable<any> {
    return this.http.post<any>(this.ciudadesUrl, ciudad);
  }

  putCiudades(ciudad: any, id: any): Observable<any> {
    const newUrl = this.ciudadesUrl + '/' + id
    return this.http.put<any>(newUrl, ciudad);
  }

  deleteCiudades(id: any): Observable<any> {
    const newUrl = this.ciudadesUrl + '/' + id
    return this.http.delete<any>(newUrl)
  }

  getCodigoPostal(): Observable<any> {
    return this.http.get<any>(this.codigoPostalUrl);
  }

  postCodigoPostal(direccion: any): Observable<any> {
    return this.http.post<any>(this.codigoPostalUrl, direccion);
  }

  putCodigoPostal(direccion: any, id: any): Observable<any> {
    const newUrl = this.codigoPostalUrl + '/' + id
    return this.http.put<any>(newUrl, direccion);
  }

  deleteCodigoPostal(id: any): Observable<any> {
    const newUrl = this.codigoPostalUrl + '/' + id
    return this.http.delete<any>(newUrl)
  }
}
