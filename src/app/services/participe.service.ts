import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Participe } from '../models/Participe';

@Injectable({
  providedIn: 'root'
})
export class ParticipeService {

  constructor(private httpClient: HttpClient) { }

  create(participe: Participe): Observable<Participe>{
    return this.httpClient.post<Participe>('http://localhost:8080/participe', participe);
  }

  findById(id: number): Observable<Participe>{
    return this.httpClient.get<Participe>(`http://localhost:8080/participe/${id}`);
  }

  update(participe: Participe): Observable<Participe>{
    return this.httpClient.put<Participe>('http://localhost:8080/participe', participe);
  }
}
