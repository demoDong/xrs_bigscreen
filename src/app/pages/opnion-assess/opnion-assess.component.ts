import { Component, OnInit } from '@angular/core';
import { GalleriaModule, SelectItem, DropdownModule } from 'primeng/primeng';

// import { IndustryDistributionService } from './IndustryDistribution.service'
import { HttpApi, ResponseType } from '../../shared/do-service/http-api.service';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'do-opnion-assess',
  templateUrl: './opnion-assess.component.html',
  styleUrls: ['./opnion-assess.component.scss'],
})
export class OpnionAssessComponent implements OnInit {
  meunTitle = '';
  public buttonList: Array<any>;
  public joinlinesArr: Array<any>;
  public joinShowData: any;
  ifhideIncomeChart: Boolean;
  ifclickedChart: Boolean = true;
  constructor () {
    this.buttonList = ['停电客户子视图', '停电服务子视图', '停电台区子视图', '停电线路子视图'];
    this.joinlinesArr = [
      { name: '中泰', country: '泰国' },
      { name: '中德', country: '德国' },
      { name: '中美', country: '美国' },
      { name: '中印', country: '印度' },
    ];
    this.joinShowData = [

      {
        'day': '06/18',
        'year': '2018',
        'countrys': '',
        'title': '来源：中国经营网',
        'content': '京东金融打造智能城市信用平台 用AI和大数据服务城市信用，6月18日上午， 2018年中国城市信用建设高峰论坛在福州举行……',
      },
      {
        'day': '06/18',
        'year': '2018',
        'countrys': '',
        'title': '来源：搜狐',
        // tslint:disable-next-line:max-line-length
        'content': '印度国家转型委员会秘书长：印中双方应在区块链等领域开展创新合作，Bianews 6月18日消息，据新华社新德里报道，昨日，印度国家转型委员会秘书长康德在“后武汉时期：中印关系愿景与速度”研讨会上表示，印中是世界重要经济体，两国关系对本地区乃至世界具有重要影响……',
      },
      {
        'day': '06/17',
        'year': '2018',
        'countrys': '',
        'title': '来源：前瞻网',
        'content': '2018年大数据产业分析 区域集聚发展格局逐步形成，　' +
          '目前，我国大数据产业发展已逐步形成了以8个国家大数据综合试验区为引领，京津冀区域、长三角地区、珠三角地区、中西部地区和东北地区五个集聚发展区的集聚发展格局……',
      },
      {
        'day': '06/16',
        'year': '2018',
        'countrys': '',
        'title': '来源：浙江在线',
        'content': '数字经济进入粮食市场 衢州粮食电子商务产业园开业，浙江在线6月16日讯（浙江在线记者 袁华明 通讯员 于倩） 粮食行业如何玩转电商？日前，衢州粮食电子商务产业园开业，让数字经济进入粮食市场……',
      },
      {
        'day': '06/16',
        'year': '2018',
        'countrys': '',
        'title': '来源：IT研究中心',
        // tslint:disable-next-line:max-line-length
        'content': '云计算和大数据服务商微天下A轮融资2亿元，IT研究中心消息 据国内媒体报道，云计算和大数据产品服务提供商浙江微天下信息科技股份有限公司(以下简称“微天下”)日前完成2亿元的A轮融资，投资方为宝鹰投资……',
      },

      {
        'day': '06/16',
        'year': '2018',
        'countrys': '',
        'title': '来源：搜狐科技',
        // tslint:disable-next-line:max-line-length
        'content': '全球最大贵金属精炼商将利用区块链实现黄金溯源，Bianews 6月16日消息，近日，全球最大贵金属精炼商瓦尔坎比（Valcambi sa）宣布，将利用区块链技术，追踪黄金从矿山、精炼到存储的全过程……',
      },

      {
        'day': '06/15',
        'year': '2018',
        'countrys': '',
        'title': '来源：人民网',
        'content': '《领导干部大数据应用指南》由人民日报出版社正式出版、人民网北京6月15日电 近日，大数据领导干部读本《领导干部大数据应用指南》由人民日报出版社正式出版发行……',
      },

      {
        'day': '06/14',
        'year': '2018',
        'countrys': '',
        'title': '来源：搜狐科技',
        // tslint:disable-next-line:max-line-length
        'content': '全球最大贵金属精炼商将利用区块链实现黄金溯源，Bianews 6月14日消息，近日，全球最大贵金属精炼商瓦尔坎比（Valcambi sa）宣布，将利用区块链技术，追踪黄金从矿山、精炼到存储的全过程……   ',
      },
    ];
  }

  ngOnInit() {
    this.meunTitle = '大数据舆情';

  }

  changeBgimg() {
    // this.ifhideIncomeChart = true;
    // this.ifclickedChart = false;
  }

}
