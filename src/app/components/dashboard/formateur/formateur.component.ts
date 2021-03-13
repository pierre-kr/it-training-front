import { Component, OnInit } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { Formateur } from 'src/app/models/Formateur';
import { FormateurService } from 'src/app/services/formateur.service';

@Component({
  selector: 'app-formateur',
  providers: [MessageService],
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css'],
  styles: [`
        :host ::ng-deep .p-cell-editing {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
        }
    `]
})
export class FormateurComponent implements OnInit {


  statuses: SelectItem[];

  clonedFormateurs: { [s: string]: Formateur; } = {};

  formateurs: Formateur[];
  cols: any[];

  constructor(private formateurService: FormateurService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.formateurService.getCarsSmall().then(formateurs => { this.formateurs = formateurs; console.log(this.formateurs); });

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

  // onRowEditInit(formateur: Formateur) {
  //   console.log(formateur);
  //   this.clonedFormateurs[formateur.id] = { ...formateur };
  // }
  // onRowEditSave(formateur: Formateur) {
  //   delete this.clonedFormateurs[formateur.id];
  //   this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product is updated' });

  // }

  // onRowEditCancel(formateur: Formateur, index: number) {
  //   this.formateurs[index] = this.clonedFormateurs[formateur.id];
  //   delete this.clonedFormateurs[formateur.id];
  // }
}
