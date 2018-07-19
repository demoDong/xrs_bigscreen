import { Injectable } from '@angular/core';
import { UtilsService } from '../utils/Utils.service';

@Injectable()
export class IndustryDistributionService {

  constructor (public utilsService: UtilsService) { }
  echartsProvinceTop10Option = {};

  ngOnInit() { }

  //China 气泡图 数据格式整理
  public convertData(data, geoData) {

    var res = [];
    for (var i = 0; i < data.length; i++) {
      console.log(i)
      var geoCoord = data[i].x ? data[i].x : geoData[data[i].name];
      if (geoCoord) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value),
          desc: data[i].value
        });
      }
    }
    return res;
  };

  //China 总产值热力
  public convertReliData(data) {

    var res = [];
    for (var i = 0; i < data.length; i++) {
      res.push({
        name: data[i].name,
        value: data[i].value
      });

    }
    console.log(res)
    return res;
  };

  // 左上 柱状图 对比分析 option 数据请求
  public comparisonOption(Data) {
    let dd = this.utilsService.covertStrToJson(Data);
    console.log(dd.seriesData[0]);
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        name: "单位：亿元",
        type: 'category',
        data: dd.yAxis[0]
      },
      series: [

        {
          name: '2012年',
          type: 'bar',
          data: dd.seriesData[0]
        }
      ]
    };
    return option;
  }

  //左中 气泡图 企业分布分析 option 数据请求
  public companyAnalyseOption(Data) {
    let dd = this.utilsService.covertStrToJson(Data);
    const option = {
      color: ['#00b1a6', '#ff7000'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: dd.legendData
      },
      grid: {
        x: 60,
        y: 30,
        // x2: 40,
        // y2: 50
      },
      calculable: true,
      xAxis:
        {
          type: 'category',
          axisTick: { show: false },
          data: dd.xAxisData
        },
      yAxis: {
        name: "单位：亿元"
      },
      series: [
        {
          name: '收入',
          type: 'bar',
          barWidth: 10,
          data: dd.seriesData[0]
        }
      ]
    };
    return option;
  }
  //左下 折线图 软件行业景气指数及预测
  public industryForecastOption(Data) {
    let dd = Data;
    const option = {
      tooltip: {
        trigger: 'axis'
      },
      legend: { //图例样式设置
        data: dd.legendData,
      },
      grid: {
        x: 60,
        y: 10,
      },
      toolbox: {},
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: dd.xAxisData,
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: dd.legendData[0],
          type: 'line',
          stack: '总量',
          data: dd.seriesData[0]
        },
        {
          name: dd.legendData[0],
          type: 'line',
          smooth: false,   //关键点，为true是不支持虚线的，实线就用true
          itemStyle: {
            normal: {
              lineStyle: {
                width: 2,
                type: 'dotted'  //'dotted'虚线 'solid'实线
              }
            }
          },
          data: dd.seriesData[1]
        },
        {
          name: dd.legendData[1],
          type: 'line',
          stack: '总量',
          data: dd.seriesData[2]
        },
        {
          name: dd.legendData[1],
          type: 'line',
          stack: '总量',
          smooth: false,   //关键点，为true是不支持虚线的，实线就用true
          itemStyle: {
            normal: {
              lineStyle: {
                width: 2,
                type: 'dotted'  //'dotted'虚线 'solid'实线
              }
            }
          },
          data: dd.seriesData[3]
        }
      ]
    };
    return option;
  }

  //中部 china 数据请求
  public middleChinaOption(Data, rightCheckBox, totalValueRadioBox, regionChecked, param?) {
    const dd = Data;
    const middleTime = dd.middleTime;//轮播年份
    const geoCoordMap = dd.geoCoordMap;
    const totallValue = rightCheckBox[1] ? dd[param] : [];//总产值
    const companyNumber = rightCheckBox[2] ? dd.companyNumber : [];//企业数量
    const company100 = rightCheckBox[3] ? dd.company100 : [];//百强企业

    //const regionLayout = rightCheckBox[4] ? dd.dd.regionLayout : [];//区域分布
    const softwareCity = regionChecked[1] ? dd.softwareCity : [];//软件名城
    const tryBase = regionChecked[2] ? dd.tryBase : [];//示范基地
    const softwarePark = regionChecked[3] ? dd.softwarePark : [];//软件园区
    const testPark = regionChecked[4] ? dd.testPark : [];//示范园区
    console.log(testPark)
    const testCity = regionChecked[5] ? dd.testCity : [];//试验城市

    const option = {
      baseOption: {
        visualMap: [
          {
            seriesIndex: 0,
            orient: 'horizontal',
            max: 500,
            min: 100,
            x: 100,
            y: 700,
            itemHeight: 100,
            itemWidth: 12,
            textStyle: {
              text: '产值：亿元',
              color: '#ffffff',
              fontSize: 12        // 图例文字颜色
            },
            align: 'right',
            calculable: true,
            inRange: {
              color: ['rgba(129,192,251,0.5)', 'rgba(44,66,237,0.5)', 'lightskyblue', 'yellow'],
            },
          },
        ],
        tooltip: {
          trigger: 'item',
        },
        timeline: {
          axisType: 'category',
          data: middleTime,
          playInterval: 5000,
          bottom: '2%',
          symbolSize: 10,
        },
        geo: {
          show: true,
          map: 'china',
          left: '8%',
          label: {
            normal: {
              show: false,
              textStyle: {
                color: '#fff',
                fontSize: '16'
              }
            },
            emphasis: {
              show: true,
              textStyle: {
                color: '#fff',
                fontSize: '16'
              }
            },
          },
          selectedMode: 'single',
          itemStyle: {
            normal: {
              areaColor: 'none',
              borderColor: 'none',
            },
            emphasis: {
              areaColor: '#8A2BE2',
            }
          },
        },
        legend: {},
        grid: {
        },
        series: [
          {//热力图 总产值 
            type: 'map',
            mapType: 'china',
            data: [],
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: '#fff'
                }
              }
            },
            roam: false,
            animation: false,
          }, {// 气泡图 企业数量
            name: '企业数量',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: [],
            symbolSize: function (val) {
              return val[2] / 80;
            },
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke',
            },
            hoverAnimation: true,
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: '#FF7000',
                  fontSize: 15,
                }
              }
            }, itemStyle: {
              normal: {
                color: '#e4e81f',
                shadowBlur: 10,
                shadowColor: '#333'
              }
            },
          }, {// 定位描点 百强企业
            name: '百强企业',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin', //描点
            data: [],
            symbolSize: 30,
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke',
            },
            hoverAnimation: true,
            label: {
              normal: {
                show: false,
                formatter: function (params) {
                  var res = params.name;
                  if (params.desc !== undefined) {
                    res += '</br>';
                    res += params.desc;
                  }
                  return res;
                },
                position: 'right',
                textStyle: {
                  color: '#fff',
                  fontSize: 10,
                }
              },
              emphasis: {
                show: true,
                textStyle: {
                  color: '#fff',
                  fontSize: 15,
                }
              }
            }, itemStyle: {
              normal: {
                color: '#cc66f7'
              }
            },
          }, {// 定位描点 软件名城
            name: '软件名城',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin', //描点
            data: [],
            symbolSize: 30,
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke',
            },
            hoverAnimation: true,
            label: {
              normal: {
                show: false,
                formatter: '{b}',
                position: 'right',
                textStyle: {
                  color: '#00FA9A',
                  fontSize: 10,
                }
              },
              emphasis: {
                show: true,
                textStyle: {
                  color: '#00FA9A',
                  fontSize: 15,
                }
              }
            }, itemStyle: {
              normal: {
                color: '#00FA9A'
              }
            },
          },

          {// 定位描点 示范基地
            name: '示范基地（软件和信息服务业）',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin', //描点
            data: [],
            symbolSize: 30,
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke',
            },
            hoverAnimation: true,
            label: {
              normal: {
                show: false,
                formatter: '{b}',
                position: 'right',
                textStyle: {
                  color: '#F4A460',
                  fontSize: 10,
                }
              },
              emphasis: {
                show: true,
                textStyle: {
                  color: '#F4A460',
                  fontSize: 15,
                }
              }
            }, itemStyle: {
              normal: {
                color: '#F4A460'
              }
            },
          },

          {// 定位描点 示范基地
            name: '示范基地(大数据）',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin', //描点
            data: [],
            symbolSize: 30,
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke',
            },
            hoverAnimation: true,
            label: {
              normal: {
                show: false,
                formatter: '{b}',
                position: 'right',
                textStyle: {
                  color: '#B22222',
                  fontSize: 10,
                }
              },
              emphasis: {
                show: true,
                textStyle: {
                  color: '#B22222',
                  fontSize: 15,
                }
              }
            }, itemStyle: {
              normal: {
                color: '#B22222'
              }
            },
          },

          {// 定位描点 软件园区
            name: '软件园区',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin', //描点
            data: [],
            symbolSize: 30,
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke',
            },
            hoverAnimation: true,
            label: {
              normal: {
                show: false,
                formatter: '{b}',
                position: 'right',
                textStyle: {
                  color: '#8B4513',
                  fontSize: 10,
                }
              },
              emphasis: {
                show: true,
                textStyle: {
                  color: '#8B4513',
                  fontSize: 15,
                }
              }
            }, itemStyle: {
              normal: {
                color: '#8B4513'
              }
            },
          },
          {//热力图 定位描点 示范园区
            type: 'map',
            mapType: 'china',
            data: [],
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: '#6495ED'
                }
              }
            },
            roam: false,
            animation: false,
          },


          {// 定位描点 试验城市
            name: '试验城市',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin', //描点
            data: [],
            symbolSize: 30,
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke',
            },
            hoverAnimation: true,
            label: {
              normal: {
                show: false,
                formatter: '{b}',
                position: 'right',
                textStyle: {
                  color: '#0000FF',
                  fontSize: 10,
                }
              },
              emphasis: {
                show: true,
                textStyle: {
                  color: '#0000FF',
                  fontSize: 15,
                }
              }
            }, itemStyle: {
              normal: {
                color: '#0000FF'
              }
            },
          },



        ],
      },
      options: [
        {
          series: [{
            data: totallValue[0] === undefined ? [] : this.convertReliData(totallValue[0])
          }, {
            data: companyNumber[0] === undefined ? [] : this.convertData(companyNumber[0], geoCoordMap)
          }, {
            data: company100[0] === undefined ? [] : this.convertData(company100[0], geoCoordMap)
          },
          //以下是区域布局，选择区域布局，它下面的几个都自动选上，地图上打点
          {
            data: softwareCity[0] === undefined ? [] : this.convertData(softwareCity[0], geoCoordMap)
          }, {
            data: tryBase[0] === undefined ? [] : this.convertData(tryBase[0], geoCoordMap)
          }, {
            data: tryBase[1] === undefined ? [] : this.convertData(tryBase[1], geoCoordMap)
          }, {
            data: softwarePark[0] === undefined ? [] : this.convertData(softwarePark[0], geoCoordMap)
          }
            , {
            data: testPark[0] === undefined ? [] : this.convertReliData(testPark[0])
          }
            , {
            data: testCity[0] === undefined ? [] : this.convertData(testCity[0], geoCoordMap)
          }],
        }],
    };
    return option;
  }
}
