import { h, Text } from 'vue';
import { Peer } from 'peerjs';
import { ElMessage, ElMessageBox } from 'element-plus';

export function setupPeer() {
  const peer = new Peer();

  const closeTimeout = setTimeout(() => {
    ElMessage.error('连接超时，请重试！');
    peer.destroy();
  }, 20 * 1000);

  peer.on('open', () => {
    clearTimeout(closeTimeout);
  });

  peer.on('close', () => {
    clearTimeout(closeTimeout);
  });

  peer.on('error', (err) => {
    ElMessageBox({
      title: '与 peer server 连接失败',
      message: h('div', { style: { whiteSpace: 'pre-line' } }, [
        h('p', null, `错误类型：${err.type}`),
        h('p', null, err.message),
        h('p', null, [
          h(Text, null, '可以在'),
          h(
            'a',
            { href: 'https://github.com/masquevil/trpg-saikou/issues', target: '_blank' },
            'Github Issue',
          ),
          h(Text, null, '上反馈你的问题。'),
        ]),
      ]),
    });
  });

  return peer;
}
