<script setup lang="ts">
import d2 from '../../../assets/icons/dice/d2.svg?raw';
import d3 from '../../../assets/icons/dice/d3.svg?raw';
import d4 from '../../../assets/icons/dice/d4.svg?raw';
import d6 from '../../../assets/icons/dice/d6.svg?raw';
import d8 from '../../../assets/icons/dice/d8.svg?raw';
import d10 from '../../../assets/icons/dice/d10.svg?raw';
import d12 from '../../../assets/icons/dice/d12.svg?raw';
import d20 from '../../../assets/icons/dice/d20.svg?raw';
import d100 from '../../../assets/icons/dice/d100.svg?raw';

function getPath(svg: string): string {
  const match = svg.match(/\bd="([^"]+)"/);
  if (!match) throw new Error('Dice SVG asset is missing its path');
  return match[1]!;
}

const dicePaths = {
  2: getPath(d2),
  3: getPath(d3),
  4: getPath(d4),
  6: getPath(d6),
  8: getPath(d8),
  10: getPath(d10),
  12: getPath(d12),
  20: getPath(d20),
  100: getPath(d100),
} as const;

type DiceSides = keyof typeof dicePaths;

interface Props {
  sides: DiceSides;
}

const props = defineProps<Props>();
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path
      fill-rule="evenodd"
      :d="dicePaths[props.sides]"
    />
  </svg>
</template>
