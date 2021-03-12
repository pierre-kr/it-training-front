import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Session } from '../models/Session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpClient:HttpClient) { }


  create(session: Session): Observable<Session> {
    console.log(session);
    return this.httpClient.post<Session>(`http://localhost:8080/sessions`, session);
  }
}
