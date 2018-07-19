import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { AuthGuard } from 'app/pages/auth-guard';
import { LoginComponent } from 'app/pages/login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IndustryDistributionComponent } from './industryDistribution/IndustryDistribution.component';
import { Page2Component } from 'app/pages/roleModule/page2.component';
import { Page3Component } from 'app/pages/softwareCity/page3.component';
import { OpnionAssessComponent } from 'app/pages/opnion-assess/opnion-assess.component';
import { NavigationComponent } from './navigation/navigation.component';
const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'navigation',
    component: NavigationComponent,
  }, {
    path: 'homepage',
    component: HomepageComponent,
    canActivate: [AuthGuard],
  }, {
    path: 'industryDistribution',
    component: IndustryDistributionComponent,
    canActivate: [AuthGuard],
  }, {
    path: 'roleModule',
    component: Page2Component,
    canActivate: [AuthGuard],
  }, {
    path: 'softwareCity',
    component: Page3Component,
    canActivate: [AuthGuard],
  }, {
    path: 'opnion-assess',
    component: OpnionAssessComponent,
    canActivate: [AuthGuard],
  }, {
    path: 'login',
    component: LoginComponent,
  }, {
    path: '',
    component: LoginComponent,
    canActivate: [AuthGuard],
  }, {
    path: '**',
    component: LoginComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
