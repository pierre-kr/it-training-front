import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from '../models/Theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Theme[]> {
    return this.httpClient.get<Theme[]>(`http://localhost:8080/themes`);
  }
}
