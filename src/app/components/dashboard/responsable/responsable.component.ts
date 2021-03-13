import { Component, OnInit } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { Responsable } from 'src/app/models/Responsable';
import { ResponsableService } from 'src/app/services/responsable.service';

@Component({
  selector: 'app-resposable',
  providers: [MessageService],
  templateUrl: './responsable.component.html',
  styleUrls: ['./responsable.component.css'],
  styles: [`
        :host ::ng-deep .p-cell-editing {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
        }
    `]
})
export class ResponsableComponent implements OnInit {


  statuses: SelectItem[];

  clonedResponsables: { [s: string]: Responsable; } = {};

  responsables: Responsable[];
  cols: any[];

  constructor(private responsableService: ResponsableService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.responsableService.getCarsSmall().then(Responsables => { this.responsables = Responsables; console.log(this.responsables); });

    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'nom', header: 'nom' },
      { field: 'prenom', header: 'prenom' },
      { field: 'email', header: 'email' },
      { field: 'tel', header: 'tel' },
      { field: 'fonction', header: 'fonction' }
    ];
  }
}
