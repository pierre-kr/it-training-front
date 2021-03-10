import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormateurService } from 'src/app/services/formateur.service';

@Component({
  selector: 'app-formateur-formulaire',
  templateUrl: './formateur-formulaire.component.html',
  styleUrls: ['./formateur-formulaire.component.css']
})
export class FormateurFormulaireComponent implements OnInit {

  formateurForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private formateurService: FormateurService) {

    this.formateurForm = formBuilder.group({
      nom: [''],
      prenom: [''],
      civilite: [''],
      fonction: [''],
      entreprise: [''],
      email: [''],
      tel: ['']
    });

    this.formateurService.findAll().subscribe((formateur) => { console.log(formateur); });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.formateurService.create(this.formateurForm.value).subscribe();
  }

}
