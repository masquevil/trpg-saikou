<script setup lang="ts">
import PaperSection from '../components/PaperSection.vue';

import { usePC } from '../hooks/useProviders';

const pc = usePC();
</script>

<template>
  <PaperSection
    v-if="pc"
    title="村规"
    subTitle="Room Rules"
  >
    <div class="section-body">
      <p class="section-line section-line-parts">
        <span class="section-line-part"> <b>生命值</b>：体质÷5 </span>
        <span class="section-line-part"> <b>体格</b>：力量÷20-2 </span>
        <!-- <span class="section-line-part"> <b>专注力 FP</b>：幸运÷20</span> -->
      </p>
      <!-- <p class="section-line section-line-parts">
        <span class="section-line-part"> <b>DB</b>：-2 -1 0 1d4 1d6 </span>
        <span class="section-line-part"> <b>体格</b>：力量÷20-2 </span>
      </p> -->
      <!-- <p class="section-line"><b>专注战斗</b>：每战斗回合限2次，消耗1FP重投</p>
      <p class="section-line"><b>危险预警</b>：被攻击时，消耗3FP使命中难度+1</p>
      <p class="section-line"><b>援助之手</b>：消耗全部剩余FP帮队友分摊一半伤害</p> -->
      <p class="section-line">
        <b>系统学习</b
        >：勾选一个技能组(或单项才能)，包含的技能(或单项才能)基础值增加；且当包含的技能成功率大于70时，失败变为“部分成功”
      </p>
      <p class="section-line">
        <b>熟练项目</b>：子技能在点数足够时可以勾选，未勾选的子技能检定难度等级+1
      </p>
      <p class="section-line">
        <b>代替检定</b>：进行技能检定时，可以使用合理的属性检定代替。但检定完成后，该属性损失1D10
      </p>
      <p class="section-line">
        <b>准备攻击</b
        >：花一回合进行瞄准/观察，下回合第一次攻击难度变为简单，可以指定部位但不影响伤害
      </p>
      <p class="section-line">
        <b>强力打击</b>：攻击命中检定骰出困难成功时，伤害检定可以重骰一颗骰子
      </p>
      <p class="section-line">
        <b>花费属性</b>：受到伤害或者损失理智时，花费2倍的体质/意志可以使损失减半
      </p>
      <p class="section-line">
        <b>灵能</b>：（世设：近现实）技能检定极难成功，且小于神性时，可以达成一些超自然效果
      </p>
    </div>
  </PaperSection>
</template>

<style scoped lang="scss">
.section-body {
  padding: 0.4em 0.6em 0.6em;
  font-size: 0.8em;
  line-height: 1.2;
}
.section-line {
  margin-left: 1em;
  margin-bottom: 0.4em;
  text-indent: -1em;

  &:last-child {
    margin-bottom: 0;
  }
}
.section-line-parts {
  display: flex;
  gap: 2em;
  justify-content: space-between;
}
.section-line-part {
  flex: 0 1 auto;
}
</style>
