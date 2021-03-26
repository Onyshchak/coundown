import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  state: LayoutState = LayoutState.expanded;
  LayoutState = LayoutState;
  menuItems: any[] = [
    {title: 'Innovation', fileName: 'Innovation.jpg'},
    // {title: 'Covid 19 Regimen', fileName: 'Damaged Cracked skin.jpg'},
    {title: 'Damaged Cracked skin', fileName: 'Damaged Cracked skin.jpg'},
    {title: 'Dry Skin', fileName: 'Dry skin.jpg'},
    {title: 'Download Center', fileName: 'Download center.jpg'},
    {title: 'Time For A Selfie', fileName: 'Time for selfie.jpg'},
    {title: 'Showcase', fileName: 'Showcase.jpg'},
    {title: 'Product Display', fileName: 'Product display.jpg'},
    {title: 'Registration', fileName: 'Registration.jpg'},
    {title: 'Unna Academy', fileName: 'Unna academy.jpg'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  changeState(state: LayoutState): void {
    this.state = state;
  }
}

enum LayoutState {
  expanded,
  rolled,
  menu
}
