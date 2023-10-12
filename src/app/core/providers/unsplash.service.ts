import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  private accesKey: string = '5kSOhlXJuaOGv-kAZlxe832LyKaACC0y-1de8HdqwS4';
  private requestUrl: string = 'https://api.unsplash.com/'

  constructor(private http: HttpClient) { }

  getListImgPages(query: any, page: number): Observable<any> {
    return this.http.get(this.requestUrl +'search/photos' + '?query=' +query + '&page=' + page +'&client_id=' + this.accesKey);
  }

  getDetailImg(id: any): Observable<any> {
    return this.http.get(this.requestUrl + 'photos/' +id +'?client_id=' + this.accesKey);
  }
}
