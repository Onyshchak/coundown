import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-all',
  templateUrl: './index-all.component.html',
  styleUrls: ['./index-all.component.scss']
})
export class IndexAllComponent implements OnInit {
  links: string[] = ['download-center', 'greeting', 'navbar', 'registration', 'innovation', 'dry-skin', 'damaged-skin']

  constructor() { }

  ngOnInit(): void {
  }

}
