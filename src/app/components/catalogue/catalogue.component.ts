import { Component, OnInit, Output } from '@angular/core';
import { Theme } from 'src/app/models/Theme';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  themes:Theme[]

  constructor(private catalogueService:CatalogueService) { }


  ngOnInit(): void {
    this.themes = this.catalogueService.findAllThemes()
  }

}
