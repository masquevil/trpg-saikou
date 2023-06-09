import { onMounted, onUnmounted } from 'vue';

export default function useTheme(name: 'dark' | 'light') {
  onMounted(() => {
    document.documentElement.classList.add(`theme-${name}`);
  });
  onUnmounted(() => {
    document.documentElement.classList.remove(`theme-${name}`);
  });
}
