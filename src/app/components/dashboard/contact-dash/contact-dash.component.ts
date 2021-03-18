import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/Contact';

@Component({
  selector: 'app-contact-dash',
  templateUrl: './contact-dash.component.html',
  styleUrls: ['./contact-dash.component.css']
})
export class ContactDashComponent implements OnInit {
  contact :Contact={name:"",email:"",message:""};
  contacts: Contact[]=[];
  constructor() { }

  ngOnInit(): void {
    this.contacts = JSON.parse(localStorage.getItem("names"));
  }

}
