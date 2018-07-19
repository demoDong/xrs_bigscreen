import { Component, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/primeng';
import { Page2Service } from './Page2.service';
import { HttpApi, ResponseType } from '../../shared/do-service/http-api.service';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'do-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
})
export class Page2Component implements OnInit {

  meunTitle: String;
  theme = 'echart';
  nameMap = 'china';
  images: any[];
  leftTopMapOption = {};
  leftBottomMapOption = {};
  leftBottoData = [];
  middleOption = {};
  dataFinancial = {};
  rightListOption1 = {};
  buttondetailArr = [
    { name: '申报案例', type: 'shenbao' },
    { name: '优秀案例', type: 'good' },
  ];
  buttonYearArr = ['2016', '2017'];
  btnshowheigharr: Array<boolean>;
  yearbtnshowheigharr: Array<boolean>;
  clickBtn: any;
  yearBtn: any;
  yearChose: any;
  topList = [];
  topFirstList = [];
  leftMiddleData = [];

  isshow = false;
  echartsProvinceTop10Option = {};
  isMock = false;
  ifshowdetail: Boolean = false;
  isShowImg: Boolean = true;

  provinceTop10Data: any;
  mapData: any;
  mapType: String;
  mapName: String;
  list1: any;
  list1_num: Number;
  list2: any;
  list2_num: Number;
  list3: any;
  rightTopTotalData: any;
  rightTopchildData: any;
  leftBottomData: any;
  leftBottomColor = ['rgba(144,255,255,0.3)', 'rgba(228,226,80,0.3)', 'rgba(159,229,80,0.3)', 'rgba(210,75,27,0.3)',
    'rgba(102,64,240,0.3)', ' rgba(201,38,236,0.3)', 'rgba(78,131,47,0.3)', 'rgba(218,131,42,0.3)',
    'rgba(26,32,237,0.3)'];
  leftBottomBorderColor = ['#90ffff', '#e4e250', '#9fe550', '#d24b1b', '#6640f0', '#c926ec', '#4e832f', '#da832a',
    '#1a20ed'];
  leftBottomFont = [22, 20, 8, 5, 5, 5, 5, 4, 5];
  rightToptatalColor = ['#1000ee', '#6fb93e'];
  rightTopchildColor = ['#3359ef', '#4d88ef', '#74cdf1', '#89f3e5', '#419f13', '#73c617', '#bbe053', '#bec53e',
    '#f2da34', '#dfbe30', '#d38c30', '#ce682b', '#cb4c28', '#d446b3', '#9c32e7'];
  colorChange = '';
  constructor (private page2Service: Page2Service, private http: HttpClient) {

    this.isMock = environment.isMock;
    const prefix = '/echartsData/search/findByName?name=';
    // tslint:disable-next-line:max-line-length
    this.http.get<ResponseType>(this.isMock ? './assets/echarts/roleModule_provinceTop10.json' : prefix + 'softwareCity_provinceTop10')
      .subscribe(
        data => {
          this.echartsProvinceTop10Option = page2Service.provinceTop10Option(data);
        });
    this.clickBtn = 0;
    this.yearBtn = 0;
    this.yearChose = '2016';
  }

  ngOnInit() {
    this.meunTitle = '大数据优秀案例评审';
    this.images = [];
    this.images.push({ source: '../../../assets/images/kitten-cosmic.png', alt: '', title: '' });
    this.images.push({ source: '../../../assets/images/kitten-default.png', alt: '', title: '' });
    this.images.push({ source: '../../../assets/images/kitten-cosmic.png', alt: '', title: '' });
    this.images.push({ source: '../../../assets/images/kitten-default.png', alt: '', title: '' });
    this.images.push({ source: '../../../assets/images/kitten-cosmic.png', alt: '', title: '' });
    this.images.push({ source: '../../../assets/images/kitten-default.png', alt: '', title: '' });
    this.images.push({ source: '../../../assets/images/kitten-cosmic.png', alt: '', title: '' });
    this.images.push({ source: '../../../assets/images/kitten-default.png', alt: '', title: '' });
    this.images.push({ source: '../../../assets/images/kitten-cosmic.png', alt: '', title: '' });
    this.images.push({ source: '../../../assets/images/kitten-default.png', alt: '', title: '' });
    this.images.push({ source: '../../../assets/images/kitten-cosmic.png', alt: '', title: '' });
    this.images.push({ source: '../../../assets/images/kitten-default.png', alt: '', title: '' });

    this.btnshowheigharr = new Array<boolean>(this.buttondetailArr.length);
    this.btnshowheigharr.fill(false);
    this.btnshowheigharr[0] = true;
    this.yearbtnshowheigharr = new Array<boolean>(this.buttonYearArr.length);
    // 上部数据处理
    this.buttondetailClick('', 0, 'shenbao', '申报案例');
    this.buttonYearClick('', 1, '2017');
  }
  // 年份筛选
  buttonYearClick(e, i, year) {
    this.yearbtnshowheigharr.fill(false);
    this.yearbtnshowheigharr[i] = true;
    this.yearChose = year;
    if (this.yearChose === '2016') {
      this.isShowImg = false;
    } else if (this.yearChose === '2017') {
      this.isShowImg = true;
    }
    this.getAllData(this.yearChose, this.mapType);
  }
  // 案例类型切换
  buttondetailClick(e, i, type, name) {
    this.btnshowheigharr.fill(false);
    this.btnshowheigharr[i] = true;
    this.clickBtn = i;
    this.mapType = type;
    this.mapName = name;
    if (this.mapType === 'shenbao') {
      this.colorChange = 'rgba(255,255,0,0.3)';
    } else if (this.mapType === 'good') {
      this.colorChange = 'rgba(255,255,0,1)';
    }
    this.setMapCharts();
  }

  // 创建地图
  setMapCharts() {
    this.mapData = [];
    this.http.get<any>('./assets/echarts/roleModule_map.json')
      .subscribe(
        data => {
          // 申报案例地图
          data.mapscatterData.forEach(element => {
            if (element.year === this.yearChose) {
              this.mapData.push({
                value: [element.lon, element.lat, element.name, this.mapName,
                element[this.mapType + '_value'], element[this.mapType + '_pre']],
                symbolSize: element[this.mapType + '_value'],
              });
            }
          });
          this.middleOption = {
            title: {
              text: '',
              left: 'center',
              top: 10,
            },
            geo: {
              map: 'china',
              label: {
                normal: {
                  show: false,
                  color: '#fff',
                },
                emphasis: {
                  show: true,
                  color: '#fff',
                },
              },
              itemStyle: {
                normal: {
                  areaColor: 'none',
                  borderColor: 'none',
                },
                emphasis: {
                  areaColor: '#2a333d',
                },
              },
            },
            tooltip: {
              trigger: 'item',
              formatter: function (params) {
                return ['<div> ' + params.data.value[2] + '</div>' +
                  '<div class="font"> ' + params.data.value[3] + ' : ' +
                  params.data.value[4] + '个 ' + params.data.value[5] + '%' + '</div>'];
              },
              backgroundColor: '#1E357E',
              padding: 15,
              borderColor: '#4B70C1',
              borderWidth: 1,
              textStyle: {
                color: '#ff0',
                fontSize: 22,
                width: '20%',
                height: '20%',
              },
            },
            series: [{
              type: 'effectScatter',
              coordinateSystem: 'geo',
              data: this.mapData,
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke',
              },
              hoverAnimation: true,
              roam: true,
              itemStyle: {
                normal: {
                  show: true,
                  position: 'top',
                  color: this.colorChange,
                },
              },
            }],
          };
        });
  }

  // 获取数据
  getAllData(year, mapType) {
    this.topList = [];
    this.topFirstList = [];
    this.leftMiddleData = [];
    this.provinceTop10Data = [];
    this.rightTopTotalData = [];
    this.rightTopchildData = [];
    this.leftBottomData = [];
    this.list3 = [];
    this.http.get<any>('./assets/echarts/roleModule_map.json')
      .subscribe(
        data => {
          // 申报案例地图
          data.mapscatterData.forEach(element => {
            if (element.year === year) {
              this.mapData.push({
                value: [element.lon, element.lat],
                symbolSize: element[mapType + '_value'],
              });
            }
          });
          // 申报案例排名前十的省份
          data.ProvinceTop10Data.forEach(element => {
            if (element.year === this.yearChose) {
              this.provinceTop10Data.push(element);
            }
          });
          //
          data.topDetailData.forEach(element => {
            if (element.year === this.yearChose) {
              this.topList.push(element);
            }
          });
          //
          data.topFirstData.forEach(element => {
            if (element.year === this.yearChose) {
              this.topFirstList.push(element);
            }
          });
          // 各主体推荐案例数量
          data.recommendData.forEach(element => {
            if (element.year === this.yearChose) {
              this.leftMiddleData.push(element);
            }
          });
          // 申报性质占比
          data.percentData.forEach((element, index) => {
            if (element.year === this.yearChose) {
              this.leftBottomData.push({
                name: element.name,
                value: element.value,
                itemStyle: {
                  normal: {
                    color: this.leftBottomColor[index],
                    borderWidth: 1,
                  },
                },
                label: {
                  normal: {
                    fontSize: this.leftBottomFont[index],
                    ellipsis: false,
                  },
                },
              });
            }
          });
          // 产品类别及解决方案分布
          let i = 0;
          data.rightTopData.forEach((element, index) => {
            if (element.year === this.yearChose) {
              this.rightTopTotalData.push({
                name: element.typeName,
                value: element.value,
                itemStyle: {
                  normal: {
                    color: this.rightToptatalColor[index],
                  },
                },
              });
              element.children.forEach(item => {
                this.rightTopchildData.push({
                  name: item.chilName,
                  value: item.value,
                  itemStyle: {
                    normal: {
                      color: this.rightTopchildColor[i],
                    },
                  },
                });
                i = i + 1;
              });
            }
          });
          // 2016年优秀案例列表
          data.good.forEach(element => {
            this.list3.push(element);
          });
          // 优秀案例列表
          this.list1_num = data.projectbigdataProducts[this.yearChose].num;
          this.list2_num = data.projectbigdataSolutions[this.yearChose].num;
          this.list1 = data.projectbigdataProducts[this.yearChose].value;
          this.list2 = data.projectbigdataSolutions[this.yearChose].value;
          this.createEcharts();
        });
    this.setMapCharts();
  }
  // 创建charts图
  createEcharts() {
    // 申报案例排名前十的省份
    this.echartsProvinceTop10Option = {
      title: {
        text: '申报案例排名前十的省份',
      },
      tooltip: {
        trigger: 'axis',
      },
      grid: {
        bottom: '12%',
        height: '68%',
      },
      calculable: true,
      xAxis: [
        {
          type: 'value',
          boundaryGap: [0, 0.01],
        },
      ],
      yAxis: [
        {
          type: 'category',
          data: this.provinceTop10Data[0].data,
          axisLabel: {
            fontSize: 12,
            interval: 0,
          },
        },
      ],
      series: [
        {
          type: 'bar',
          data: this.provinceTop10Data[0].value,
          label: {
            normal: {
              show: true,
              position: 'right',
              color: '#fff',
            },
          },
        },
      ],
    };
    // 各主体推荐案例数量
    this.leftTopMapOption = {
      color: ['#3398DB'],
      title: {
        text: '各主体推荐案例数量',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: this.leftMiddleData[0].data,
          axisLabel: {
            fontSize: 12,
            interval: 0,
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: '',
          type: 'bar',
          barWidth: '35%',
          data: this.leftMiddleData[0].value,
          label: {
            normal: {
              show: true,
              position: 'top',
              color: '#fff',
            },
          },
          itemStyle: {
            normal: {
              color: '#00AEAE',
            },
          },
        },
      ],
    };
    // 申报案例各类企业性质占比
    this.leftBottomMapOption = {
      title: {
        text: '申报案例各类企业性质占比',
      },
      tooltip: {
        formatter: `{b}: 占比{c}%`,
      },
      series: [{
        type: 'treemap',
        top: '20%',
        nodeClick: false,
        data: this.leftBottomData,
        levels: [
          {
            itemStyle: {
              normal: {
                borderColor: 'transparent',
              },
            },
          },
          {
            itemStyle: {
              normal: {
                borderColor: 'transparent',
              },
            },
          },
        ],
        breadcrumb: {
          show: false,
        },
        label: {
          normal: {
            fontSize: 20,
            color: '#81DFE2',
            fontWeight: 500,
          },
        },
        emphasis: {
          label: {
            show: true,
          },
        },
      }],
    };
    // 产品类别及解决方案分布
    this.rightListOption1 = {
      title: {
        text: '产品类别及解决方案分布',
      },
      tooltip: {
        trigger: 'item',
      },
      grid: {
        left: 0,
        top: '100%',
      },
      series: [
        {
          name: '',
          type: 'pie',
          selectedMode: 'single',
          radius: [0, '30%'],
          center: ['20%', '50%'],
          label: {
            normal: {
              position: 'inner',
              formatter: `{c}%`,
            },
          },
          data: this.rightTopTotalData,
        },
        {
          name: '',
          type: 'pie',
          radius: ['40%', '60%'],
          center: ['20%', '50%'],
          label: {
            normal: {
              show: false,
              color: 'transparent',
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
          data: this.rightTopchildData,
        },
      ],
    };
  }

  // 点击展示优秀案例详情
  open() {
    this.list1_num === 0 && this.list2_num === 0 ? this.ifshowdetail = false : this.ifshowdetail = true;
  }
  // 关闭优秀案例详情
  cancel() {
    this.ifshowdetail = false;
    this.getAllData(this.yearChose, this.mapType);
  }
}
