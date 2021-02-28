import { Component, OnInit } from '@angular/core';
import { Session } from 'src/app/models/Session';
import { SessionService } from 'src/app/services/session.service';
import { Formation } from 'src/app/models/Formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-important-informations-formation',
  templateUrl: './important-informations-formation.component.html',
  styleUrls: ['./important-informations-formation.component.css']
})
export class ImportantInformationsFormationComponent implements OnInit {

  session:Session
  formation:Formation

  constructor(private sessionService:SessionService, private formationService: FormationService) { }

  ngOnInit(): void {
    this.session = this.sessionService.findById(1);
    this.formation = this.formationService.findById(1);
    console.log(this.session);
  }
}
