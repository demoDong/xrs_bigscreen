import { Component, OnInit } from '@angular/core';
import { GalleriaModule, SelectItem, DropdownModule, OverlayPanelModule, OverlayPanel } from 'primeng/primeng';
import { SoftwareCityService } from './softwareCity.service';
import { HttpApi, ResponseType } from '../../shared/do-service/http-api.service';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'do-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss'],
})
export class Page3Component implements OnInit {
  meunTitle: String;
  theme: string = 'echart';
  nameMap: string = 'china';

  showImg: string = 'zhongguancun.png';

  // echarts option变量
  leftTopOption: object = {};
  leftMiddleOption: object = {};
  leftBottomOption: object = {};
  middleOption: object = {};
  middleTime: Array<any> = ["2012", "2013", "2014", "2015", "2016", "2017"];
  // 右侧按键以及弹出框数据
  where: string = '福建';
  time: string = '';
  typeBtnData: object = {
    '河南': {
      '2012': ['1', '0', '2', '3', '4'],
      '2013': ['2', '1', '3', '4', '5'],
      '2014': ['3', '2', '4', '5', '6'],
      '2015': ['4', '3', '5', '6', '7'],
      '2016': ['5', '4', '6', '7', '8'],
      '2017': ['6', '5', '7', '8', '9'],
    },
    '福建': {
      '2012': ['100', '0', '20', '300', '40'],
      '2013': ['200', '10', '30', '400', '50'],
      '2014': ['300', '20', '40', '500', '60'],
      '2015': ['400', '30', '50', '600', '70'],
      '2016': ['500', '40', '60', '700', '80'],
      '2017': ['60', '8', '70', '80', '9'],
    },
  }
  typeBtnNum: Array<string> = [];
  activeArr: Array<boolean> = [];
  joinShow: boolean = false;
  joinTitle: string = 'XXXXXXX';
  joinShowData: Array<any> = [];
  jsonDir = './assets/echarts/softwareCity_';
  prefix = '/echartsData/search/findByName?name=softwareCity_';
  isMock = false;
  ifshow4: Boolean = true;
  ifshow5: Boolean = true;
  ifshow6: Boolean = true;
  messageData: any = [];

  constructor(private softwareCityService: SoftwareCityService, private http: HttpClient) {
    this.isMock = environment.isMock;

    //一下代码需要再次优化，一次从数据库取得所有数据，避免反复读取数据库
    this.http.get<ResponseType>(this.isMock ? this.jsonDir + 'policyOption.json' : this.prefix + 'policyOption')
      .subscribe(
        data => {
          // 左上柱状图
          this.leftTopOption = softwareCityService.policyOption(data);
        });

    this.http.get<ResponseType>(this.isMock ? this.jsonDir + 'leftMiddleOption.json' : this.prefix + 'leftMiddleOption')
      .subscribe(
        data => {
          // 左中饼图
          this.leftMiddleOption = softwareCityService.leftMiddleOption(data);
        });



    this.http.get<ResponseType>(this.isMock ? this.jsonDir + 'leftBottomOption.json' : this.prefix + 'leftBottomOption')
      .subscribe(
        data => {
          //左下饼图
          this.leftBottomOption = softwareCityService.leftBottomOption(data);
        });


    this.http.get<ResponseType>(this.isMock ? this.jsonDir + 'middleMapOption_brand.json' : this.prefix + 'middleMapOption_brand')
      .subscribe(
        data => {
          //中间地图
          this.middleOption = softwareCityService.middleMapOption(data);
          this.middleTime = softwareCityService.middleTime(data);
        });

    this.http.get<ResponseType>(this.isMock ? this.jsonDir + 'joinShowData_fujian' + '.json' : this.prefix + 'joinShowData')
      .subscribe(
        data => {
          // 地图弹出框
          this.joinShowData = softwareCityService.joinShowData(data);
        });

    // this.http.get<ResponseType>(this.isMock ? jsonDir+'typeBtnData.json' : prefix+'typeBtnData')
    //   .subscribe(
    //     data => {
    //       // 名品名园等数据
    //       console.log(data)
    //       this.typeBtnData = softwareCityService.typeBtnData(data);
    //     });
  }

  ngOnInit() {
    // 初始化赋值
    this.time = this.middleTime[this.middleTime.length - 1];
    this.typeBtnNum = this.typeBtnData[this.where][this.time];
    for (const iterator of this.typeBtnNum) {
      this.activeArr.push(false);
    }
    this.meunTitle = '软件名城';

    this.typeBtnClick(3);
  }
  // 中间地图点击事件
  middleMapClick(obj, softwarePark) {
    if (this.activeArr[1] === true) {
      this.joinShow = true;
      obj.data.forEach((element, index) => {
        if (index === 4 || index === 5 || index === 6) {
          element ? this['ifshow' + index] = true : this['ifshow' + index] = false;
        }
      });
      this.messageData = obj.data;
    }


    // let rightButtonIndex = 0;
    // for (let i = 0; i < this.activeArr.length; i++) {
    //   if (this.activeArr[i]) {
    //     rightButtonIndex = i;
    //     console.log(rightButtonIndex);
    //     break;
    //   }
    // }

    // if (obj.componentType = 'geo') {
    //   if (rightButtonIndex === 0) {
    //     let cityZH = obj.data[2];
    //     let city;
    //     if (cityZH === "北京") {
    //       city = "beijing";
    //     } else if (cityZH === "成都") {
    //       city = "chengdu";
    //     } else if (cityZH === "福建") {
    //       city = "fujian";
    //     } else if (cityZH === "福州") {
    //       city = "fuzhou";
    //     } else if (cityZH === "哈尔滨") {
    //       city = "haerbin";
    //     } else if (cityZH === "济南") {
    //       city = "jinan";
    //     }
    //     this.http.get<ResponseType>(this.isMock ? this.jsonDir + 'joinShowData_' + city + '.json' : this.prefix + 'joinShowData')
    //       .subscribe(
    //         data => {
    //           // 地图弹出框
    //           this.joinShowData = this.softwareCityService.joinShowData(data);
    //         });
    //     this.where = obj.name;

    //     // 空数据处理
    //     if (this.typeBtnData[this.where] === undefined) {
    //       this.typeBtnNum = [];
    //       for (const iterator of this.activeArr) {
    //         this.typeBtnNum.push('0');
    //       }
    //     } else if (this.typeBtnData[this.where][this.time] === undefined) {
    //       this.typeBtnNum = [];
    //       for (const iterator of this.activeArr) {
    //         this.typeBtnNum.push('0');
    //       }
    //     } else {
    //       this.typeBtnNum = this.typeBtnData[this.where][this.time];
    //     }

    //     this.typeBtnClick(rightButtonIndex);
    //     //名园
    //   } else if (rightButtonIndex === 1) {
    //     let cityZH = obj.data[2];
    //     if (cityZH === "北京") {
    //       this.showImg = "zhongguancun.png";
    //     }
    //     console.log(obj);
    //     softwarePark.toggle(obj);
    //   }
    // }

  }
  // // 中间地图时间切换事件
  // middleMapChange(obj) {
  //   console.log(obj.currentIndex);
  //   this.time = this.middleTime[obj.currentIndex];
  //   // 空数据处理
  //   if (this.typeBtnData[this.where] === undefined) {
  //     this.typeBtnNum = [];
  //     for (const iterator of this.activeArr) {
  //       this.typeBtnNum.push('0');
  //     }
  //   } else if (this.typeBtnData[this.where][this.time] === undefined) {
  //     this.typeBtnNum = [];
  //     for (const iterator of this.activeArr) {
  //       this.typeBtnNum.push('0');
  //     }
  //   } else {
  //     this.typeBtnNum = this.typeBtnData[this.where][this.time];
  //   }
  //   let rightButtonIndex = 0;
  //   for (let i = 0; i < this.activeArr.length; i++) {
  //     if (this.activeArr[i]) {
  //       rightButtonIndex = i;
  //       break;
  //     }
  //   }
  //   this.typeBtnClick(rightButtonIndex);
  // }
  // 右侧分类按钮点击事件
  typeBtnClick(index) {
    this.joinShow = false;
    this.activeArr.fill(false);
    this.activeArr[index] = true;
    console.log(index)
    console.log(this.activeArr)
    // this.joinShow = true;
    // 名品
    if (index === 0) {
      this.http.get<ResponseType>(this.isMock ? this.jsonDir + 'middleMapOption_brand.json' : this.prefix + 'middleMapOption_brand')
        .subscribe(
          data => {
            //中间地图
            this.middleOption = this.softwareCityService.middleMapOption(data);
          });
    }
    // 名园
    if (index === 1) {
      this.http.get<ResponseType>(this.isMock ? this.jsonDir + 'middleMapOption_park.json' : this.prefix + 'middleMapOption_park')
        .subscribe(
          data => {
            //中间地图
            this.middleOption = this.softwareCityService.middleMapOption(data);
          });
    }
    // 名企
    if (index === 4) {
      this.http.get<ResponseType>(this.isMock ? this.jsonDir + 'middleMapOption_company.json' : this.prefix + 'middleMapOption_company')
        .subscribe(
          data => {
            //中间地图
            this.middleOption = this.softwareCityService.middleMapOption(data);
          });
    }

    // 名城
    if (index === 3) {
      this.http.get<ResponseType>(this.isMock ? this.jsonDir + 'middleMapOption_allCity.json' : this.prefix + 'middleMapOption_allCity')
        .subscribe(
          data => {
            //中间地图
            this.middleOption = this.softwareCityService.middleMapOption(data);
          });
    }

  }
  // 弹出框关闭按钮事件
  joinShowBtn() {
    this.joinShow = false;
    // this.activeArr.fill(false);
  }
}
