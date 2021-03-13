import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Participe } from 'src/app/models/Participe';
import { Session } from 'src/app/models/Session';
import { ParticipeService } from 'src/app/services/participe.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-inscription-session',
  templateUrl: './inscription-session.component.html',
  styleUrls: ['./inscription-session.component.css']
})
export class InscriptionSessionComponent implements OnInit {

  id: number;
  participeFormulaire: FormGroup;
  session: Session;
  @Output() ajoutParticipants = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private participeService: ParticipeService, private sessionService: SessionService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.id = params.id;
    });
    this.sessionService.findById(this.id).subscribe((sessionTrouvee) => {
      this.session = sessionTrouvee;
    });
    this.participeFormulaire = this.formBuilder.group({

      session: [],
      apprenant: this.formBuilder.group({
        civilite: [''],
        nom: [''],
        prenom: [''],
        societe: [''],
        fonction: [''],
        telephone: [''],
        email: [''],
        lieu: this.formBuilder.group({
          numero: [''],
          rue: [''],
          codepostal: [''],
          ville: ['']
        })
      })
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params.id;
    });
    this.sessionService.findById(this.id).subscribe((sessionTrouvee) => {
      this.session = sessionTrouvee;
    });
    // console.log(this.session)
  }

  onSubmit = () => {
    const participe: Participe = this.participeFormulaire.value;
    participe.session = this.session;
    console.log(this.participeFormulaire.value);
    this.participeService.create(this.participeFormulaire.value).subscribe(console.log);
  }
}
