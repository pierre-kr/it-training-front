import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from '../models/Theme';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor(private httpCatalogue:HttpClient) { }

  getAll() : Observable<Theme[]> {
    return this.httpCatalogue.get<Theme[]>("http://localhost:8080/themes")
  }
}
