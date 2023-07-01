import { ref } from 'vue';

export function useToggle(defaultValue: boolean = false) {
  const value = ref(defaultValue);

  return {
    value,
    setTrue() {
      value.value = true;
    },
    setFalse() {
      value.value = false;
    },
    setToggle() {
      value.value = !value.value;
    },
  };
}
