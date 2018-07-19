import { Injectable } from '@angular/core';
import { CompileAnimationGroupMetadata } from '@angular/compiler';
@Injectable()
export class HomepagedataanylyzeService {
  constructor() { }
  // 柱状图：全球软件行业发展情况数据格式解析
  anylyzeWorldData(data) {
    const worldData = data.worldData;
    return worldData;
  }
  // 柱状图：我国软件行业发展情况数据格式解析
  anylyzeChinaData(data) {
    const chinaData = data.chinaData;
    return chinaData;
  }
  // 折现图数据处理
  lineDataReset (data) {
    return {
      legend: data.legendData,
      axis: data.xAxisData,
      data: [
        data.seriesData[0],
        data.seriesData[2],
        data.seriesData[1],
        data.seriesData[3],
      ],
    };
  }
  // 柱状图：业务收入数据解析
  incomedetailData(data, title, type) {
    const yearArr = [];
    const incomeArr = [];
    const compareArr = [];
    data.incomeData.forEach(element => {
      if (element.name === title) {
        yearArr.push(element.year);
        incomeArr.push(element['income_' + type]);
        compareArr.push(element['compare_' + type]);
      }
    });
    return [yearArr, incomeArr, compareArr];
  }
  // 地图数据解析
  anylyzeWorldmapData(data, id, mapClickedLegend?) {
    let mapData;
    let joinShowData = [];
    const companyArr = [];
    switch (id) {
      case 'join':
        mapData = data.countryjoinData;
        data.joinShowData.forEach(element => {
          element.countrys === mapClickedLegend ? joinShowData.push(element) : joinShowData = joinShowData;
        });
        break;
      case 'china':
        mapData = data.countryoutputData;
        break;
      default:
        id === 'outcompany' ? mapData = data.companyoutputData : mapData = data.companyinputData;
        mapData.forEach(element => {
          if (companyArr.indexOf(element.fromCountry) === -1) {
            companyArr.push(element.fromCountry);
          }
        });
        break;
    }
    return [mapData, companyArr, joinShowData];
  }
}
