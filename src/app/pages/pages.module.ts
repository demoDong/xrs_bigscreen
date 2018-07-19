import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { DoEChartsModule } from '../shared/do-echarts/do-echarts.module';
import { ThemeModule } from 'app/@theme/theme.module';
import { AuthGuard } from 'app/pages/auth-guard';
// tslint:disable-next-line:max-line-length
import { DialogModule, ButtonModule, InputTextModule, CheckboxModule, GalleriaModule, OverlayPanelModule } from 'primeng/primeng';
import { DoFrameModule } from '../shared/do-frame/do-frame.module';


import { LoginComponent } from 'app/pages/login/login.component';
import { PagesComponent } from './pages.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IndustryDistributionComponent } from './industryDistribution/IndustryDistribution.component';
import { Page2Component } from './roleModule/page2.component';
// import { SelectItem } from 'primeng/primeng';
// import { DropdownModule } from 'primeng/primeng';
import { HomepagechartsoptionService } from './homepage/homepagechartsoption.service';
import { HomepagedataanylyzeService } from './homepage/homepagedataanalyze.service';
import { Page3Component } from 'app/pages/softwareCity/page3.component';
import { Page2Service } from './roleModule/Page2.service';
import { IndustryDistributionService } from './industryDistribution/IndustryDistribution.service';
import { SoftwareCityService } from './softwareCity/softwareCity.service';
import { UtilsService } from './utils/Utils.service';
import { OpnionAssessComponent } from './opnion-assess/opnion-assess.component';
import { NavigationComponent } from './navigation/navigation.component';

const PAGES_COMPONENTS = [
  PagesComponent,
  LoginComponent,
  HomepageComponent,
  IndustryDistributionComponent,
  NavigationComponent,
  Page2Component,
  Page3Component,
];

const PAGES_MODULES = [
  ThemeModule,
  PagesRoutingModule,
  DoEChartsModule,
  InputTextModule,
  DialogModule,
  ButtonModule,
  DoFrameModule,
  GalleriaModule,
  CheckboxModule,
  OverlayPanelModule,
];

@NgModule({
  imports: [
    ...PAGES_MODULES,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    OpnionAssessComponent,
    NavigationComponent,
  ],
  providers: [
    AuthGuard,
    HomepagechartsoptionService,
    HomepagedataanylyzeService,
    Page2Service,
    IndustryDistributionService,
    SoftwareCityService,
    UtilsService,
  ],
})
export class PagesModule {
}
