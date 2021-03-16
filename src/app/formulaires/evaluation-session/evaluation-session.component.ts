import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Apprenant } from 'src/app/models/Apprenant';
import { Evaluation } from 'src/app/models/Evaluation';
import { Participe } from 'src/app/models/Participe';
import { Session } from 'src/app/models/Session';
import { ApprenantService } from 'src/app/services/apprenant.service';
import { EvaluationService } from 'src/app/services/evaluation.service';
import { ParticipeService } from 'src/app/services/participe.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-evaluation-session',
  templateUrl: './evaluation-session.component.html',
  styleUrls: ['./evaluation-session.component.css']
})
export class EvaluationSessionComponent implements OnInit {

  session: Session;
  apprenant: Apprenant;
  participe: Participe;
  id: number;
  email: string;
  sessionId: number;

  criteres = ['accueil', 'disponibilite', 'machines', 'maitriseDomaine', 'pedagogie', 'repas', 'reponseAuxQuestion', 'salle', 'techniqueAnimation'];
  criteresFront = ['Accueil', 'Disponibilité', 'Machines', 'Maîtrise du domaine', 'Pédagogie', 'Repas', 'Réponses aux questions', 'Salle', 'Techniques d\'animation'];
  notes = ['Très insatisfait', 'Insatisfait', 'Neutre', 'Satisfait', 'Très satisfait'];

  apprenantFormulaire: FormGroup;
  sessionFormulaire: FormGroup;
  evaluationFormulaire: FormGroup;

  constructor(private formBuilder: FormBuilder, private evaluationService: EvaluationService, 
    private participeService: ParticipeService, private sessionService: SessionService, private route: ActivatedRoute,
    private router: Router) {
      this.route.queryParams.subscribe(params => {
        this.id = params.id;
      });
      this.participeService.findById(this.id).subscribe((participe) => {
        this.participe = participe;
      })
      this.evaluationFormulaire = this.formBuilder.group({
        accueil : ['', Validators.required],
        disponibilite : ['', Validators.required],
        machines: ['', Validators.required],
        maitriseDomaine : ['', Validators.required],
        pedagogie : ['', Validators.required],
        repas : ['', Validators.required],
        reponseAuxQuestion : ['', Validators.required],
        salle : ['', Validators.required],
        techniqueAnimation : ['', Validators.required]
      });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params.id;
    });
    this.participeService.findById(this.id).subscribe((participe) => {
      this.participe = participe;
    })
  }

  saveEvaluation = () => {
    const evaluation: Evaluation = this.evaluationFormulaire.value;
    this.participe.evaluation = evaluation;
    console.log(this.participe);
    if (this.evaluationFormulaire.status === 'VALID') {
      this.participeService.update(this.participe).subscribe(console.log);
      this.router.navigate(['/home']);
    }
  }
}
