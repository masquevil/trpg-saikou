import type { ObjectDirective } from 'vue';

const vClickOutside: ObjectDirective<
  HTMLElement & { _clickOutsideEvent: (event: Event) => void }
> = {
  mounted(el, binding) {
    el._clickOutsideEvent = function (event: Event) {
      if (!(el === event.target || el.contains(event.target as HTMLElement))) {
        binding.value(event, el);
      }
    };
    document.addEventListener('click', el._clickOutsideEvent);
    document.addEventListener('focus', el._clickOutsideEvent, true);
  },
  unmounted: function unmounted(el) {
    document.removeEventListener('click', el._clickOutsideEvent);
    document.removeEventListener('focus', el._clickOutsideEvent, true);
  },
};

export default vClickOutside;
