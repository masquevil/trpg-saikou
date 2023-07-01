export function throwDice(dice: number, times: number = 1, plus: number = 0) {
  return Array.from({ length: times }).reduce((sum: number) => {
    const value = Math.floor(Math.random() * dice) + 1;
    return sum + value;
  }, plus);
}

export function growPoint(origin: number, times: number = 1): number {
  if (times < 1) return origin;
  let result = origin;
  const judge = throwDice(100);
  if (judge > origin) {
    result += throwDice(10);
  }
  return growPoint(result, times - 1);
}
