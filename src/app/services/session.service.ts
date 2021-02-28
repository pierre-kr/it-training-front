import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Session } from '../models/Session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpClient:HttpClient) { }

  findById(id: number): Session {

    // TODO
    return new Session(1,"04/01/2021","19/03/2020",60,false,5000,"0568DS","salle python","type session",1,1,"8, rue le corbusier 59000 Lille");
  }
}
