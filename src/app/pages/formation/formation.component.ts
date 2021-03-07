import { Component, Input, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/Formation';
import { FormationService } from 'src/app/services/formation.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  id: number;
  formation: Formation;

  constructor(private formationService: FormationService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
      this.id = params.id;
    });
    this.formationService.findById(this.id).subscribe((formation) => {
      this.formation = formation;
    }, (error) => {
      this.router.navigate(['/404']);
    })
  }

}
