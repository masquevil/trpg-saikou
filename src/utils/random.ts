import { ThrowDiceDetail, GroupThrowDiceDetail } from '../types/dice';

export function shuffleArray<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// (5)d(6)+(3)
export function throwDiceDetail(times: number, dice: number, plus: number = 0): ThrowDiceDetail {
  const detail = Array.from({ length: times }).map(() => {
    return Math.floor(Math.random() * dice) + 1;
  });
  const result = detail.reduce((sum: number, cur: number) => sum + cur, plus);
  return {
    result,
    detail,
    text: `${detail.join(' + ')}${plus ? ` (+ ${plus})` : ''} = ${result}`,
  };
}

export function groupThrowDiceDetail(
  nickName: string,
  groupCount: number,
  ...args: Parameters<typeof throwDiceDetail>
): GroupThrowDiceDetail {
  const details = Array.from({ length: groupCount }).map(() => {
    return throwDiceDetail(...args);
  });
  const title = `${nickName}的 ${groupCount} 次 ${args[0]}D${args[1]}${args[2] ? ` + ${args[2]}` : ''}：`;
  return {
    text: `${title}\n${details.map((detail) => detail.text).join('\n')}`,
    details,
  };
}
