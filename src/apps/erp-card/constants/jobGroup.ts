import type { JobGroup } from '../types/jobGroup';

export const jobGroups: JobGroup[] = [
  [
    ['文艺工作', 'wenyigongzuo'],
    [
      ['作家(原作向)', 'zuojia'],
      ['编辑', 'bianji'],
      ['设计师', 'shejishi'],
      ['音乐家', 'yinyuejia'],
      ['电影演员', 'dianyingyanyuan'],
      ['戏剧演员', 'xijuyanyuan'],
      ['替身演员', 'tishenyanyuan'],
      ['杂技演员', 'zajiyanyuan'],
      ['摄影师', 'sheyingshi'],
      ['摄影记者', 'sheyingjizhe'],
      ['艺人', 'yiren'],
      ['业余艺术爱好者(原作向)', 'yeyuyishuaihaozhe'],
    ],
  ],
  [
    ['工农商', 'gongnongshang'],
    [
      ['工程师', 'gongchengshi'],
      ['建筑师', 'jianzhushi'],
      ['伐木工', 'famugong'],
      ['工匠', 'gongjiang'],
      ['技工', 'jigong'],
      ['矿工', 'kuanggong'],
      ['农民', 'nongmin'],
      ['渔民', 'yumin'],
      ['猎人', 'lieren'],
      ['牛仔', 'niuzai'],
      ['书商', 'shushang'],
      ['古董商', 'gudongshang'],
      ['店老板', 'dianlaoban'],
    ],
  ],
  [
    ['职工', 'zhigong'],
    [
      ['会计师', 'kuaijishi'],
      ['中介调查员', 'zhongjiediaochayuan'],
      ['职员/主管', 'zhiyuanzhuguan'],
      ['中高层管理人员', 'zhonggaocengguanlirenyuan'],
      ['秘书', 'mishu'],
      ['推销员', 'tuixiaoyuan'],
      ['图书馆管理员(原作向)', 'tushuguanguanliyuanyuanzuoxiang'],
      ['博物馆管理员', 'bowuguanguanliyuan'],
      ['律师', 'lvshi'],
      ['程序员', 'chengxuyuan'],
      ['司机', 'siji'],
      ['私人司机', 'sirensiji'],
      ['出租车司机', 'chuzuchesiji'],
    ],
  ],
  [
    ['学者', 'xuezhe'],
    [
      ['文物学家(原作向)', 'wenwuxuejiayuanzuoxiang'],
      ['考古学家(原作向)', 'kaoguxuejiayuanzuoxiang'],
      ['教授(原作向)', 'jiaoshouyuanzuoxiang'],
      ['科学家', 'kexuejia'],
      ['研究员', 'yanjiuyuan'],
      ['实验室助理', 'shiyanshizhuli'],
      ['学生/实习生', 'xueshengshixisheng'],
      ['艺术家', 'yishujia'],
    ],
  ],
  [
    ['医疗系统', 'yiliaoxitong'],
    [
      ['医生(原作向)', 'yishengyuanzuoxiang'],
      ['护士', 'hushi'],
      ['法医', 'fayi'],
      ['心理学家', 'xinlixuejia'],
      ['精神病学家', 'jingshenbingxuejia'],
      ['精神病医生(古典)', 'jingshenbingyishenggudian'],
      ['精神病院护工', 'jingshenbingyuanhugong'],
      ['药剂师', 'yaojishi'],
    ],
  ],
  [
    ['运动/探险', 'yundongtanxian'],
    [
      ['运动员', 'yundongyuan'],
      ['拳击手、摔跤手', 'shuaijiaoshouquanjishou'],
      ['潜水员', 'qianshuiyuan'],
      ['调查记者(原作向)', 'diaochajizheyuanzuoxiang'],
      ['通讯记者(原作向)', 'tongxunjizheyuanzuoxiang'],
      ['驻外记者', 'zhuwaijizhe'],
      ['登山家', 'dengshanjia'],
      ['旅行家', 'lvxingjia'],
      ['探险家(古典)', 'tanxianjiagudian'],
      ['飞行员', 'feixingyuan'],
      ['特技飞行员(古典)', 'tejifeixingyuangudian'],
    ],
  ],
  [
    ['服务业', 'fuwuye'],
    [
      ['酒保', 'jiubao'],
      ['服务生', 'fuwusheng'],
      ['管家、佣人', 'guanjiayongren'],
      ['勤杂护工', 'qinzahugong'],
      ['殡葬师', 'binzangshi'],
      ['饲养员', 'siyangyuan'],
      ['动物训练师', 'dongwuxunlianshi'],
    ],
  ],
  [
    ['宗教相关', 'zongjiaoxiangguan'],
    [
      ['神秘学家', 'shenmixuejia'],
      ['神职人员', 'shenzhirenyuan'],
      ['教团首领', 'jiaotuanshouling'],
      ['传教士', 'chuanjiaoshi'],
      ['除魅师(现代)', 'chumeishixiandai'],
      ['狂热者', 'kuangrezhe'],
      ['部落成员', 'buluochengyuan'],
    ],
  ],
  [
    ['灰色/无职', 'huisewuzhi'],
    [
      ['私家侦探', 'sijiazhentan'],
      ['黑客', 'heike'],
      ['黑帮老大', 'heibanglaoda'],
      ['黑帮马仔', 'heibangmazai'],
      ['性工作者', 'xinggongzuozhe'],
      ['赏金猎人', 'shangjinlieren'],
      ['赌徒', 'dutu'],
      ['游民', 'youmin'],
      ['流浪者', 'liulangzhe'],
      ['淘金客', 'taojinke'],
      ['绅士/淑女', 'shenshishunv'],
    ],
  ],
  [
    ['罪犯', 'zuifan'],
    [
      ['刺客', 'cike'],
      ['银行劫匪', 'yinhangjiefei'],
      ['打手、暴徒', 'dashoubaotu'],
      ['窃贼', 'qiezei'],
      ['欺诈师', 'qizhashi'],
      ['独行罪犯', 'duxingzuifan'],
      ['女飞贼(古典)', 'nvfeizeigudian'],
      ['赃物贩子', 'zangwufanzi'],
      ['赝造者', 'yanzaozhe'],
      ['走私者', 'zousizhe'],
      ['混混', 'hunhun'],
    ],
  ],
  [
    ['军警政', 'junjingzheng'],
    [
      ['军官', 'junguan'],
      ['海军', 'haijun'],
      ['间谍', 'jiandie'],
      ['士兵', 'shibing'],
      ['警探(原作向)', 'jingtanyuanzuoxiang'],
      ['巡警(原作向)', 'xunjingyuanzuoxiang'],
      ['消防员', 'xiaofangyuan'],
      ['法官', 'faguan'],
      ['司法人员', 'sifarenyuan'],
      ['政府官员', 'zhengfuguanyuan'],
      ['工会活动家', 'gonghuihuodongjia'],
    ],
  ],
];
