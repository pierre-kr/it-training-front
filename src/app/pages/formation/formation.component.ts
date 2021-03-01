import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/Formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {


  formation: Formation;

  constructor(private formationService: FormationService) { }

  ngOnInit(): void {
    this.formation = this.formationService.findById(1);
  }

}
