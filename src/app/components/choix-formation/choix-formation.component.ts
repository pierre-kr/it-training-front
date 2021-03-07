import { Component, Input, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/Formation';

@Component({
  selector: 'app-choix-formation',
  templateUrl: './choix-formation.component.html',
  styleUrls: ['./choix-formation.component.css']
})
export class ChoixFormationComponent implements OnInit {

  @Input() formation:Formation;

  constructor() { }

  ngOnInit(): void {

  }

}
