import { Component, Input, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/Formation';
import { Theme } from 'src/app/models/Theme';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-theme-formations',
  templateUrl: './theme-formations.component.html',
  styleUrls: ['./theme-formations.component.css']
})
export class ThemeFormationsComponent implements OnInit {

  formations:Formation[] = []
  @Input() theme:Theme

  constructor(private catalogueService:CatalogueService) { }


  ngOnInit(): void {
    this.formations = this.catalogueService.findAll()
  }

}
