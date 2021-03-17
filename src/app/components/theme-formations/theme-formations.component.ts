import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Formation } from 'src/app/models/Formation';
import { Theme } from 'src/app/models/Theme';

@Component({
  selector: 'app-theme-formations',
  templateUrl: './theme-formations.component.html',
  styleUrls: ['./theme-formations.component.css'],
})
export class ThemeFormationsComponent implements OnInit {

  @Input() theme: Theme;
  formation: Formation;

  constructor() { }

  ngOnInit(): void {
  }

}
