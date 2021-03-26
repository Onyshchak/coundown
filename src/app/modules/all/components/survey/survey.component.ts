import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  @Input() allowOtherAnswer: boolean;
  @Input() color: string;
  @Input() question: string;
  @Input() answers: string[];
  symbols: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
  surveyForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.surveyForm = this.fb.group({
      selected: [null, Validators.required],
      custom: [null]
    });
  }

  setAnswer(answer: string): void {
    if (this.surveyForm.get('selected').value === answer) {
      this.surveyForm.get('selected').setValue(null);
    } else {
      this.surveyForm.get('selected').setValue(answer);
    }
  }

  submit(): void {

  }
}
