import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'do-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  meunTitle: String;
  ifshowmeun: Boolean;
  // items = [
  //   {
  //     label: '首页', routerLink: ['/pages/homepage'],
  //   },
  //   {
  //     label: '区域布局', routerLink: ['/pages/industryDistribution'],
  //   },
  //   {
  //     label: '软件名城', routerLink: ['/pages/softwareCity'],
  //   }, {
  //     label: '软件名园', routerLink: ['/pages/softwareCity'],
  //   },
  //   {
  //     label: '优秀案例', routerLink: ['/pages/roleModule'],
  //   },
  //   {
  //     label: '舆情分析', routerLink: ['/pages/opnion-assess'],
  //   },
  // ];
  items = [
    {
      label: '行业运行', routerLink: ['/pages/homepage'],
    },
    {
      label: '行业服务', routerLink: ['/pages/roleModule'],
    },
    {
      label: '产业布局', routerLink: ['/pages/industryDistribution'],
    },
    {
      label: '舆情动态', routerLink: ['/pages/opnion-assess'],
    },
  ];
  constructor(private router: Router, private zone: NgZone) { }

  ngOnInit() {
    this.ifshowmeun = false;
    this.meunTitle = '目录导航';
  }
  btnClicked(e, path) {
    this.zone.run(() => {
      this.router.navigate(path);
    });
  }
}

