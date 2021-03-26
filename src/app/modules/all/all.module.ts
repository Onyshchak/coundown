import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AllRoutingModule} from './all-routing.module';
import {IndexAllComponent} from './index-all/index-all.component';
import {DownloadCenterComponent} from './components/download-center/download-center.component';
import {GreetingComponent} from './components/greeting/greeting.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {SurveyComponent} from './components/survey/survey.component';
import {RouterModule} from '@angular/router';
import {DamagedSkinComponent} from './components/damaged-skin/damaged-skin.component';
import {DrySkinComponent} from './components/dry-skin/dry-skin.component';
import {InnovationComponent} from './components/innovation/innovation.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    IndexAllComponent,
    DownloadCenterComponent,
    GreetingComponent,
    NavbarComponent,
    RegistrationComponent,
    SurveyComponent,
    DamagedSkinComponent,
    DrySkinComponent,
    InnovationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AllRoutingModule,
    ReactiveFormsModule
  ]
})
export class AllModule { }
