import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-description-formation',
  templateUrl: './description-formation.component.html',
  styleUrls: ['./description-formation.component.css']
})
export class DescriptionFormationComponent implements OnInit {


  @Input() concernedPublic: string;
  @Input() prerequis: string;
  @Input() description: string;
  @Input() contenu: string;

  constructor() { }

  ngOnInit(): void {
  }

}
