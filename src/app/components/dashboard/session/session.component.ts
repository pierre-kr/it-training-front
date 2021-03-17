import { Component, OnInit } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { Session } from 'src/app/models/Session';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-session',
  providers: [MessageService],
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css'],
  styles: [`
        :host ::ng-deep .p-cell-editing {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
        }
    `]
})
export class SessionComponent implements OnInit {

 
  statuses: SelectItem[];

  clonedSessions: { [s: string]: Session; } = {};

  sessions: Session[];
  cols: any[];

  constructor(private sessionService: SessionService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.sessionService.getCarsSmall().then(Sessions => { this.sessions = Sessions; console.log(this.sessions); });

    this.cols = [
      { field: 'duree', header: 'Duree' },
      { field: 'validationSession', header: 'Validation Session' },
      { field: 'prix', header: 'Prix' },
      { field: 'reference', header: 'Reference' },
      { field: 'salle', header: 'Salle' },
      { field: 'type', header: 'Type' },
      { field: 'formateur.nom', header: 'Formateur' },
      { field: 'formation.titre', header: 'Formation' },
      { field: 'lieu.ville', header: 'Lieu' }
    ];
  }
}
