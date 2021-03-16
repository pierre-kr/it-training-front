import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin:boolean;
  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
  }

  signIn(identifiants){
    this.authService.loging(identifiants)
    .subscribe(result =>{
      if(result)
       this.router.navigate(['dashboard/chart']);
      else this.invalidLogin=true;
    });  
  }
}
