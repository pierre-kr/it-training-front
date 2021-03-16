import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Responsable } from '../models/Responsable';

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {

  constructor(private httpClient: HttpClient) { }


  
  findAll(): Observable<Responsable[]> {
    return this.httpClient.get<Responsable[]>(`http://localhost:8080/responsables`);
  }

  create(responsable: Responsable): Observable<Responsable> {
    console.log(responsable);
    return this.httpClient.post<Responsable>(`http://localhost:8080/responsables`, responsable);
  }

  getCarsSmall(): any {
    return this.findAll()
      .toPromise()
      .then(res => <Responsable[]>res)
      .then(data => { return data; });
  }
}
