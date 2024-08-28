interface VoiceConfig {
  lang?: string;
  // 音量
  vol?: number;
  // 语速
  rate?: number;
  // 音高
  pitch?: number;
}

window.speechSynthesis.getVoices();

// 函数
export default function speak(text: string, config: VoiceConfig = {}) {
  const { lang = 'zh-CN', vol = 1, rate = 1, pitch = 1 } = config;
  // 播报前取消之前的播报
  window.speechSynthesis.cancel();
  // 实例化播报内容
  const instance = new SpeechSynthesisUtterance(text);
  instance.text = text;
  instance.lang = lang;
  instance.volume = vol;
  instance.rate = rate;
  instance.pitch = pitch;
  // 选择语音
  const listArr = window.speechSynthesis.getVoices();
  const preferredVoice = listArr.find((item) => item.name === 'Google 普通话（中国大陆）');
  if (preferredVoice) {
    instance.voice = preferredVoice;
  }
  window.speechSynthesis.speak(instance);
  // instance.addEventListener("end", () => {});
}
