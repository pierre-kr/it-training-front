import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formateur } from '../models/Formateur';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  constructor(private httpClient: HttpClient) { }

  findById(id: number): Observable<Formateur> {
    return this.httpClient.get<Formateur>(`http://localhost:8080/formateurs/${id}`);
  }
  findAll(): Observable<Formateur[]> {
    return this.httpClient.get<Formateur[]>(`http://localhost:8080/formateurs`);
  }
  create(formateur: Formateur): Observable<Formateur> {
    console.log(formateur);
    return this.httpClient.post<Formateur>(`http://localhost:8080/formateurs`, formateur);
  }
}
