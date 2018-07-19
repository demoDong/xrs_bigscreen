import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { RouteCacheService } from './../do-service/route-cache.service';
import { MenuItem } from 'primeng/components/common/api';

@Component({
  selector: 'do-frame',
  templateUrl: 'do-frame.component.html',
  styleUrls: ['do-frame.component.scss'],
})
export class DoFrameComponent implements OnInit {
  items: MenuItem[];
  @Input() meunTitle: String;
  @Input() ifshowmeun: Boolean = true;
  constructor(private router: Router, private zone: NgZone) {
  }
  ngOnInit() {
    this.items = [
      {
        label: '首页', routerLink: ['/pages/homepage'],
      },
      {
        label: '产业布局', routerLink: ['/pages/industryDistribution'],
      },
      {
        label: '软件名城', routerLink: ['/pages/softwareCity'],
      },
      {
        label: '优秀案例', routerLink: ['/pages/roleModule'],
      },
      {
        label: '舆情动态', routerLink: ['/pages/opnion-assess'],
      },
    ];
  }
  return() {
    this.zone.run(() => {
      this.router.navigate(['pages/navigation']);
    });
  }

}
