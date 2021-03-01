import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  navbarOpen = 'collapsible__content';

  toggleNavbar() {
    this.navbarOpen =
      this.navbarOpen === 'collapsible--expanded'
        ? 'collapsible__content'
        : 'collapsible--expanded';
  }
}
