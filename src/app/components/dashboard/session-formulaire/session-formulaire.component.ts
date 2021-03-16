import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Formateur } from 'src/app/models/Formateur';
import { Formation } from 'src/app/models/Formation';
import { Theme } from 'src/app/models/Theme';
import { FormateurService } from 'src/app/services/formateur.service';
import { SessionService } from 'src/app/services/session.service';
import { ThemeService } from 'src/app/services/theme.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-session-formulaire',
  templateUrl: './session-formulaire.component.html',
  styleUrls: ['./session-formulaire.component.css']
})
export class SessionFormulaireComponent implements OnInit {



  selectedFormateur: Formateur;
  selectedFormation: Formation;

  sessionForm: FormGroup;
  formateurs: Formateur[];
  themes: Theme[];

  constructor(
    private formBuilder: FormBuilder,
    private formateurService: FormateurService,
    private sessionService: SessionService,
    private themeService: ThemeService) {

    this.formateurService.findAll().subscribe((formateurs) => {
      this.formateurs = formateurs;
      console.log(this.formateurs);
    });
    this.themeService.findAll().subscribe((themes) => {
      this.themes = themes.filter((theme) => theme.formations.length > 0);
      console.log(this.themes);
    });

    this.sessionForm = this.formBuilder.group({
      formation: [],
      dateDeb: [''],
      dateFin: [''],
      duree: [''],
      prix: [''],
      salle: [''],
      type: [''],
      lieu: this.formBuilder.group({
        ville: ['']
      }),
      formateur: []
    });
  }

  ngOnInit(): void {
  }


  onSubmit(): void {
    this.sessionService.create(this.sessionForm.value).subscribe(() => {
      Swal.fire(
        'Good job!',
        'Vous avez enregistrer une nouvelle session!',
        'success'
      )
      this.sessionForm.reset();
    });
  }
}
