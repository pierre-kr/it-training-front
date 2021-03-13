import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  loging(identifiants){
    return this.http.post(`http://localhost:8080/login/signin`, identifiants)
    .pipe(
      map(response => {
        if(response){
          localStorage.setItem('token',response.toString());
          return true;
        }else return false;
      })
    )}

    logout(){
      localStorage.removeItem('token');
    }

    isLoggedIn(){
      let token = localStorage.getItem('token');
      return (token) ? true: false;
    }
}
