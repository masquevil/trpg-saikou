import { ref } from 'vue';

export function useToggle(defaultValue: boolean = false) {
  const value = ref(defaultValue);

  return {
    value,
    setTrue() {
      value.value = true;
      console.log('xxx a', 1);
    },
    setFalse() {
      value.value = false;
      console.log('xxx a', 0);
    },
    setToggle() {
      value.value = !value.value;
    },
  };
}
