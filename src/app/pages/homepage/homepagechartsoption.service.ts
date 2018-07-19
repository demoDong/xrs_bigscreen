import { Injectable } from '@angular/core';
import { serializePath } from '@angular/router/src/url_tree';

@Injectable()
export class HomepagechartsoptionService {
  countryPositions = {
    '阿富汗': [67.709953, 33.93911],
    '安哥拉': [17.873887, -11.202692],
    '阿尔巴尼亚': [20.168331, 41.153332],
    '阿联酋': [53.847818, 23.424076],
    '阿根廷': [-63.61667199999999, -38.416097],
    '亚美尼亚': [45.038189, 40.069099],
    // '法属南半球和南极领地': [69.348557, -49.280366],
    '澳大利亚': [133.775136, -25.274398],
    '奥地利': [14.550072, 47.516231],
    '阿塞拜疆': [47.576927, 40.143105],
    '布隆迪': [29.918886, -3.373056],
    '比利时': [4.469936, 50.503887],
    '贝宁': [2.315834, 9.30769],
    '布基纳法索': [-1.561593, 12.238333],
    '孟加拉国': [90.356331, 23.684994],
    '保加利亚': [25.48583, 42.733883],
    '巴哈马': [-77.39627999999999, 25.03428],
    '波斯尼亚和黑塞哥维那': [17.679076, 43.915886],
    '白俄罗斯': [27.953389, 53.709807],
    '伯利兹': [-88.49765, 17.189877],
    '百慕大': [-64.7505, 32.3078],
    '玻利维亚': [-63.58865299999999, -16.290154],
    '巴西': [-51.92528, -14.235004],
    '文莱': [114.727669, 4.535277],
    '不丹': [90.433601, 27.514162],
    '博茨瓦纳': [24.684866, -22.328474],
    '中非共和国': [20.939444, 6.611110999999999],
    '加拿大': [-106.346771, 56.130366],
    '瑞士': [8.227511999999999, 46.818188],
    '智利': [-71.542969, -35.675147],
    '中国': [104.195397, 35.86166],
    '象牙海岸': [-5.547079999999999, 7.539988999999999],
    '喀麦隆': [12.354722, 7.369721999999999],
    '刚果民主共和国': [21.758664, -4.038333],
    '刚果共和国': [15.827659, -0.228021],
    '哥伦比亚': [-74.297333, 4.570868],
    '哥斯达黎加': [-83.753428, 9.748916999999999],
    '古巴': [-77.781167, 21.521757],
    '北塞浦路斯': [33.429859, 35.126413],
    '塞浦路斯': [33.429859, 35.126413],
    '捷克共和国': [15.472962, 49.81749199999999],
    '德国': [10.451526, 51.165691],
    '吉布提': [42.590275, 11.825138],
    '丹麦': [9.501785, 56.26392],
    '多明尼加共和国': [-70.162651, 18.735693],
    '阿尔及利亚': [1.659626, 28.033886],
    '厄瓜多尔': [-78.18340599999999, -1.831239],
    '埃及': [30.802498, 26.820553],
    '厄立特里亚': [39.782334, 15.179384],
    '西班牙': [-3.74922, 40.46366700000001],
    '爱沙尼亚': [25.013607, 58.595272],
    '埃塞俄比亚': [40.489673, 9.145000000000001],
    '芬兰': [25.748151, 61.92410999999999],
    '斐': [178.065032, -17.713371],
    '福克兰群岛': [-59.523613, -51.796253],
    '法国': [2.213749, 46.227638],
    '加蓬': [11.609444, -0.803689],
    '英国': [-3.435973, 55.378051],
    '格鲁吉亚': [-82.9000751, 32.1656221],
    '加纳': [-1.023194, 7.946527],
    '几内亚': [-9.696645, 9.945587],
    '冈比亚': [-15.310139, 13.443182],
    '几内亚比绍': [-15.180413, 11.803749],
    '赤道几内亚': [10.267895, 1.650801],
    '希腊': [21.824312, 39.074208],
    '格陵兰': [-42.604303, 71.706936],
    '危地马拉': [-90.23075899999999, 15.783471],
    '法属圭亚那': [-53.125782, 3.933889],
    '圭亚那': [-58.93018, 4.860416],
    '洪都拉斯': [-86.241905, 15.199999],
    '克罗地亚': [15.2, 45.1],
    '海地': [-72.285215, 18.971187],
    '匈牙利': [19.503304, 47.162494],
    '印尼': [113.921327, -0.789275],
    '印度': [78.96288, 20.593684],
    '爱尔兰': [-8.24389, 53.41291],
    '伊朗': [53.688046, 32.427908],
    '伊拉克': [43.679291, 33.223191],
    '冰岛': [-19.020835, 64.963051],
    '以色列': [34.851612, 31.046051],
    '意大利': [12.56738, 41.87194],
    '牙买加': [-77.297508, 18.109581],
    '约旦': [36.238414, 30.585164],
    '日本': [138.252924, 36.204824],
    '哈萨克斯坦': [66.923684, 48.019573],
    '肯尼亚': [37.906193, -0.023559],
    '吉尔吉斯斯坦': [74.766098, 41.20438],
    '柬埔寨': [104.990963, 12.565679],
    '韩国': [127.766922, 35.907757],
    '科索沃': [20.902977, 42.6026359],
    '科威特': [47.481766, 29.31166],
    '老挝': [102.495496, 19.85627],
    '黎巴嫩': [35.862285, 33.854721],
    '利比里亚': [-9.429499000000002, 6.428055],
    '利比亚': [17.228331, 26.3351],
    '斯里兰卡': [80.77179699999999, 7.873053999999999],
    '莱索托': [28.233608, -29.609988],
    '立陶宛': [23.881275, 55.169438],
    '卢森堡': [6.129582999999999, 49.815273],
    '拉脱维亚': [24.603189, 56.879635],
    '摩洛哥': [-7.092619999999999, 31.791702],
    '摩尔多瓦': [28.369885, 47.411631],
    '马达加斯加': [46.869107, -18.766947],
    '墨西哥': [-102.552784, 23.634501],
    '马其顿': [21.745275, 41.608635],
    '马里': [-3.996166, 17.570692],
    '缅甸': [95.956223, 21.913965],
    '黑山': [19.37439, 42.708678],
    '蒙古': [103.846656, 46.862496],
    '莫桑比克': [35.529562, -18.665695],
    '毛里塔尼亚': [-10.940835, 21.00789],
    '马拉维': [34.301525, -13.254308],
    '马来西亚': [101.975766, 4.210484],
    '纳米比亚': [18.49041, -22.95764],
    '新喀里多尼亚': [165.618042, -20.904305],
    '尼日尔': [8.081666, 17.607789],
    '尼日利亚': [8.675277, 9.081999],
    '尼加拉瓜': [-85.207229, 12.865416],
    '荷兰': [5.291265999999999, 52.132633],
    '挪威': [8.468945999999999, 60.47202399999999],
    '尼泊尔': [84.12400799999999, 28.394857],
    '新西兰': [174.885971, -40.900557],
    '阿曼': [55.923255, 21.512583],
    '巴基斯坦': [69.34511599999999, 30.375321],
    '巴拿马': [-80.782127, 8.537981],
    '秘鲁': [-75.015152, -9.189967],
    '菲律宾': [121.774017, 12.879721],
    '巴布亚新几内亚': [143.95555, -6.314992999999999],
    '波兰': [19.145136, 51.919438],
    '波多黎各': [-66.590149, 18.220833],
    '北朝鲜': [127.510093, 40.339852],
    '葡萄牙': [-8.224454, 39.39987199999999],
    '巴拉圭': [-58.443832, -23.442503],
    '卡塔尔': [51.183884, 25.354826],
    '罗马尼亚': [24.96676, 45.943161],
    '俄罗斯': [105.318756, 61.52401],
    '卢旺达': [29.873888, -1.940278],
    '西撒哈拉': [-12.885834, 24.215527],
    '沙特阿拉伯': [45.079162, 23.885942],
    '苏丹': [30.217636, 12.862807],
    '南苏丹': [31.3069788, 6.876991899999999],
    '塞内加尔': [-14.452362, 14.497401],
    '所罗门群岛': [160.156194, -9.64571],
    '塞拉利昂': [-11.779889, 8.460555],
    '萨尔瓦多': [-88.89653, 13.794185],
    '索马里兰': [46.8252838, 9.411743399999999],
    '索马里': [46.199616, 5.152149],
    '塞尔维亚共和国': [21.005859, 44.016521],
    '苏里南': [-56.027783, 3.919305],
    '斯洛伐克': [19.699024, 48.669026],
    '斯洛文尼亚': [14.995463, 46.151241],
    '瑞典': [18.643501, 60.12816100000001],
    '斯威士兰': [31.465866, -26.522503],
    '叙利亚': [38.996815, 34.80207499999999],
    '乍得': [18.732207, 15.454166],
    '多哥': [0.824782, 8.619543],
    '泰国': [100.992541, 15.870032],
    '塔吉克斯坦': [71.276093, 38.861034],
    '土库曼斯坦': [59.556278, 38.969719],
    '东帝汶': [125.727539, -8.874217],
    '特里尼达和多巴哥': [-61.222503, 10.691803],
    '突尼斯': [9.537499, 33.886917],
    '土耳其': [35.243322, 38.963745],
    '坦桑尼亚联合共和国': [34.888822, -6.369028],
    '乌干达': [32.290275, 1.373333],
    '乌克兰': [31.16558, 48.379433],
    '乌拉圭': [-55.765835, -32.522779],
    '美国': [-95.712891, 37.09024],
    '乌兹别克斯坦': [64.585262, 41.377491],
    '委内瑞拉': [-66.58973, 6.42375],
    '越南': [108.277199, 14.058324],
    '瓦努阿图': [166.959158, -15.376706],
    '西岸': [35.3027226, 31.9465703],
    '也门': [48.516388, 15.552727],
    '南非': [22.937506, -30.559482],
    '赞比亚': [27.849332, -13.133897],
    '津巴布韦': [29.154857, -19.015438],
    '云南南天电子信息产业股份有限公司': [102.740681, 25.039725],
    '四川省通信产业服务有限公司': [102.89916, 30.367481],
    '亚信科技（中国）有限公司': [104.114129, 37.550339],
    '金蝶软件（中国）有限公司': [104.114129, 37.550339],
    '株洲中车时代电气股份有限公司': [113.131695, 27.827433],
    '广州佳都集团有限公司': [113.378584, 23.130517],
    '广州海格通信集团股份有限公司': [113.4529, 23.1504],
    '广州广电运通金融电子股份有限公司': [113.453331, 23.148727],
    '广东维沃软件技术有限公司': [113.948094, 22.550698],
    '深圳天源迪科信息技术股份有限公司': [113.952885, 22.539243],
    '深圳市大疆创新科技有限公司': [113.971971, 22.595078],
    '深圳市云中飞网络科技有限公司': [114.025974, 22.546054],
    '平安科技（深圳）有限公司': [114.025974, 22.546054],
    '深圳怡化电脑股份有限公司': [114.025974, 22.546054],
    '深圳创维数字技术有限公司': [114.050663, 22.605093],
    '深圳市金证科技股份有限公司': [114.076138, 22.541064],
    '武汉邮电科学研究院': [114.397614, 30.521235],
    '北京中油瑞飞信息技术有限责任公司': [116.217133, 39.90488],
    '北京四方继保自动化股份有限公司': [116.259996, 40.07323],
    '航天信息股份有限公司': [116.26427, 39.952295],
    '软通动力信息技术（集团）有限公司': [116.27586, 40.055524],
    '百度云计算技术(北京)有限公司': [116.280907, 40.050259],
    '广联达科技股份有限公司': [116.294602, 40.057331],
    '南京南瑞集团公司': [116.295238, 39.829332],
    '万达信息股份有限公司': [116.303724, 39.919321],
    '博彦科技股份有限公司': [116.304311, 40.05099],
    '中国电子科技网络信息安全有限公司': [116.305319, 39.930809],
    '北京神州泰岳软件股份有限公司': [116.308124, 39.974493],
    '普天信息技术研究院有限公司': [116.317132, 40.040105],
    '国网信息通信产业集团有限公司': [116.317821, 40.04182],
    '启明星辰信息技术集团股份有限公司': [116.317821, 40.04182],
    '中控科技集团有限公司': [116.318175, 39.888275],
    '北京全路通信信号研究设计院集团有限公司': [116.322819, 39.883511],
    '浙大网新科技股份有限公司': [116.331107, 39.959174],
    '北京易华录信息技术股份有限公司': [116.340153, 39.999824],
    '中科软科技股份有限公司': [116.340482, 39.990225],
    '中国软件与技术服务股份有限公司': [116.34137, 39.964123],
    '神州数码系统集成服务有限公司': [116.342658, 39.95904],
    '同方股份有限公司': [116.345946, 40.005377],
    '文思海辉技术有限公司': [116.36308, 40.050397],
    '华为技术有限公司': [116.368714, 39.912446],
    '太极计算机股份有限公司': [116.380713, 39.994563],
    '北京京东尚科信息技术有限公司': [116.395645, 39.929986],
    '北京千方科技股份有限公司': [116.395645, 39.929986],
    '北京华胜天成科技股份有限公司': [116.395645, 39.929986],
    '北京华宇软件股份有限公司': [116.395645, 39.929986],
    '北京立思辰科技股份有限公司': [116.395645, 39.929986],
    '北京宇信科技集团股份有限公司': [116.395645, 39.929986],
    '中国民航信息网络股份有限公司': [116.418454, 39.93084],
    '东软集团股份有限公司': [116.430643, 39.954631],
    '石化盈科信息技术有限责任公司': [116.437404, 39.938782],
    '北京四维图新科技股份有限公司': [116.461426, 39.966684],
    '北京中软国际信息技术有限公司': [116.470272, 39.939719],
    '高德信息技术有限公司': [116.487575, 39.995469],
    '大族激光科技产业集团股份有限公司': [116.503584, 39.77865],
    '天津天地伟业数码科技有限公司': [117.210813, 39.14393],
    '山东中创软件工程股份有限公司': [118.527663, 36.09929],
    '南京联创科技集团股份有限公司': [118.778074, 32.057236],
    '江苏省通信服务有限公司': [118.78979, 32.026292],
    '福州福大自动化科技有限公司': [119.275157, 26.029095],
    '江苏金智集团有限公司': [119.368489, 33.013797],
    '江苏润和科技投资集团有限公司': [119.368489, 33.013797],
    '杭州海兴电力科技股份有限公司': [120.108151, 30.345713],
    '杭州士兰微电子股份有限公司': [120.140326, 30.280157],
    '浙江大华技术股份有限公司': [120.178958, 30.1891],
    '杭州海康威视数字技术股份有限公司': [120.227282, 30.215829],
    '上海华东电脑股份有限公司': [121.421162, 31.183996],
    '携程旅游网络技术(上海)有限公司': [121.487899, 31.249162],
    '上海华讯网络系统有限公司': [121.588612, 31.210292],
    '上海宝信软件股份有限公司': [121.60487, 31.217393],
    '小米科技有限公司': [116.343225, 40.035383],
    '百度科技有限公司': [116.307689, 40.056974],
    '阿里云计算有限公司': [120.090144, 30.138649],
    'ofo': [116.319531, 39.985241],
    '摩拜': [116.474449, 39.95422],
    '金山': [116.329163, 40.042638],
    'MTN电信': [28.034003, -26.196376],
    '天津': [117.210813, 39.14393],
    '浙江': [120.178958, 30.1891],
    '四川': [102.89916, 30.367481],
    '北京': [116.46, 39.92],
    '上海': [121.48, 31.22],
    '广州': [113.23, 23.16],
    '深圳': [114.07, 22.62],
    '哈尔滨': [126.65, 45.77],
    '沈阳': [123.38, 41.8],
    '南京': [118.78, 32.04],
    '杭州': [120.21, 31.24],
    '成都': [104.06, 30.67],
    '西安': [108.95, 34.27],
    '武汉': [110.46, 32.36],
    '福州': [120.2, 26.89],
    '重庆': [106.54, 29.59],
    '长沙': [113, 28.21],
    '昆明': [108.33, 22.84],
    '乌鲁木齐': [87.68, 43.77],
    '济南': [117.024, 36.682],
    '天津市': [117.2, 39.13],
    '郑州': [113.04, 36.01],
    '合肥': [117.27, 31.68],
    '南昌': [115.89, 28.68],
    '南宁市': [108.297234, 22.806493],
    '宁波': [121.56, 29.86],
    '石家庄': [113.04, 36.01],
    '太原': [112.53, 37.87],
    '苏州': [118.78, 32.04],
    '青岛': [117, 36.69],
    '长春市': [125.313642, 43.898338],
    '呼和浩特市': [111.660351, 40.828319],
    '大连': [121.62, 38.92],
    '贵阳': [106.71, 26.57],
    '温州': [120.65, 28.01],
    '微软': [-95.712, 37.09],
    '甲骨文': [-95.712, 37.09],
    'IBM': [-95.712, 37.09],
    'SAP': [10.451, 51.165],
    '赛门铁克': [-95.712, 37.09],
    '易安信': [-95.712, 37.09],
    '富士通': [138.252, 36.204],
    '赛捷': [-3.4359, 55.378],
    '西门子': [10.451, 51.165],
    '日立': [138.252, 36.204],
  };

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
  ifshowsymbol: boolean;
  ifshowtimeline: boolean;
  linescurveness: number;
  constructor () { }
  // world map
  public homepageWorldMapOption(Data, linesFromnameArr, clickedBtnId, clickedLegendCountry) {
    clickedBtnId === 'join' ? this.ifshowsymbol = false : this.ifshowsymbol = true;
    clickedBtnId === 'incompany' ? this.linescurveness = 0.3 : this.linescurveness = -0.3;
    this.ifshowtimeline = true;
    const options = [];
    const timelineArr = [];
    // 解析获取时间轴数据
    linesFromnameArr.forEach(item => {
      Data.forEach(element => {
        if (element.fromCountry === item && timelineArr.indexOf(element.year) === -1) {
          timelineArr.push(element.year);
        }
      });
    });
    // 解析lines数据，设置lines配置项
    timelineArr.forEach(year => {
      const alllinesArr = [];
      const allpointsArr = [];
      const serieslist = {};
      linesFromnameArr.forEach(fromname => {
        Data.forEach(element => {
          if (element.fromCountry === fromname && element.year === year) {
            switch (clickedBtnId) {
              case 'join':
                this.ifshowtimeline = false;
                element.join.forEach(list => {
                  // tslint:disable-next-line:max-line-length
                  if (element.fromCountry && list.toCountry && this.countryPositions[element.fromCountry] && this.countryPositions[list.toCountry] && this.colorList[list.type][0]) {
                    if (list.toCountry === clickedLegendCountry) {
                      alllinesArr.push({
                        fromName: element.fromCountry,
                        toName: list.toCountry,
                        coords: [this.countryPositions[element.fromCountry], this.countryPositions[list.toCountry]],
                        symbol: 'image://./assets/images/china-1.png',
                        lineStyle: {
                          normal: {
                            color: this.colorList[list.type][0],
                            type: 'dashed',
                            width: 3,
                            shadowColor: this.colorList[list.type][0],
                            shadowBlur: 30,
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                          },
                        },
                      });
                    } else {
                      alllinesArr.push({
                        fromName: element.fromCountry,
                        toName: list.toCountry,
                        coords: [this.countryPositions[element.fromCountry], this.countryPositions[list.toCountry]],
                        symbol: 'image://./assets/images/china-1.png',
                        lineStyle: {
                          normal: {
                            color: this.colorList[list.type][0],
                            type: 'dashed',
                            width: 3,
                          },
                        },
                      });
                    }
                    allpointsArr.push({
                      name: list.toCountry,
                      value: this.countryPositions[list.toCountry],
                    });
                  }
                });
                break;
              case 'china':
                element.toCountry.forEach(list => {
                  // tslint:disable-next-line:max-line-length
                  if (element.fromCountry && this.countryPositions[element.fromCountry] && this.countryPositions[list] && this.colorList[fromname][0]) {
                    alllinesArr.push({
                      fromName: element.fromCountry,
                      toName: list,
                      coords: [this.countryPositions[element.fromCountry], this.countryPositions[list]],
                      symbol: 'image://./assets/images/china-1.png',
                      effect: {
                        symbol: 'image://./assets/images/china.png',
                      },
                      lineStyle: {
                        normal: {
                          color: this.colorList[fromname][0],
                          width: 1,
                          type: 'solid',
                        },
                      },
                    });
                    allpointsArr.push({
                      name: list,
                      value: this.countryPositions[list],
                    });
                  }
                });
                break;
              case 'outcompany':
                element.toCountry.forEach(list => {
                  // tslint:disable-next-line:max-line-length
                  if (element.fromCountry && this.countryPositions[element.fromCountry] && this.countryPositions[list] && this.colorList[fromname][2] && this.colorList[fromname][0]) {
                    alllinesArr.push({
                      fromName: element.fromCountry,
                      toName: list,
                      coords: [this.countryPositions[element.fromCountry], this.countryPositions[list]],
                      symbol: 'image://./assets/images/' + this.colorList[fromname][2] + '-1.png',
                      effect: {
                        symbol: 'image://./assets/images/' + this.colorList[fromname][2] + '.png',
                      },
                      lineStyle: {
                        normal: {
                          color: this.colorList[fromname][0],
                          width: 1,
                          type: 'solid',
                        },
                      },
                    });
                    allpointsArr.push({
                      name: list,
                      value: this.countryPositions[list],
                    });
                  }
                });
                break;
              case 'incompany':
                this.ifshowtimeline = false;
                element.toCountry.forEach(list => {
                  // tslint:disable-next-line:max-line-length
                  if (element.fromCountry && this.countryPositions[element.fromCountry] && this.countryPositions[list] && this.colorList[fromname][2] && this.colorList[fromname][0]) {
                    alllinesArr.push({
                      fromName: element.fromCountry,
                      toName: list,
                      coords: [this.countryPositions[element.fromCountry], this.countryPositions[list]],
                      symbol: 'image://./assets/images/' + this.colorList[fromname][2] + '-1.png',
                      effect: {
                        symbol: 'image://./assets/images/' + this.colorList[fromname][2] + '.png',
                      },
                      lineStyle: {
                        normal: {
                          color: this.colorList[fromname][0],
                          width: 1,
                          type: 'solid',
                        },
                      },
                    });
                    allpointsArr.push({
                      name: list,
                      value: this.countryPositions[list],
                    });
                  }
                });
                break;
              default:
                break;
            }
          }
        });
      });
      serieslist['series'] = [
        { data: alllinesArr },
        { data: alllinesArr },
        { data: allpointsArr },
      ];
      options.push(serieslist);

    });
    const option = {
      baseOption: {
        timeline: {
          show: this.ifshowtimeline,
          data: timelineArr,
          autoPlay: false,
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          orient: 'vertical',
          top: 'bottom',
          left: 'right',
          textStyle: {
            color: '#fff',
          },
          selectedMode: 'single',
        },
        geo: {
          map: 'world',
          label: {
            emphasis: {
              show: false,
            },
          },
          roam: false,
          itemStyle: {
            normal: {
              areaColor: 'none',
              borderColor: 'rgba(0,255,255,0)',
              borderWidth: 1,
              shadowColor: 'rgba(5, 5, 0, 0.5)',
              shadowBlur: 10,
            },
            emphasis: {
              areaColor: '#0F528A',
            },
          },
        },
        series: [
          {
            type: 'lines',
            zlevel: 1,
            effect: {
              show: !this.ifshowtimeline,
              symbolSize: 0,
            },
            lineStyle: {
              normal: {
                opacity: 1,
                curveness: this.linescurveness,
              },
            },
          },
          {
            type: 'lines',
            zlevel: 2,
            symbolSize: 20,
            effect: {
              show: this.ifshowsymbol,
              period: 4,
              trailLength: 0,
              symbolSize: 50,
            },
            lineStyle: {
              normal: {
                opacity: 1,
                curveness: this.linescurveness,
              },
            },
          },
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
              brushType: 'stroke',
            },
            label: {
              normal: {
                show: true,
                position: 'right',
                formatter: '{b}',
              },
            },
            symbolSize: function (val) {
              return val[2] / 8;
            },
            itemStyle: {
              normal: {
                color: '#a6c84c',
              },
            },
          },
        ],
      },
      options: options,
    };
    return option;
  }
  // 柱状图：全球软件行业发展情况
  public homepageSoftwareDevBarOption(title, Data) {
    const option = {
      title: {
        text: title,
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['总收入', '同比增长'],
      },
      grid: {
        left: '15%',
        right: '13%',
      },
      xAxis: [
        {
          type: 'category',
          data: Data[0],
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: '总收入(亿美元)',
          min: 0,
          axisLabel: {
            formatter: '{value}',
          },
        },
        {
          type: 'value',
          name: '同比增长',
          min: 0,
          max: 100,
          axisLabel: {
            formatter: '{value} %',
          },
        },
      ],
      series: [
        {
          name: '总收入',
          type: 'bar',
          barWidth: '12',
          itemStyle: {
            normal: {
              color: '#00A8A0',
            },
          },
          data: Data[1],
        },
        {
          name: '同比增长',
          type: 'line',
          yAxisIndex: 1,
          data: Data[2],
          itemStyle: {
            normal: {
              color: '#E7E41E',
            },
          },
        },
      ],
    };
    return option;

  }
  // 柱状图：国内软件行业发展情况
  public homepageDomesticSoftwareDevBarOption(title, Data) {
    const option = {
      title: {
        text: title,
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['总收入', '同比增长'],
      },
      grid: {
        left: '15%',
        right: '13%',
      },
      xAxis: [
        {
          type: 'category',
          data: Data[0],
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: '总收入(亿元)',
          min: 0,
          axisLabel: {
            formatter: '{value}',
          },
        },
        {
          type: 'value',
          name: '同比增长',
          min: 0,
          max: 100,
          axisLabel: {
            formatter: '{value} %',
          },
        },
      ],
      series: [
        {
          name: '总收入',
          type: 'bar',
          itemStyle: {
            normal: {
              color: '#00A8A0',
            },
          },
          barWidth: '12',
          data: Data[1],
        },
        {
          name: '同比增长',
          type: 'line',
          yAxisIndex: 1,
          data: Data[2],
          itemStyle: {
            normal: {
              color: '#E7E41E',
            },
          },
        },
      ],
    };
    return option;

  }
  // 景气指数
  public homepageDomeJqzsLineOption(title, data) {
    return {
      title: {
        text: title,
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: data.legend,
      },
      grid: {
        right: '13%',
      },
      xAxis: [
        {
          type: 'category',
          data: data.axis,
        },
      ],
      yAxis: [
        {
          type: 'value',
          // name: '总收入(亿元)',
          // min: 0,
          // max: 100,
          // interval: 20,
          // axisLabel: {
          //   formatter: '{value}',
          // },
        },
        {
          type: 'value',
          // name: '利润率',
          // min: 0,
          // max: 25,
          // interval: 5,
          // axisLabel: {
          //   formatter: '{value} %',
          // },
        },
      ],
      series: [
        {
          name: data.legend[0],
          type: 'line',
          itemStyle: {
            normal: {
              color: '#00A8A0',
            },
          },
          data: data.data[0],
        },
        {
          name: '',
          type: 'line',
          itemStyle: {
            normal: {
              color: '#00A8A0',
              show: false,
            },
          },
          lineStyle: {
            normal: {
              type: 'dashed',
            },
          },
          data: data.data[3],
        },
        {
          name: data.legend[1],
          type: 'line',
          yAxisIndex: 1,
          data: data.data[1],
          itemStyle: {
            normal: {
              color: '#E7E41E',
            },
          },
        },
        {
          name: '',
          type: 'line',
          yAxisIndex: 1,
          data: data.data[2],
          itemStyle: {
            normal: {
              color: '#E7E41E',
            },
          },
          lineStyle: {
            normal: {
              type: 'dashed',
            },
          },
        },
      ],
    }
  }
  // 柱状图：业务收入、同比增长情况
  public homepageIncomeDetailBarOption(Data, legend) {
    const barData = [];
    const lineData = [];
    Data[1].forEach((element, index) => {
      if (index < (Data[1].length - 1)) {
        barData.push({
          value: element,
          itemStyle: {
            normal: {
              color: '#00A8A0',
            },
          },
        });
      } else {
        barData.push({
          value: element,
          itemStyle: {
            normal: {
              color: '#f00',
            },
          },
        });
      }
    });
    Data[2].forEach((element, index) => {
      if (index < (Data[1].length - 1)) {
        lineData.push({
          value: element,
          itemStyle: {
            normal: {
              color: '#E7E41E',
            },
          },
        });
      } else {
        lineData.push({
          value: element,
          itemStyle: {
            normal: {
              color: '#0f0',
              borderColor: '#f00',
            },
          },
        });
      }
    });
    const option = {
      tooltip: {
        trigger: 'axis',
      },
      grid: {
        top: '15%',
        bottom: '14%',
        left: '260',
      },
      legend: {
        data: [legend, '同比增长'],
        bottom: '2%',
      },
      xAxis: [
        {
          type: 'category',
          data: Data[0],
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: '单位(亿元)',
          interval: 20,
          axisLabel: {
            formatter: '{value}',
          },
        },
        {
          type: 'value',
          name: '单位(%)',
          interval: 5,
          axisLabel: {
            formatter: '{value} %',
          },
        },
      ],
      series: [
        {
          name: legend,
          type: 'bar',
          barWidth: '10%',
          data: barData,
          itemStyle: {
            normal: {
              color: '#00A8A0',
            },
          },
        },
        {
          name: '同比增长',
          type: 'line',
          yAxisIndex: 1,
          data: lineData,
          itemStyle: {
            normal: {
              color: '#E7E41E',
            },
          },
        },
      ],
    };
    return option;
  }

}
