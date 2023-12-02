import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private requestUrl: string = environment.requestUrl;
  private people = 'api/people';

  private peopleUrl = this.requestUrl + this.people;


  constructor(private http: HttpClient) { }

  getPeople(): Observable<any> {
    return this.http.get<any>(this.peopleUrl);
  }

  postPeople(people: any): Observable<any> {
    return this.http.post<any>(this.peopleUrl, people);
  }

  putPeople(people: any, id: any): Observable<any> {
    const newUrl = this.peopleUrl + '/' + id
    return this.http.put<any>(newUrl, people);
  }

  deletePeople(id: any): Observable<any> {
    const newUrl = this.peopleUrl + '/' + id
    return this.http.delete<any>(newUrl)
  }
}
