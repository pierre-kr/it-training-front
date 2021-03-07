import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-formation-formulaire',
  templateUrl: './formation-formulaire.component.html',
  styleUrls: ['./formation-formulaire.component.css']
})
export class FormationFormulaireComponent implements OnInit {


  formationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private formationService: FormationService) {
    this.formationForm = formBuilder.group({
      audience: [''],
      contenu: [''],
      description: [''],
      lienTest: [''],
      prerequis: [''],
      reference: [''],
      titre: ['']
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
