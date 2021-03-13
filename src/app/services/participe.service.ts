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
}
