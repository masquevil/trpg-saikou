<script setup lang="ts">
import { ref, computed } from 'vue';
import { ElMessage } from 'element-plus';
import copy from 'copy-to-clipboard';

import { Dessert } from '@element-plus/icons-vue';

import ControlButton from '@/components/coc-card/ControlButton.vue';
import ControlDialog from '@/components/coc-card/ControlDialog.vue';
import { usePC, useViewData } from '@/hooks/useCOCCardProviders';
import { getDiceMaidStString } from '@/models/coc-card/skill.ts';

const pc = usePC();
const viewData = useViewData();
const str = computed(
  () =>
    '.st ' + (pc && viewData ? getDiceMaidStString(pc.value, viewData) : ''),
);

const visible = ref(false);

function onFocus(event: FocusEvent) {
  (event.target as HTMLTextAreaElement)?.select();
}
function onCopyButtonClick() {
  copy(str.value);
  ElMessage.success('已复制录卡指令');
}
</script>

<template>
  <ControlButton
    label="骰娘相关"
    :icon="Dessert"
    @click="visible = true"
  />
  <ControlDialog
    title="骰娘相关"
    v-model="visible"
  >
    <div class="modal-body">
      <div class="group">
        <div class="label">
          <div>录卡指令</div>
          <div>
            <a
              class="link"
              @click="onCopyButtonClick"
              >复制</a
            >
          </div>
        </div>
        <el-input
          type="textarea"
          :rows="5"
          :value="str"
          readonly
          @focus="onFocus"
        />
      </div>
    </div>
  </ControlDialog>
</template>

<style scoped lang="scss">
.modal-body {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.label {
  font-weight: bold;
  display: flex;
  gap: 8px;
}
</style>
