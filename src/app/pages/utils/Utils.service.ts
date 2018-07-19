import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class UtilsService{

    public covertStrToJson(Data) {
        let jsonData = Data;
        let dd;
        if (Data && Data._embedded) {
            dd = Data._embedded.echartsDatas[0].value;
            jsonData = JSON.parse(dd);
        };
        return jsonData;
    }

}