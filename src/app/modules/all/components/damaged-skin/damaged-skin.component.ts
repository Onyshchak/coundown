import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-damaged-skin',
  templateUrl: './damaged-skin.component.html',
  styleUrls: ['./damaged-skin.component.css']
})
export class DamagedSkinComponent implements OnInit {
  allowOtherAnswer = true;
  color = 'rgb(0, 48, 94)';
  question = '<b>What are the most unaddressed needs in patients suffering from skin side effects of systemic and/or topical oncotherapy?</b>';
  answers: string[] = [
    'Dry & Irritated Skin',
    'Hyperkeratotic Conditions',
    'Sensitive skin associated to therapy',
    'Hand-foot syndrome'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
