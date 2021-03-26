import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-innovation',
  templateUrl: './innovation.component.html',
  styleUrls: ['./innovation.component.css']
})
export class InnovationComponent implements OnInit {
  allowOtherAnswer = true;
  color = 'rgb(242, 143, 0)';
  question = 'Given the multitude of options available for the treatment <b>of Actinic Keratosis, what is your preferred one</b> (if in consensus with patient-, lesional and treatment-related';
  answers: string[] = [
    'Wait and watch - recommendation of SPF - most lesions disappear without treatment',
    'Regular monitoring and use of high SPF (100)',
    'Depending on clinical situation application of PDT or topical agents (5-FU, Diclofenac, Imiquimod)',
    'Always the knife!'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
