import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evaluation } from '../models/Evaluation';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  constructor(private httpClient: HttpClient) { }

  create(evaluation: Evaluation): Observable<Evaluation>{
    return this.httpClient.post<Evaluation>('http://localhost:8080/evaluations', evaluation);
  }
}
