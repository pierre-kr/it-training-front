import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  footerOpenApropos = 'collapsible__content';
  footerOpenFormation = 'collapsible__content';
  footerOpenAide = 'collapsible__content';
  footerOpenOffre = 'collapsible__content';

  iconOpenApropos = 'collapsible__chevron';
  iconOpenFormation = 'collapsible__chevron';
  iconOpenAide = 'collapsible__chevron';
  iconOpenOffre = 'collapsible__chevron';

  toggleFooterApropos() {
    this.footerOpenApropos =
      this.footerOpenApropos === 'collapsible--expanded'
        ? 'collapsible__content'
        : 'collapsible--expanded';

    this.iconOpenApropos =
      this.iconOpenApropos === 'collapsible--expanded'
        ? 'collapsible__chevron'
        : 'collapsible--expanded';
  }
  toggleFooterFormation() {
    this.footerOpenFormation =
      this.footerOpenFormation === 'collapsible--expanded'
        ? 'collapsible__content'
        : 'collapsible--expanded';

    this.iconOpenFormation =
      this.iconOpenFormation === 'collapsible--expanded'
        ? 'collapsible__chevron'
        : 'collapsible--expanded';
  }
  toggleFooterAide() {
    this.footerOpenAide =
      this.footerOpenAide === 'collapsible--expanded'
        ? 'collapsible__content'
        : 'collapsible--expanded';

    this.iconOpenAide =
      this.iconOpenAide === 'collapsible--expanded'
        ? 'collapsible__chevron'
        : 'collapsible--expanded';
  }
  toggleFooterOffre() {
    this.footerOpenOffre =
      this.footerOpenOffre === 'collapsible--expanded'
        ? 'collapsible__content'
        : 'collapsible--expanded';

    this.iconOpenOffre =
      this.iconOpenOffre === 'collapsible--expanded'
        ? 'collapsible__chevron'
        : 'collapsible--expanded';
  }
}
