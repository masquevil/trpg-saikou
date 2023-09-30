<script setup lang="ts">
import IssueRow from './IssueRow.vue';
</script>

<template>
  <div>
    <div class="guide-group-title">基本说明：</div>
    <ol class="guide-ol">
      <li>COC 7版人物卡，也是在线车卡工具。</li>
      <li>
        可以生成 A4 纸大小的正反面两张图。也可以直接生成空白卡，打印后手写。
      </li>
      <li>除了生成图片外，也可以直接打印（Ctrl + P）</li>
      <li>推荐 PC 端使用，移动端存在兼容性问题。</li>
      <li>提供了预设的 1000+ 头像，也可以自定义。</li>
    </ol>
    <div class="guide-group-title">以下为目前已有的功能介绍：</div>
    <ol class="guide-ol">
      <li>Roll 点：随机生成一组属性。</li>
      <li>翻面：正面为调查员属性，背面为调查员故事。</li>
      <li>
        保存：生成 A4 纸大小的正反面两张图，可以手动保存。
        还有当前人物卡全部数据的 txt，可以通过“导入”再次使用。
      </li>
      <li>
        快速年龄修正：根据你的年龄自动进行教育成长判定，同时按照规则随机调整基础属性。
      </li>
      <li>重置人物卡：清空当前填写的全部内容。</li>
      <li>
        <div>导入/导出数据：</div>
        <ol class="guide-ol">
          <li>导出：将当前所填写的全部内容压缩后以文本形式储存到本地。</li>
          <li>导入：将数据导入回来继续修改。</li>
        </ol>
      </li>
      <li>
        开启灌铅模式：每次 Roll 点会随机 5 次数据，选取其中最高的一次结果。
      </li>
      <li>
        职业列表：展示所有预设职业，可以快速选择职业。可以看到每个职业根据当前属性计算出的职业点数。
      </li>
      <li>
        职业列表：展示所有预设武器，可以快速选择武器。点击“使用”后点击数字将这个武器填到对应的位置。
      </li>
    </ol>
    <div class="guide-group-title">其它说明：</div>
    <ol class="guide-ol">
      <li>支持 iOS 设备的“添加到主屏幕”功能。</li>
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
