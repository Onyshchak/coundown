import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  days: number | string;
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
  // April 15th at 7:00 CET
  endDate = new Date(new Date(2021, 3, 15, 7).toLocaleString('en-US', {timeZone: 'Europe/Berlin'})).getTime();

  constructor() { }

  ngOnInit(): void {
    interval(1000).subscribe(() => {
      this.calcTime();
    });
  }

  calcTime(): void {
    const timeExists = this.endDate - this.getCETDate();
    this.days = Math.floor(timeExists / (24 * 3600 * 1000));
    this.hours = ('0' + Math.floor(timeExists / (3600 * 1000)) % 24).slice(-2);
    this.minutes = ('0' + Math.floor(timeExists / (60 * 1000)) % 60).slice(-2);
    this.seconds = ('0' + Math.floor(timeExists / (1000)) % 60).slice(-2);
  }

  getCETDate(): number {
    return new Date(new Date().toLocaleString('en-US', {timeZone: 'Europe/Berlin'})).getTime();
  }
}
