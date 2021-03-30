import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {CountdownTimerComponent} from './start-page/countdown-timer/countdown-timer.component';


const routes: Routes = [
  {
    path: '**',
    component: CountdownTimerComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
