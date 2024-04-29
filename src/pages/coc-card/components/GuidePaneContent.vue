<script setup lang="ts">
import IssueRow from './IssueRow.vue';
</script>

<template>
  <div>
    <div class="guide-group-title">基本说明：</div>
    <ol class="guide-ol">
      <li>COC 7版人物卡，也是在线车卡工具。</li>
      <li>可以生成 A4 纸大小的正反面两张图。也可以直接生成空白卡，打印后手写。</li>
      <li>除了生成图片外，也可以直接打印（Ctrl + P）</li>
      <li>推荐 PC 端使用，移动端存在性能问题。</li>
      <li>提供了预设的 1000+ 头像，也可以自定义。</li>
    </ol>
    <div class="guide-group-title">以下为目前已有的功能介绍：</div>
    <ol class="guide-ol">
      <li>属性点：可以选择“枫笛式”、“天命式”、“购点式”多种方式加点。</li>
      <li>翻面：正面为调查员属性，背面为调查员故事。</li>
      <li>
        保存：生成 A4 纸大小的正反面两张图，可以手动保存。 还有当前人物卡全部数据的
        txt，可以通过“导入”再次使用。
      </li>
      <li>一发入魂：在属性栏中，随机生成一组属性。</li>
      <li>快速年龄修正：根据你的年龄自动进行教育成长判定，同时按照规则随机调整基础属性。</li>
      <li>重置人物卡：清空当前填写的全部内容。</li>
      <li>
        <div>导入/导出数据：</div>
        <ol class="guide-ol">
          <li>导出：将当前所填写的全部内容压缩后以文本形式储存到本地。</li>
          <li>导入：将数据导入回来继续修改。</li>
        </ol>
      </li>
      <li>骰娘相关：方便网团录卡，提供对应指令。</li>
      <li>下载空白卡 PDF：方便面团打印使用和开店使用。以后也许会加上直接生成 PDF 的功能。</li>
      <li>
        切换成功率模式：在 “全面模式”（显示所有技能的“普通|困难|极难”成功率）和
        “极简模式”（仅显示加过的技能的总成功率）两种模式之间切换。
      </li>
      <li>
        职业列表：展示所有预设职业，可以快速选择职业。可以看到每个职业根据当前属性计算出的职业点数。
      </li>
      <li>
        武器列表：展示所有预设武器，可以快速选择武器。点击“使用”后，再点击数字将这个武器填到对应的位置。
      </li>
    </ol>
    <div class="guide-group-title">其它说明：</div>
    <ol class="guide-ol">
      <li>支持 iOS 设备的“添加到主屏幕”功能，可以离线使用。</li>
      <li>
        自动保存：任何修改都会自动保存到本地存储空间中，下次打开时会尝试加载上一次编辑的人物卡。
      </li>
    </ol>
    <IssueRow />
  </div>
</template>

<style scoped lang="scss">
.guide-group-title {
  margin: 12px 0 6px;
  &:first-child {
    margin-top: 0;
  }
}
.guide-ol {
  padding-left: 1.8em;
}
</style>
