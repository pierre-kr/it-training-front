import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private formBuilder: FormBuilder, private sessionService: SessionService, private participeService: ParticipeService,
    private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.id = params.id;
    });
    this.sessionService.findById(this.id).subscribe((sessionTrouvee) => {
      this.session = sessionTrouvee;
    });
    this.participeFormulaire = this.formBuilder.group({

      session: [],
      apprenant: this.formBuilder.group({
        civilite: ['', Validators.required],
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
        societe: [''],
        fonction: [''],
        tel: [''],
        email: ['', Validators.required],
        lieu: this.formBuilder.group({
          num: ['', Validators.required],
          rue: ['', Validators.required],
          cp: ['', Validators.required],
          ville: ['', Validators.required]
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
    if (this.participeFormulaire.status === 'VALID') {
      this.participeService.create(this.participeFormulaire.value).subscribe(console.log);
      this.router.navigate(['/home']);
    }
  }
}
