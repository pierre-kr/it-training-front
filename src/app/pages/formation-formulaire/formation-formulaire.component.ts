import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Theme } from 'src/app/models/Theme';
import { FormationService } from 'src/app/services/formation.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-formation-formulaire',
  templateUrl: './formation-formulaire.component.html',
  styleUrls: ['./formation-formulaire.component.css']
})
export class FormationFormulaireComponent implements OnInit {


  formationForm: FormGroup;
  allThemes: Theme[];

  domaines = [];

  themes = [];

  sousThemes = [];

  selectedDomaine: Theme;
  selectedTheme: Theme;
  selectedSousTheme: Theme;

  constructor(private formBuilder: FormBuilder, private formationService: FormationService, private themeService: ThemeService) {
    this.themeService.findAll().subscribe((themes) => {
      this.allThemes = themes;
      this.allThemes.forEach(themeCourant => {
        if (themeCourant.idParent == null) {
          this.domaines.push(themeCourant);
        }
      });
      this.allThemes.forEach(themeCourant => {
        if (this.domaines.find((domaine) => domaine.id === themeCourant.idParent)) {
          this.themes.push(themeCourant);
        }
      });
      this.allThemes.forEach(themeCourant => {
        if (this.themes.find((theme) => theme.id === themeCourant.idParent)) {
          this.sousThemes.push(themeCourant);
        }
      });
      console.log(this.allThemes);
      console.log(this.sousThemes);
    });
    this.formationForm = formBuilder.group({
      audience: [''],
      contenu: [''],
      description: [''],
      lienTest: [''],
      prerequis: [''],
      reference: [''],
      titre: [''],
      theme: []
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.formationService.create(this.formationForm.value).subscribe((formation) => {
      console.log(formation);
    });
  }

}
