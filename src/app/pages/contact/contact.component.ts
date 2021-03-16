import { Component, OnInit } from '@angular/core';

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

  ngOnInit(): void {
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
