import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ResponsableService } from 'src/app/services/Responsable.service';

@Component({
  selector: 'app-responsable-formulaire',
  templateUrl: './Responsable-formulaire.component.html',
  styleUrls: ['./Responsable-formulaire.component.css']
})
export class ResponsableFormulaireComponent implements OnInit {

  responsableForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private responsableService: ResponsableService) {

    this.responsableForm = formBuilder.group({
      nom: [''],
      prenom: [''],
      civilite: [''],
      fonction: [''],
      entreprise: [''],
      email: [''],
      tel: ['']
    });

    this.responsableService.findAll().subscribe((responsable) => { console.log(responsable); });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.responsableService.create(this.responsableForm.value).subscribe();
  }

}
