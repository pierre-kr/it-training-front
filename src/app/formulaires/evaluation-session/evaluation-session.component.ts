import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EvaluationService } from 'src/app/services/evaluation.service';

@Component({
  selector: 'app-evaluation-session',
  templateUrl: './evaluation-session.component.html',
  styleUrls: ['./evaluation-session.component.css']
})
export class EvaluationSessionComponent implements OnInit {

  criteres = ['accueil', 'disponibilite', 'machines', 'maitriseDomaine', 'pedagogie', 'repas', 'reponseAuxQuestion', 'salle', 'techniqueAnimation'];
  criteresFront = ['Accueil', 'Disponibilité', 'Machines', 'Maîtrise du domaine', 'Pédagogie', 'Repas', 'Réponses aux questions', 'Salle', 'Techniques d\'animation'];
  notes = ['Très insatisfait', 'Insatisfait', 'Neutre', 'Satisfait', 'Très satisfait'];

  apprenantGet: FormGroup;
  sessionFormulaire: FormGroup;
  evaluationFormulaire: FormGroup;

  constructor(private formBuilder: FormBuilder, private evaluationService: EvaluationService) {
    this.apprenantGet = new FormGroup({
      email : new FormControl('')
    });
    this.sessionFormulaire = new FormGroup({
      session : new FormControl('')
    });
    this.evaluationFormulaire = this.formBuilder.group({
      accueil : [''],
      disponibilite : [''],
      machines: [''],
      maitriseDomaine : [''],
      pedagogie : [''],
      repas : [''],
      reponseAuxQuestion : [''],
      salle : [''],
      techniqueAnimation : ['']
    });
  }

  ngOnInit(): void {
  }

  checkApprenant(): void {
      this.apprenantGet.patchValue({
        email: this.apprenantGet.get('email').value
      });
      console.log(this.apprenantGet.get('email').value);
  }

  onSubmit = () => {
    console.log(this.evaluationFormulaire.value);
    this.evaluationService.create(this.evaluationFormulaire.value).subscribe(console.log);
  }
}
