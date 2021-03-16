import { Component, OnInit } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { Formation } from 'src/app/models/Formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-formation-tab',
  providers: [MessageService],
  templateUrl: './formationTab.component.html',
  styleUrls: ['./formationTab.component.css'],
  styles: [`
        :host ::ng-deep .p-cell-editing {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
        }
    `]
})
export class FormationTabComponent implements OnInit {


  statuses: SelectItem[];

  clonedFormations: { [s: string]: Formation; } = {};

  formations: Formation[];
  cols: any[];

  constructor(private formationService: FormationService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.formationService.getCarsSmall().then(formations => { this.formations = formations; console.log(this.formations); });

    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'audience', header: 'audience' },
      { field: 'contenu', header: 'contenu' },
      { field: 'description', header: 'description' },
      { field: 'lienTest', header: 'lienTest' },
      { field: 'prerequis', header: 'prerequis' },
      { field: 'reference', header: 'reference' },
      { field: 'titre', header: 'titre' }
    ];
  }

  // onRowEditInit(formation: Formation) {
  //   console.log(formation);
  //   this.clonedFormations[formation.id] = { ...formation };
  // }
  // onRowEditSave(formation: Formation) {
  //   delete this.clonedFormations[formation.id];
  //   this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product is updated' });

  // }

  // onRowEditCancel(formation: Formation, index: number) {
  //   this.formations[index] = this.clonedFormations[formation.id];
  //   delete this.clonedFormations[formation.id];
  // }
}
