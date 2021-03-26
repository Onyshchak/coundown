import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {IndexAllComponent} from './index-all/index-all.component';
import {DownloadCenterComponent} from './components/download-center/download-center.component';
import {GreetingComponent} from './components/greeting/greeting.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {InnovationComponent} from './components/innovation/innovation.component';
import {DrySkinComponent} from './components/dry-skin/dry-skin.component';
import {DamagedSkinComponent} from './components/damaged-skin/damaged-skin.component';


const routes: Routes = [
  {
    path: '',
    component: IndexAllComponent,
    children: [
      {
        path: 'download-center',
        component: DownloadCenterComponent,
      },
      {
        path: 'greeting',
        component: GreetingComponent,
      },
      {
        path: 'navbar',
        component: NavbarComponent,
      },
      {
        path: 'registration',
        component: RegistrationComponent,
      },
      {
        path: 'innovation',
        component: InnovationComponent,
      },
      {
        path: 'dry-skin',
        component: DrySkinComponent,
      },
      {
        path: 'damaged-skin',
        component: DamagedSkinComponent,
      }
    ]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllRoutingModule { }
