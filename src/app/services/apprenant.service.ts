import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apprenant } from '../models/Apprenant';

@Injectable({
  providedIn: 'root'
})
export class ApprenantService {

  constructor(private httpClient: HttpClient) { }

  findById(id: number): Observable<Apprenant>{
    return this.httpClient.get<Apprenant>(`http://localhost:8080/apprenants/${id}`)
  }

  create(apprenant: Apprenant): Observable<Apprenant> {
    return this.httpClient.post<Apprenant>('http://localhost:8080/apprenants', apprenant);
  }
}
