import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Session } from '../models/Session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpClient: HttpClient) { }
  
  findById(id: number): Observable<Session> {
    return this.httpClient.get<Session>(`http://localhost:8080/sessions/${id}`);
  }

  findAll(): Observable<Session[]> {
    return this.httpClient.get<Session[]>(`http://localhost:8080/sessions`);
  }

  create(session: Session): Observable<Session> {
    console.log(session);
    return this.httpClient.post<Session>(`http://localhost:8080/sessions`, session);
  }
  getCarsSmall(): any {
    return this.findAll()
      .toPromise()
      .then(res => <Session[]>res)
      .then(data => { return data; });
  }
}
