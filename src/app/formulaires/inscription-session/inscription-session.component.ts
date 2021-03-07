import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApprenantService } from 'src/app/services/apprenant.service';

@Component({
  selector: 'app-inscription-session',
  templateUrl: './inscription-session.component.html',
  styleUrls: ['./inscription-session.component.css']
})
export class InscriptionSessionComponent implements OnInit {

  apprenant:FormGroup;

  @Output() ajoutParticipants = new EventEmitter();

  constructor(private formBuilder:FormBuilder, private apprenantService:ApprenantService) {
    this.apprenant = formBuilder.group({
      civilite : [''],
      nom : [''],
      prenom : [''],
      societe : [''],
      fonction : [''],
      telephone : [''],
      email : [''],
      adresse : ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit = () => {
    this.ajoutParticipants.emit(this.apprenant.value)
  }
}
