import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/Contact';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name="";
  email="";
  message="";
  hasName="";
  hasEmail="";
  hasMessage="";
  constructor() { }

  contact :Contact={name:"",email:"",message:""};
  contacts: Contact[]=[];

 send(){ 
  this.contact.name = this.name;
  this.contact.email = this.email;
  this.contact.message = this.message;
  console.log(this.contact);

  this.contacts.push(this.contact);
  localStorage.setItem("names", JSON.stringify(this.contacts));
  Swal.fire(
    'Good job!',
    'Votre Message est envoyé!',
    'success'
  )

  this.reset();
 }

 reset(){
  this.name="";
  this.email="";
  this.message="";
 }

  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem("names")) != null)
      this.contacts = JSON.parse(localStorage.getItem("names"));
  }

  write(){
    if(this.name === "")
    this.hasName="";
    else
    this.hasName="has-val";

    if(this.email === "")
    this.hasEmail="";
    else
    this.hasEmail="has-val";

    if(this.message === "")
    this.hasMessage="";
    else
    this.hasMessage="has-val";
  }

}
