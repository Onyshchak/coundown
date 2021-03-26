import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dry-skin',
  templateUrl: './dry-skin.component.html',
  styleUrls: ['./dry-skin.component.css']
})
export class DrySkinComponent implements OnInit {
  allowOtherAnswer = false;
  color = 'rgb(0, 48, 94)';
  question = 'How do you rate the <b>importance of skin care adjunctive to systemic oncotherapy?</b>';
  answers: string[] = [
    'Very high, I recommended mainly products with proven activities and efficacy data for oncology patients',
    'High importance, I recommended products that help in general for dry skin',
    'Skin care is a "nice to have" add-on',
    'Not in the focus at all, patients have other problems'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
