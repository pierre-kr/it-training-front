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
}
