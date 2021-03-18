import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  info(){

    this.router.navigate(['/catalogue']);
  }

  msg(){
    Swal.fire({
      title: 'Des formation en cours de programmation, pour plus d information veuilez nous contacter',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }

  search(val:string){
    if(val.toLocaleLowerCase() ==="java")
      this.router.navigate(['/catalogue/formation'],{queryParams:{id:'1000'}})
    else{
      alert('Veuillez vous rendre à la page formations pour chercher la formation qui vous correspond')
    }
  }
 
}
