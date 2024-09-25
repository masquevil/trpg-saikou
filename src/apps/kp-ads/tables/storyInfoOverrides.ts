import type { StoryInfoOverrides } from '../types/story';

// cover images
import cover湖之仆从 from '../assets/img/湖之仆从.jpg';
import cover通向庭院之歌 from '../assets/img/通向庭院之歌.jpg';
import cover醒来 from '../assets/img/醒来.jpg';
import cover芝加哥之王 from '../assets/img/芝加哥之王.jpg';
import cover周而复始 from '../assets/img/周而复始.jpg';
import cover小瓢虫快回家 from '../assets/img/小瓢虫快回家.jpg';
import cover亲密邂逅 from '../assets/img/亲密邂逅.jpg';
import cover只有猫知道的世界 from '../assets/img/只有猫知道的世界.jpg';
import cover死光 from '../assets/img/死光.jpg';
import cover大幕山 from '../assets/img/大幕山.jpg';
import cover燃烧的星辰 from '../assets/img/燃烧的星辰.jpg';
import cover不夜城的苍白之颜 from '../assets/img/不夜城的苍白之颜.jpg';
import cover狂气山脉 from '../assets/img/狂气山脉.jpg';
import cover疯狂嘉年华 from '../assets/img/疯狂嘉年华.jpg';

enum NonDicechoIds {
  '醒来',
}

function createNonDicechoId(id: NonDicechoIds): string {
  return `sox-id-${id + 1}`;
}

// currently all owned by sox
export const storyInfoOverrides: StoryInfoOverrides[] = [
  {
    id: '60805ce3a12bf00028239cde',
    title: '湖之仆从',
    duration: [4, 6],
    time: '1920s',
    place: '美国',
    coverUrl: cover湖之仆从,
    adds: `银行家的孩子为爱私奔，他会在神秘的湖畔带来什么样的阴谋？噩梦到来，失去踪迹的人们，还会在湖中再次崛起。`,
    labels: ['适合新手'],
  },
  {
    id: '60805536a12bf00028239cbc',
    title: '失落的缴款',
    time: '1920s',
    place: '美国阿卡姆',
    duration: [4, 6],
    coverUrl: cover通向庭院之歌,
    adds: `三起似乎互不相关的盗窃案，失落的匕首、丢失的卷轴、被窃的笔记……在阿卡姆寻找失物的途中，来自深渊的歌谣逐渐向调查员们奏响。`,
    labels: ['适合新手'],
  },
  {
    id: createNonDicechoId(NonDicechoIds.醒来),
    title: '醒来',
    time: '2003年',
    place: '中国北京',
    duration: [4, 6],
    coverUrl: cover醒来,
    adds: `雨后的街道上，霓虹闪烁，车流如织。后海的美景总是让人流连忘返，酒杯中罪恶的倒影却愈加看不清。深陷漩涡中心的你们，该醒了。`,
  },
  {
    id: '6007fcc8bb660b024e51174d',
    title: '让孩子们来我身边',
    time: '1920s',
    place: '美国',
    duration: [6, 10],
    adds: `小孩子不要乱跑哦~ 会被怪物吃掉！古老的传说，早被文明的列车碾碎。黑暗的夜再次降临，孩子们是否还有依靠？`,
    comments: '包含对儿童的暴力内容，请酌情游玩',
  },
  {
    id: '607ff8b885cecc0028fd2eca',
    title: '芝加哥之王',
    duration: [6, 10],
    time: '1920s',
    place: '美国',
    coverUrl: cover芝加哥之王,
    adds: `禁酒令禁不住人们的欲望与野心，大萧条更催生阴谋与背叛。黑帮之间的斗争从未停歇，深陷漩涡的你们是否还能全身而退？`,
    comments: '黑帮故事！芝加哥打字机！',
  },
  {
    id: '6007fcc8bb660b024e511788',
    title: '周而复始',
    time: '1995年',
    place: '中国',
    duration: [6, 10],
    coverUrl: cover周而复始,
    adds: `特工们被召集到阳光洒下的海边，静谧的沙滩与飘摇的渔船，表象之下，接头的本地线人却带来了惊天动地的秘密。`,
    comments: '死亡率极高，反转惊人',
  },
  {
    id: '6007fcc8bb660b024e51165d',
    title: '小瓢虫快回家',
    time: '现代',
    place: '美国',
    duration: [6, 10],
    coverUrl: cover小瓢虫快回家,
    adds: `身患重病的五岁小女孩突然被绑架，如果不及时治疗，几天之后小女孩的病情就会恶化。请你们一定要指引可爱的小瓢虫早日回家！`,
  },
  {
    id: '61e2787e0b239300287af1d8',
    title: '亲密邂逅',
    time: '现代',
    place: '中国上海',
    duration: [4, 6],
    coverUrl: cover亲密邂逅,
    adds: `人人匿名的数字时代，孤独的人们渴望与陌生人的交流。交友网站会员接连被杀，留下的是和精神一样空虚的躯壳。`,
    comments: '涉及交友网站内容，不适者请勿游玩',
  },
  {
    id: '6007fcc8bb660b024e51178e',
    title: '只有猫知道的世界',
    time: '2010s',
    place: '中国',
    duration: [4, 6],
    coverUrl: cover只有猫知道的世界,
    adds: `那个天才少年失踪了？去找找看吧，还好到这个小镇不算太远。不过，是不是哪里有一点点古怪？喵？喵喵喵？喵！`,
    comments: '轻松愉快，猫猫贴贴',
    labels: ['适合新手'],
  },
  {
    id: '600899bf4d80902d12715c6d',
    title: '狂气山脉~邪神的山岭~',
    time: '现代',
    place: '南极',
    duration: [6, 10],
    coverUrl: cover狂气山脉,
    adds: `南极突然出现海拔超过1万米的巨大山脉，成为新的世界第一高峰。无谋的人啊，向着最高点，攀登吧！`,
    comments: '电影制作中！',
    labels: ['特殊规则'],
  },
  {
    id: '600899bf4d80902d12715c6d',
    title: '狂气山脉~梦寻未知之峰~',
    time: '现代',
    place: '未知',
    duration: [6, 10],
    coverUrl: cover狂气山脉,
    adds: `海拔16000米，不应存在的无名之峰。征服了众神之座的登山家们，面对这如同梦境般的险峻顶峰，毅然开启挑战。`,
    comments: '狂气山脉2！向着更高的山进发！',
    labels: ['特殊规则'],
  },
  {
    id: '619aee71d11b2b0028c12f13',
    title: '疯狂嘉年华',
    time: '1970s',
    place: '美国',
    duration: [6, 10],
    coverUrl: cover疯狂嘉年华,
    adds: `万圣节前夜，充满了南瓜、奇装异服、苹果酒、彩色树叶、木材烟熏的时刻，当然，更少不了毛骨悚然的恐惧！`,
    labels: ['节日特供'],
  },
  {
    id: '60d1a00fe5668100285ab2e6',
    title: '大幕山',
    time: '2002',
    place: '中国乡村',
    duration: [4, 6],
    coverUrl: cover大幕山,
    adds: `湖南的小山村，没有稀奇古怪的陋习，也没有骇人听闻的阴谋，来一场愉快的乡村之旅吧！`,
    comments: '中式民俗',
  },
  {
    id: '607f44aa082ac000286d953c',
    title: '死光',
    time: '1920s',
    place: '美国',
    duration: [4, 6],
    coverUrl: cover死光,
    adds: `一场离奇的车祸，将所有人都一起搅在了在这场暴风雨之夜中。在这场无法理解的杀戮中，你们是否还能见到黎明的希望之光？`,
  },
  {
    id: '6007fcc8bb660b024e5115bf',
    title: '燃烧的星辰',
    time: '1920s',
    place: '美国/海地',
    duration: [6, 10],
    coverUrl: cover燃烧的星辰,
    adds: `万灵节将至，海地政府军和反叛军开战前最后的宁静。你来这里寻找美国富商失踪的儿子，却惊觉已经陷入了漩涡中心。最终，星辰将会熊熊燃烧。`,
    comments: '死亡率高达80%！富有挑战！',
  },
  {
    id: '6318822495ca380026fb491d',
    title: '不夜城的苍白之颜',
    time: '2010s',
    place: '日本',
    duration: [4, 6],
    coverUrl: cover不夜城的苍白之颜,
    adds: `普通的女高中生离家出走，消失在东京著名的红灯区——歌舞伎町。不要陷入这片日本最迷乱的景色，在万圣节的夜幕降临之前，将她找回来吧。`,
    comments: '日式偏交涉，可无战斗',
  },
  {
    id: '6007fcc8bb660b024e511742',
    title: '不息的渴望',
    time: '1920s',
    place: '英国',
    duration: [4, 6],
    adds: `走私犯、偷渡客与海关。新年将至，风暴将会带你回到钟声响起的古老传说之中。`,
  },
];
