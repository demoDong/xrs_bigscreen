import { Component, OnInit, NgZone, AfterViewInit } from '@angular/core';
import { map } from 'rxjs/operator/map';
import { HomepagechartsoptionService } from './homepagechartsoption.service';
import { HomepagedataanylyzeService } from './homepagedataanalyze.service';
import { HttpClient } from '@angular/common/http';
import * as jQuery from 'jquery';
import { Router } from '@angular/router';
@Component({
    selector: 'do-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit, AfterViewInit {
    ifarrowRotate: Boolean;
    ifexpendbox: Boolean;
    ifhideIncomeChart: Boolean;
    ifhideOutputcompaylist: Boolean;
    ifhideInputcompaylist: Boolean;
    ifhidejoincountrylist: Boolean;
    ifmarginauto: Boolean;
    meunTitle: String;
    btnShow: false;
    homepageWorldMapOption = {};
    homepageWorldSoftwareDevBarOption = {};
    homepageDomesticSoftwareDevBarOption = {};
    homepageIncomeDetailBarOption = {};
    homepageJqzsOption = {};
    theme = 'echart-theme';
    nameMap = 'world';
    btnName = [
        '基础软件',
        '支撑软件',
        '应用软件',
        '工业软件',
        '嵌入式应用软件',
        '信息安全产品',
    ];
    incomeDetailArr = [
        { title: '软件业务收入', income: 55037, year: '2017', compare: '14.1' },
        { title: '利润总额', income: 7020, year: '2017', compare: '7.1' },
        { title: '软件业务出口收入', income: 538, year: '2017', compare: '7.8' },
        { title: '企业数量', income: 35774, year: '2017', compare: '10.72' },
        { title: '从业人员', income: 600, year: '2017', compare: '3.4' },
        { title: '投资并购', income: 28.97, year: '2017', compare: '3166.6' },
    ];
    buttondetailArr = [
        { name: '国际合作', id: 'join' },
        { name: '业务出口', id: 'china' },
        { name: '企业走出去', id: 'outcompany' },
        { name: '企业引进来', id: 'incompany' },
    ];
    incomechartsshowheighArr: Array<boolean>;
    incomebtnshowheigharr: Array<boolean>;
    btnshowheigharr: Array<boolean>;
    joinShow = false;
    companyOutputArr: Array<string>;
    companyInputArr: Array<string>;
    colorList = {
        '华为技术有限公司': ['rgb(48, 255, 0)', 'rgba(48, 255, 0,  0.3)', 'huawei'],
        '阿里云计算有限公司': ['rgb(249,146,46)', 'rgba(249,146,46, 0.3)', 'albb'],
        '小米科技有限公司': ['rgb(75,228,158)', 'rgba(75,228,158, 0.3)', 'xiaomi'],
        '百度科技有限公司': ['rgb(46,151,249)', 'rgba(46,151,249, 0.3)', 'baidu'],
        '摩拜': ['rgb(0,255,255)', 'rgba(0,255,255, 0.3)', 'mobai'],
        'ofo': ['rgb(237,238,27)', 'rgba(237,238,27, 0.3)', 'ofo'],
        '金山': ['rgb(124,96,248)', 'rgba(124,96,248, 0.3)', 'jinsan'],
        '中国': ['rgb(234,234,4)', 'rgba(234,234,4, 0.3)', 'china'],


        '中泰': ['rgb(241,113,22)', 'rgb(241,113,22, 0.3)'],
        '中德': ['rgb(111,213,65)', 'rgb(111,213,65,  0.3)'],
        '中美': ['rgb(1,255,255)', 'rgb(1,255,255, 0.3)'],
        '中印': ['rgb(11,12,241)', 'rgb(11,12,241,  0.3)'],
        '中日韩': ['rgb(241,113,22)', 'rgb(241,113,22, 0.3)'],

        '微软': ['rgb(48, 255, 0)', 'rgba(48, 255, 0,  0.3)', 'huawei'],
        '甲骨文': ['rgb(249,146,46)', 'rgba(249,146,46, 0.3)', 'albb'],
        'IBM': ['rgb(75,228,158)', 'rgba(75,228,158, 0.3)', 'xiaomi'],
        'SAP': ['rgb(46,151,249)', 'rgba(46,151,249, 0.3)', 'baidu'],
        '赛门铁克': ['rgb(0,255,255)', 'rgba(0,255,255, 0.3)', 'mobai'],
        '易安信': ['rgb(237,238,27)', 'rgba(237,238,27, 0.3)', 'ofo'],
        '富士通': ['rgb(124,96,248)', 'rgba(124,96,248, 0.3)', 'jinsan'],
    };
    joinlinesArr = [
        { name: '中泰', country: '泰国' },
        { name: '中德', country: '德国' },
        { name: '中美', country: '美国' },
        { name: '中印', country: '印度' },
        { name: '中日韩', country: '中日韩' },
    ];
    incomeDetailBtnArr = [
        // { name: '基础软件', id: 'type1' },
        // { name: '支撑软件', id: 'type2' },
        // { name: '应用软件', id: 'type3' },
        // { name: '工业软件', id: 'type4' },
        // { name: '嵌入式应用软件', id: 'type5' },
        // { name: '信息安全产品', id: 'type6' },
        { name: '软件产品', id: 'type6' },
        { name: '信息技术服务', id: 'type6' },
        { name: '切入式系统软件', id: 'type6' },
        { name: '全部', id: 'all' },

    ];
    joinShowData: Array<object> = [];
    selectedCompany = [];
    private incomeclickedBtn: String;
    private worldmapData: any;
    private linesFromnameArr: Array<String>;
    private clickedBtnId: String;
    private clickedLegendCountry: String;
    private incomedetailData: any;
    constructor (
        private options: HomepagechartsoptionService,
        private analyzeData: HomepagedataanylyzeService,
        private http: HttpClient,
        private zone: NgZone,
        private router: Router,
    ) { }
    ngOnInit() {
        this.ifexpendbox = true;
        this.ifmarginauto = this.ifexpendbox;
        this.ifarrowRotate = this.ifexpendbox;
        this.ifhideIncomeChart = true;
        this.ifhideOutputcompaylist = true;
        this.ifhideInputcompaylist = true;
        this.ifhidejoincountrylist = false;
        this.joinShow = true;
        this.meunTitle = '首页';
        this.clickedBtnId = 'outcompany';
        // this.linesFromnameArr = ['中国'];
        this.incomechartsshowheighArr = new Array<boolean>(this.incomeDetailArr.length);
        this.incomechartsshowheighArr.fill(false);
        this.incomebtnshowheigharr = new Array<boolean>(this.incomeDetailBtnArr.length);
        this.incomebtnshowheigharr.fill(false);
        this.btnshowheigharr = new Array<boolean>(this.buttondetailArr.length);
        this.btnshowheigharr.fill(false);
        this.btnshowheigharr[2] = true;
    }
    ngAfterViewInit() {
        // 初始化柱状图：全球软件行业发展情况
        this.http.get('./assets/echarts/homepagedata.json').subscribe(
            data => {
                const worldData = this.analyzeData.anylyzeWorldData(data);
                // tslint:disable-next-line:max-line-length
                this.homepageWorldSoftwareDevBarOption = this.options.homepageSoftwareDevBarOption('全球软件行业发展情况', worldData);
            },
        );
        // 初始化柱状图：我国软件行业发展情况
        this.http.get('./assets/echarts/homepagedata.json').subscribe(
            data => {
                const chinaData = this.analyzeData.anylyzeChinaData(data);
                // tslint:disable-next-line:max-line-length
                this.homepageDomesticSoftwareDevBarOption = this.options.homepageDomesticSoftwareDevBarOption('我国软件行业发展情况', chinaData);
            },
        );
        // 软件行业景气指数
        this.http.get('./assets/echarts/industryDistribution_industryForecast.json').subscribe(
            data => {
                console.log(data);
                const jqzs = this.analyzeData.lineDataReset(data);
                this.homepageJqzsOption = this.options.homepageDomeJqzsLineOption('软件行业景气指数及预测', jqzs);
            },
        );
        // 初始化地图
        this.http.get('./assets/echarts/homepagedata.json').subscribe(
            data => {
                this.companyOutputArr = this.analyzeData.anylyzeWorldmapData(data, 'outcompany')[1];
                this.companyInputArr = this.analyzeData.anylyzeWorldmapData(data, 'incompany')[1];
                this.buttondetailClick('', this.clickedBtnId, 2);
            },
        );
    }
    /**
    * 创建地图
    * 传入一个参数 linesFromnameArr
    * params: linesFromnameArr表示帅选的企业名称数组/“['全国']”
    * */
    setworldmap(linesFromnameArr) {
        // tslint:disable-next-line:max-line-length
        this.homepageWorldMapOption = this.options.homepageWorldMapOption(this.worldmapData, linesFromnameArr, this.clickedBtnId, this.clickedLegendCountry);
    }

    /**
     * 点击按钮切换地图画线
     * 传入三个参数 e，id ,i
     * params: e为事件对象，id用来区分点击按钮类型,i为按钮序号
     * */
    buttondetailClick(e, id, i) {
        this.joinShow = false;
        this.btnshowheigharr.fill(false);
        this.btnshowheigharr[i] = true;
        this.ifhideOutputcompaylist = true;
        this.ifhideInputcompaylist = true;
        this.ifhidejoincountrylist = true;
        this.selectedCompany = [];
        this.clickedBtnId = id;
        switch (id) {
            case 'join':
                this.clickedLegendCountry = this.joinlinesArr[0].country;
                this.joinShow = true;
                this.linesFromnameArr = ['中国'];
                this.http.get('./assets/echarts/homepagedata.json').subscribe(
                    data => {
                        // tslint:disable-next-line:max-line-length
                        const returnAnalyzeData = this.analyzeData.anylyzeWorldmapData(data, id, this.joinlinesArr[0].name);
                        this.joinShowData = returnAnalyzeData[2];
                        this.worldmapData = returnAnalyzeData[0];
                        this.setworldmap(this.linesFromnameArr);
                    },
                );
                this.ifhidejoincountrylist = false;
                this.joinlinesArr.forEach((element, index) => {
                    // tslint:disable-next-line:max-line-length
                    jQuery('.v-joincountrylist').find('li').eq(index).find('span:first-child').css('border', '2px dashed ' + this.colorList[element.name][0]);
                });
                break;
            case 'china':
                this.linesFromnameArr = ['中国'];
                this.http.get('./assets/echarts/homepagedata.json').subscribe(
                    data => {
                        this.worldmapData = this.analyzeData.anylyzeWorldmapData(data, id)[0];
                        this.setworldmap(this.linesFromnameArr);
                    },
                );
                break;
            case 'outcompany':
                this.http.get('./assets/echarts/homepagedata.json').subscribe(
                    data => {
                        this.worldmapData = this.analyzeData.anylyzeWorldmapData(data, id)[0];
                        this.selectedCompany = this.companyOutputArr;
                        this.selectedCompanyChange();
                        this.companyOutputArr.forEach((element, index) => {
                            // tslint:disable-next-line:max-line-length
                            jQuery('.v-outputcompanylist').find('.checkbox').eq(index).css('color', this.colorList[element][0]).find('.ui-chkbox-box').css({ 'background': this.colorList[element][1], 'border-color': this.colorList[element][0] });
                            jQuery('.v-outputcompanylist').find('.lengderLine').eq(index).css('background', this.colorList[element][0]).find('span').css({ 'background': this.colorList[element][0], 'box-shadow': '0px 0px 3px 3px ' + this.colorList[element][1] });
                        });
                        this.ifhideOutputcompaylist = false;
                    },
                );
                break;
            case 'incompany':
                this.http.get('./assets/echarts/homepagedata.json').subscribe(
                    data => {
                        this.worldmapData = this.analyzeData.anylyzeWorldmapData(data, id)[0];
                        this.selectedCompany = this.companyInputArr;
                        this.selectedCompanyChange();
                        this.companyInputArr.forEach((element, index) => {
                            // tslint:disable-next-line:max-line-length
                            jQuery('.v-inputcompanylist').find('.checkbox').eq(index).css('color', this.colorList[element][0]).find('.ui-chkbox-box').css({ 'background': this.colorList[element][1], 'border-color': this.colorList[element][0] });
                            jQuery('.v-inputcompanylist').find('.lengderLine').eq(index).css('background', this.colorList[element][0]).find('span').css({ 'background': this.colorList[element][0], 'box-shadow': '0px 0px 3px 3px ' + this.colorList[element][1] });
                        });
                        this.ifhideInputcompaylist = false;
                    },
                );
                break;
            default:
                break;
        }
    }

    /**
     * 点击业务收入右上按钮
     * 传入三个参数 e，i，title
     * params: e为事件对象,i为按钮序号,title为业务标题
     * */
    incomeDetailClicked(e, i, title) {
        this.incomechartsshowheighArr.fill(false);
        this.incomechartsshowheighArr[i] = true;
        this.ifhideIncomeChart = false;
        this.incomeclickedBtn = title;
        if (i === 0) {
            this.incomeDetailBtnArr = [
                // { name: '基础软件', id: 'type1' },
                // { name: '支撑软件', id: 'type2' },
                // { name: '应用软件', id: 'type3' },
                // { name: '工业软件', id: 'type4' },
                // { name: '嵌入式应用软件', id: 'type5' },
                // { name: '信息安全产品', id: 'type6' },
                { name: '软件产品', id: 'type6' },
                { name: '信息技术服务', id: 'type6' },
                { name: '切入式系统软件', id: 'type6' },
                { name: '全部', id: 'all' },
            ];
        } else if (i === 1) {
            this.incomeDetailBtnArr = [
                // { name: '基础软件', id: 'type1' },
                // { name: '支撑软件', id: 'type2' },
                // { name: '应用软件', id: 'type3' },
                // { name: '工业软件', id: 'type4' },
                // { name: '嵌入式应用软件', id: 'type5' },
                // { name: '信息安全产品', id: 'type6' },
                { name: '软件产品', id: 'type6' },
                { name: '信息技术服务', id: 'type6' },
                { name: '切入式系统软件', id: 'type6' },
                { name: '全部', id: 'all' },
            ];
        }
        this.incomeDetailBtnClick('', 'all', this.incomebtnshowheigharr.length - 1, i);
    }
    /**
     * 点击收入详情框按钮
     * 传入三个参数 e,type,i
     * params：e为事件对象，type为收入结构类型，i为按钮序号
     * */
    incomeDetailBtnClick(e, type, i, list) {
        this.incomebtnshowheigharr.fill(false);
        this.incomebtnshowheigharr[i] = true;
        this.http.get('./assets/echarts/homepagedata.json').subscribe(
            data => {
                this.incomedetailData = this.analyzeData.incomedetailData(data, this.incomeclickedBtn, type);
                // tslint:disable-next-line:max-line-length
                if (i === (this.incomeDetailBtnArr.length - 1) && (list === 0)) {
                    this.homepageIncomeDetailBarOption = {
                        color: [
                            '#3cbdb2',
                            '#ff473d',
                        ],
                        legend: {
                            data: ['收入', '增长率'],
                        },
                        xAxis: [
                            {
                                type: 'category',
                                // tslint:disable-next-line:max-line-length
                                data: [
                                    '2016.6',
                                    '2016.7',
                                    '2016.8',
                                    '2016.10',
                                    '2016.11',
                                    '2016.12',
                                    '2017.2',
                                    '2017.3',
                                    '2017.4',
                                    '2017.5',
                                    '2017.6',
                                    '2017.7',
                                    '2017.8',
                                    '2017.9',
                                    '2017.10',
                                    '2017.11',
                                    '2017.12',
                                    '2018.2',
                                    '2018.3',
                                    '2018.4',
                                    '2018.5预测',
                                    '2018.6预测',
                                    '2018.7预测',
                                ],
                                axisPointer: {
                                    type: 'shadow',
                                },
                            },
                        ],
                        grid: {
                            left: '15%',
                            right: '5%',
                            bottom: '13%',
                        },
                        tooltip: {
                            trigger: 'item',
                        },
                        yAxis: [
                            {
                                type: 'value',
                                name: '收入',
                            },
                            {
                                type: 'value',
                                name: '增长率',
                                max: '100',
                            },
                        ],
                        series: [
                            {
                                name: '收入',
                                type: 'bar',
                                barWdith: '50%',
                                label: {
                                    normal: {
                                        show: true,
                                    },
                                },
                                data: [
                                    '22537',
                                    '26622',
                                    '30526',
                                    '39073',
                                    '43133',
                                    '49000',
                                    '6925',
                                    '11383',
                                    '15753',
                                    '20307',
                                    '25584',
                                    '29914',
                                    '34602',
                                    '39827',
                                    '44210',
                                    '49020',
                                    '55037',
                                    '8196',
                                    '13099',
                                    '18189',
                                    '23224',
                                    '29274',
                                    '34244',
                                ],
                            },
                            {
                                name: '增长率',
                                type: 'line',
                                yAxisIndex: 1,
                                label: {
                                    normal: {
                                        show: true,
                                    },
                                },
                                data: [
                                    '-',
                                    '18.13',
                                    '14.66',
                                    '-',
                                    '10.39',
                                    '13.60',
                                    '-',
                                    '64.38',
                                    '38.39',
                                    '28.91',
                                    '25.99',
                                    '16.92',
                                    '15.67',
                                    '15.10',
                                    '11.01',
                                    '10.88',
                                    '12.27',
                                    '-',
                                    '59.82',
                                    '38.86',
                                    '27.68',
                                    '26.05',
                                    '16.98',
                                ],
                            },
                        ],
                    };
                } else if (i === (this.incomeDetailBtnArr.length - 1) && (list === 1)) {
                    this.homepageIncomeDetailBarOption = {
                        color: [
                            '#3cbdb2',
                            '#ff473d',
                        ],
                        legend: {
                            data: ['利润', '增长率'],
                        },
                        xAxis: [
                            {
                                type: 'category',
                                // tslint:disable-next-line:max-line-length
                                data: [
                                    '2016.6',
                                    '2016.7',
                                    '2016.8',
                                    '2016.10',
                                    '2016.11',
                                    '2016.12',
                                    '2017.2',
                                    '2017.3',
                                    '2017.4',
                                    '2017.5',
                                    '2017.6',
                                    '2017.7',
                                    '2017.8',
                                    '2017.9',
                                    '2017.10',
                                    '2017.11',
                                    '2017.12',
                                    '2018.2',
                                    '2018.3',
                                    '2018.4',
                                    '2018.5预测',
                                    '2018.6预测',
                                    '2018.7预测',
                                ],
                                axisPointer: {
                                    type: 'shadow',
                                },
                            },
                        ],
                        grid: {
                            left: '15%',
                            right: '5%',
                            bottom: '13%',
                        },
                        tooltip: {
                            trigger: 'item',
                        },
                        yAxis: [
                            {
                                type: 'value',
                                name: '利润',
                            },
                            {
                                type: 'value',
                                name: '增长率',
                                max: '100',
                            },
                        ],
                        series: [
                            {
                                name: '利润',
                                type: 'bar',
                                label: {
                                    normal: {
                                        show: true,
                                    },
                                },
                                data: [
                                    '2737',
                                    '3162',
                                    '3613',
                                    '4646',
                                    '554',
                                    '6021',
                                    '778',
                                    '1319',
                                    '1858',
                                    '2378',
                                    '3039',
                                    '3521',
                                    '4077',
                                    '4731',
                                    '5314',
                                    '6008',
                                    '7020',
                                    '893',
                                    '1576',
                                    '2196',
                                    '2666',
                                    '3421',
                                    '3974',
                                ],
                            },
                            {
                                name: '增长率',
                                type: 'line',
                                yAxisIndex: 1,
                                label: {
                                    normal: {
                                        show: true,
                                    },
                                },
                                data: [
                                    '-',
                                    '15.53',
                                    '14.26',
                                    '28.59',
                                    '-88.08',
                                    '986.82',
                                    '-87.08',
                                    '69.54',
                                    '40.86',
                                    '27.99',
                                    '27.80',
                                    '15.86',
                                    '15.79',
                                    '16.04',
                                    '12.32',
                                    '13.06',
                                    '16.84',
                                    '-87.28',
                                    '76.48',
                                    '39.34',
                                    '21.40',
                                    '28.32',
                                    '16.16',
                                ],
                            },
                        ],
                    };
                } else {
                    // tslint:disable-next-line:max-line-length
                    this.homepageIncomeDetailBarOption = this.options.homepageIncomeDetailBarOption(this.incomedetailData, this.incomeclickedBtn);
                }
            },
        );
    }
    // 关闭收入详情图表
    incomechartsclose() {
        this.incomechartsshowheighArr.fill(false);
        this.ifhideIncomeChart = true;
    }
    /**
     * "国际合作" -- 点击图例
     * 传入三个参数 e,country,name
     * params：e为事件对象，country为与中国合作的国家，name为合作国家简写（如：“中德”）
     * */
    legendClicked(e, country, name) {
        if (country === '泰国' || country === '德国' || country === '中日韩') {
            if (this.clickedLegendCountry && this.clickedLegendCountry === country) {
                this.clickedLegendCountry = '';
                this.joinShow = false;
            } else {
                this.http.get('./assets/echarts/homepagedata.json').subscribe(
                    data => {
                        // tslint:disable-next-line:max-line-length
                        this.joinShowData = this.analyzeData.anylyzeWorldmapData(data, 'join', name)[2];
                    },
                );
                this.clickedLegendCountry = country;
                this.joinShow = true;
            }
            this.setworldmap(this.linesFromnameArr);
        }
    }
    // "国际合作" -- 关闭弹框
    closeJoinshow() {
        this.joinShow = false;
        this.clickedLegendCountry = '';
        this.setworldmap(this.linesFromnameArr);
    }
    // "企业走出去" -- 企业筛选
    selectedCompanyChange() {
        this.linesFromnameArr = this.selectedCompany;
        this.setworldmap(this.linesFromnameArr);
    }
    // 右侧伸缩框
    extendBox() {
        this.ifexpendbox = !this.ifexpendbox;
        this.ifmarginauto = !this.ifmarginauto;
        this.ifarrowRotate = !this.ifarrowRotate;
        // tslint:disable-next-line:max-line-length
        this.homepageIncomeDetailBarOption = this.options.homepageIncomeDetailBarOption(this.incomedetailData, this.incomeclickedBtn);
        this.setworldmap(this.linesFromnameArr);
    }
    // 地图点击
    chinaAreaClicked(e) {
        if (e.name === 'China') {
            this.router.navigate(['pages/industryDistribution']);
        }
    }

}
