import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  private requestUrl: string = environment.requestUrl;
  private newReserva = 'api/bookings/newBooking';
  private reserva = 'api/bookings';
  private reservaDetalle = 'api/bookingDetails';
  private estados = 'api/states';




  private newReservaUrl = this.requestUrl + this.newReserva;
  private reservaUrl = this.requestUrl + this.reserva;
  private reservadetalleUrl = this.requestUrl + this.reservaDetalle;
  private estadosUrl = this.requestUrl + this.estados;




  constructor(private http: HttpClient) { }

  getReservas(): Observable<any> {
    return this.http.get<any>(this.reservaUrl);
  }

  postReserva(reserva: any): Observable<any> {
    return this.http.post<any>(this.reservaUrl, reserva);
  }

  putReserva(reserva: any, id: any): Observable<any> {
    const newUrl = this.reservaUrl + '/' + id
    return this.http.put<any>(newUrl, reserva);
  }

  deleteReserva(id: any): Observable<any> {
    const newUrl = this.reservaUrl + '/' + id
    return this.http.delete<any>(newUrl)
  }

  getReservasDetalle(): Observable<any> {
    return this.http.get<any>(this.reservadetalleUrl);
  }

  postReservDetalle(reservaDetalle: any): Observable<any> {
    return this.http.post<any>(this.reservadetalleUrl, reservaDetalle);
  }

  putReservaDetalle(reservaDetalle: any, id: any): Observable<any> {
    const newUrl = this.reservadetalleUrl + '/' + id
    return this.http.put<any>(newUrl, reservaDetalle);
  }

  deleteReservaDetalle(id: any): Observable<any> {
    const newUrl = this.reservadetalleUrl + '/' + id
    return this.http.delete<any>(newUrl)
  }

  getEstados(): Observable<any> {
    return this.http.get<any>(this.estadosUrl);
  }
}
