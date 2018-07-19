import { Injectable, OnInit } from '@angular/core';
import { serializePath } from '@angular/router/src/url_tree';

@Injectable()
export class Page2Service implements OnInit {

    constructor() { }
    echartsProvinceTop10Option = {};

    ngOnInit() { }

    public  provinceTop10Option( Data) {
        let jsonData=Data;
        let dd;
        if(Data&&Data._embedded){
            dd = Data._embedded.echartsDatas[0].value;
            jsonData = JSON.parse(dd);
        };
        
        const option = {
            title : {
                text: '申报案例排名前十的省份'
            },
            tooltip : {
                trigger: 'axis'
            },
            calculable : true,
            xAxis : [
                {
                    type : 'value',
                    boundaryGap : [0, 0.01],
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    data : jsonData.yAxis,
                }
            ],
            series : [
                {
                    name:'2016年',
                    type:'bar',
                    data:jsonData.series[0],
                    label: {
                        normal: {
                          show: true,
                          position: 'right',
                          color: '#fff',
                        },
                      },
                },
                {
                    name:'2017年',
                    type:'bar',
                    data:jsonData.series[1]
                }
            ]
        };
        return option;

    }

}