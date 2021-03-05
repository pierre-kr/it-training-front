import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from '../models/Formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private httpClient: HttpClient) { }

  findById(id: number): Observable<Formation> {
    return this.httpClient.get<Formation>(`http://localhost:8080/formations/${id}`);
  }


}
