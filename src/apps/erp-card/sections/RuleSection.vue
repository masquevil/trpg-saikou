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
      <p class="section-line"><b>生命</b>：体质÷2</p>
      <p class="section-line">
        <b>DB</b>：1 1d3 2d3 2d4 2d6 <b style="margin-left: 2em">斗殴基础值</b>：0
      </p>
      <p class="section-line"><b>武器伤害</b>：骰子数量翻倍（比如匕首2d4）</p>
      <p class="section-line">
        <b>准备攻击</b
        >：花一回合进行瞄准/观察，下回合第一次攻击难度变为简单，可以指定部位但不影响伤害
      </p>
      <p class="section-line">
        <b>越战越勇</b>：每一回合的成功命中都会使你成功率临时+10，直到你转火或失手
      </p>
      <p class="section-line">
        <b>强力打击</b>：攻击命中检定骰出困难成功时，伤害检定可以重骰一次任意数量的骰子
      </p>
      <p class="section-line">
        <b>代替检定</b>：进行技能检定时，可以使用合理的属性检定代替。但检定完成后，该属性损失1D10
      </p>
      <p class="section-line">
        <b>花费属性</b>：受到伤害或者损失理智时，花费2倍的体质或者意志可以使伤害减半
      </p>
      <p class="section-line">
        <b>灵能</b>：技能检定极难成功，且小于CM时，可以达成一些超自然效果（如同你释放了一个法术）
      </p>
      <p class="section-line"><b>光荣谢幕</b>：死亡时可以执行一个带有奖励骰的动作</p>
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
}
</style>
