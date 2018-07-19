import { Injectable, OnInit } from '@angular/core';
import { serializePath } from '@angular/router/src/url_tree';

@Injectable()
export class SoftwareCityService implements OnInit {

  constructor() { }
  ngOnInit() { }
  // 左上 总体政策发布情况 柱状叠加图 option
  public policyOption(Data) {
    let jsonData = this.covertStrToJson(Data);

    const leftTopPolicyOption = {
      tooltip: {
        trigger: 'item',
        formatter: "{b} {c} %"
      },
      toolbox: {
        show: false,
      },
      calculable: true,
      color: ['#FD6035', '#82C730', '#FACE2F', '#36B6DD', '#0084C5'],//自己设置扇形图颜色  
      series: [
        //标线长度，宽度  
        {
          labelLine: {
            normal: {
              show: true,
              length: 6,
              length2: 10,
              lineStyle: {
                width: 1
              }
            }
          },
          name: '',
          type: 'pie',
          radius: [35, 90],
          roseType: 'radius',
          data: [
            { value: 6.06, name: '济南' },
            { value: 6.00, name: '南京' },
            { value: 9.42, name: '上海' },
            { value: 10.74, name: '成都' },
            { value: 10.14, name: '广州' },
            { value: 10.89, name: '深圳' },
            { value: 4.00, name: '北京' },
            { value: 20.62, name: '杭州' },
            { value: 21.23, name: '其他城市' }
          ],
          //标线的属性设置，以及显示的文字  
          itemStyle: {
            normal: {
              label: {
                show: true,
                formatter: '{c}%',
                textStyle: {
                  color: '#fff',
                  fontSize: 14,
                }

              },
            },
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
        }
      ]
    }
    return leftTopPolicyOption;

  }

  // 转换函数
  private covertStrToJson(Data) {
    let jsonData = Data;
    let dd;
    if (Data && Data._embedded) {
      dd = Data._embedded.echartsDatas[0].value;
      jsonData = JSON.parse(dd);
    }
    return jsonData;
  }

  // 左中 名称产值占总体产值百分比 环形图 option
  public leftMiddleOption(Data) {
    const jsonData = this.covertStrToJson(Data);

    const leftMiddleOption = {
      color: ['#3259ef', '#754efb', '#db7020', '#4e9ffb', '#e33f2e', '#e3ae05', '#ff595e', '6fb93e'],
      tooltip: {
        trigger: 'item',
        formatter: '{c}%',
      },
      series: [
        {
          name: '',
          type: 'pie',
          radius: ['40%', '70%'],
          data: jsonData.series,
          itemStyle: {
            normal: {
              label: {
                show: true,
                textStyle: {
                  color: '#fff',
                  fontSize: 14,
                },
              },
            },
          },
        },

      ],
    };
    return leftMiddleOption;
  }

  // 左下 名称企业数占总体企业数百分比 饼状图 option
  public leftBottomOption(Data) {
    const jsonData = this.covertStrToJson(Data);
    // console.log();
    const leftBottomOption = {
      color: ['#db7020', '#ff595e', '#e3ae05', '#6fb93e', '#3259ef', '#754efb', '#4e9ffb', '#e33f2e'],
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c}万 ({d}%)',
      },
      // legend: {
      //   orient: 'vertical',
      //   right: '8%',
      //   top: 'middle',
      //   data: jsonData.legend,
      // },
      series: [
        {
          name: '',
          type: 'pie',
          // center: ['35%', '50%'],
          radius: '80%',
          label: {
            normal: {
              position: 'inside',
              formatter: '{d}',
            },
          },
          data: jsonData.series,
          itemStyle: {
            normal: {
              label: {
                show: true,
                textStyle: {
                  color: '#fff',
                  fontSize: 12,
                },
              },
            },
          },
        },
      ],
    };
    return leftBottomOption;
  }

  // 中部 chinaMap option
  public middleMapOption(Data) {
    const jsonData = this.covertStrToJson(Data);

    // 中间地图
    const middleMapOption = {
      baseOption: {
        timeline: {
          axisType: 'category',
          data: jsonData.middleTime,
          playInterval: 2000,
          bottom: '2%',
          symbolSize: 10,
          autoPlay: false,
          show: false,
        },
        geo: {
          show: true,
          map: 'china',
          left: '8%',
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
            },
          },
          selectedMode: 'single',
          regions: [{
            name: jsonData.selectedCities,
            selected: 'true',
          }],
          itemStyle: {
            normal: {
              areaColor: 'transparent',
              borderColor: 'none',
              borderWidth: 4,
              shadowColor: 'rgba(63, 218, 255, 0.5)',
              shadowBlur: 30,
              backgroundColor: 'rgba(224,124,148,0.5)',
            },
            emphasis: {
              areaColor: 'rgba(6,59,140,0.5)',
              shadowColor: 'rgba(63, 218, 255, 0.5)',
              shadowBlur: 60,
              borderColor: '#3fdaff',
              borderWidth: 4,
            },
          },
        },
        legend: {
          top: '10%',
          left: '30%',
          data: jsonData.legend,
        },
        grid: {
        },
        series: [{
          name: jsonData.legend[0],
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: [],
          symbolSize: 20,
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke',
          },
          hoverAnimation: true,
          label: {
            normal: {
              formatter: function (val) {
                return val.data[2]+val.data[3];;
              },
              position: 'right',
              show: false,
            },
            emphasis: {
              show: true,
              fontSize: '15',
            },
          },
          itemStyle: {
            normal: {
              color: '#FFFF01',
            },
          },
        }, {
          name: jsonData.legend[1],
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: [],
          symbolSize: 20,
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke',
          },
          hoverAnimation: true,
          label: {
            normal: {
              formatter: function (val) {
                return val.data[2]
              },
              position: 'right',
              show: false,
            },
            emphasis: {
              show: true,
              fontSize: '15',
            },
          },
          itemStyle: {
            normal: {
              color: '#FF595E',
            },
          },
        },
        {
          name: jsonData.legend[2],
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: [],
          symbolSize: 20,
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke',
          },
          hoverAnimation: true,
          label: {
            normal: {
              formatter: function (val) {
                return val.data[2];
              },
              position: 'right',
              show: false,
            },
            emphasis: {
              show: true,
              fontSize: '15',
            },
          },
          itemStyle: {
            normal: {
              color: '#0000FF',
            },
          },
        }
      ],
      },
      options: jsonData.options,
    };

    return middleMapOption;

  }

  public joinShowData(Data) {
    let jsonData = this.covertStrToJson(Data);
    return jsonData.joinShowData;
  }

  public typeBtnData(Data) {
    let jsonData = this.covertStrToJson(Data);
    return jsonData;
  }

  // 时间轴
  public middleTime(Data) {
    let jsonData = this.covertStrToJson(Data);
    return jsonData.middleTime;
  }

}