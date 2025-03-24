export function throwDice(dice: number, times: number = 1, plus: number = 0): number {
  return Array.from({ length: times }).reduce((sum: number) => {
    const value = Math.floor(Math.random() * dice) + 1;
    return sum + value;
  }, plus);
}

export function getRatioResult<T extends string>(ratio: Record<T, number>): T {
  const value = Math.random();
  const sum = Object.values<number>(ratio).reduce((acc, cur) => acc + cur, 0);
  let sumRatio = 0;
  for (const key in ratio) {
    sumRatio += ratio[key] / sum;
    if (value < sumRatio) {
      return key;
    }
  }
  return Object.keys(ratio)[0] as T;
}

export function getRandomArrayItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}
