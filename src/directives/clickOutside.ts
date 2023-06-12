import type { ObjectDirective } from 'vue';

const vClickOutside: ObjectDirective<
  HTMLElement & { _clickOutsideEvent: (event: PointerEvent) => void }
> = {
  mounted(el, binding) {
    el._clickOutsideEvent = function (event: PointerEvent) {
      if (!(el === event.target || el.contains(event.target as HTMLElement))) {
        binding.value(event, el);
      }
    };
    document.addEventListener('pointerdown', el._clickOutsideEvent);
  },
  unmounted: function unmounted(el) {
    document.removeEventListener('pointerdown', el._clickOutsideEvent);
  },
};

export default vClickOutside;
