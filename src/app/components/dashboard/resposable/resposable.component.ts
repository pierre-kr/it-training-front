import { Component, OnInit } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { Responsable } from 'src/app/models/Responsable';
import { ResponsableService } from 'src/app/services/responsable.service';

@Component({
  selector: 'app-resposable',
  providers: [MessageService],
  templateUrl: './resposable.component.html',
  styleUrls: ['./resposable.component.css'],
  styles: [`
        :host ::ng-deep .p-cell-editing {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
        }
    `]
})
export class ResposableComponent implements OnInit {


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
      { field: 'civilite', header: 'civilite' },
      { field: 'email', header: 'email' },
      { field: 'entreprise', header: 'entreprise' },
      { field: 'tel', header: 'tel' },
      { field: 'fonction', header: 'fonction' }
    ];
  }

  // onRowEditInit(Responsable: Responsable) {
  //   console.log(Responsable);
  //   this.clonedResponsables[Responsable.id] = { ...Responsable };
  // }
  // onRowEditSave(Responsable: Responsable) {
  //   delete this.clonedResponsables[Responsable.id];
  //   this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product is updated' });

  // }

  // onRowEditCancel(Responsable: Responsable, index: number) {
  //   this.Responsables[index] = this.clonedResponsables[Responsable.id];
  //   delete this.clonedResponsables[Responsable.id];
  // }
}
