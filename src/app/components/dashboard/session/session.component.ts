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
      { field: 'id', header: 'id' },
      { field: 'dateDebut', header: 'dateDebut' },
      { field: 'dateFin', header: 'dateFin' },
      { field: 'duree', header: 'duree' },
      { field: 'validationSession', header: 'validationSession' },
      { field: 'prix', header: 'prix' },
      { field: 'reference', header: 'reference' },
      { field: 'salle', header: 'salle' },
      { field: 'type', header: 'type' },
      { field: 'formateur.nom', header: 'formateur' },
      { field: 'formation.titre', header: 'formation' },
      { field: 'lieu.ville', header: 'lieu' }
    ];
  }
}
