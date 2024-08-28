import { ThrowDiceDetailOptions, ThrowDiceDetail, GroupThrowDiceDetail } from '../types/dice';

export function shuffleArray<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
export function throwDice(dice: number, times: number = 1): number {
  return Array.from({ length: times }).reduce((sum: number) => {
    const value = Math.floor(Math.random() * dice) + 1;
    return sum + value;
  }, 0);
}

function alignNumberText(number: number, max: number) {
  const maxStrLength = max.toString().length;
  const numberStr = number.toString();
  return (
    numberStr +
    Array.from({ length: maxStrLength - numberStr.length })
      .map((_) => ' ')
      .join('')
  );
}

export function throwDiceDetail(options: ThrowDiceDetailOptions): ThrowDiceDetail {
  const numberOptions = {
    dice: Number(options.dice),
    times: Number(options.times),
    pick: Number(options.pick || options.times),
    plus: Number(options.plus ?? 0),
    align: options.align,
  };
  const { dice, times, pick = times, plus = 0, align = true } = numberOptions;
  const pickTimes = pick ? Math.min(Math.abs(pick), times) : times;
  const detail = Array.from({ length: times }).map(() => {
    return Math.floor(Math.random() * dice) + 1;
  });

  // 计算结果
  const removeCount = times - pickTimes;
  const usedDetail = [...detail];
  const removedDetail = [];
  for (let i = 0; i < removeCount; i++) {
    const index = usedDetail.indexOf(Math[pick > 0 ? 'min' : 'max'](...detail));
    removedDetail.push(...usedDetail.splice(index, 1));
  }
  const result = usedDetail.reduce((sum: number, cur: number) => sum + cur, plus);

  // 生成文本
  const totalMax = dice * pickTimes + plus;
  const text = [
    `${align ? alignNumberText(result, totalMax) : result} =`,
    removeCount
      ? `(${detail.map((d) => `${align ? alignNumberText(d, dice) : d}`).join(',')})`
      : '',
    usedDetail.join(' + '),
    plus ? `(+ ${plus})` : '',
  ]
    .filter((t) => t)
    .join(' ');

  return {
    result,
    text,
    detail,
    detailUsed: usedDetail,
    detailRemoved: removedDetail,
  };
}

export function getGroupThrowDiceTitle(
  nickName: string = '',
  groupCount: number,
  options: ThrowDiceDetailOptions,
) {
  const numberOptions = {
    dice: Number(options.dice),
    times: Number(options.times),
    pick: Number(options.pick),
    plus: Number(options.plus ?? 0),
  };
  const { times, dice, pick, plus } = numberOptions;
  return [
    nickName ? `${nickName}的` : '',
    `${groupCount}次`,
    [`${times}d`, dice, pick ? `p${pick}` : '', plus ? ` + ${plus}` : ''].join(''),
  ]
    .filter((t) => t)
    .join(' ');
}

export function groupThrowDiceDetail(
  groupCount: number,
  options: ThrowDiceDetailOptions,
  groupOptions?: {
    sort?: 'asc' | 'desc';
  },
): GroupThrowDiceDetail {
  const details = Array.from({ length: groupCount }).map(() => {
    return throwDiceDetail(options);
  });
  const { sort = 'desc' } = groupOptions || {};
  if (sort) {
    details.sort((a, b) => {
      return sort === 'asc' ? a.result - b.result : b.result - a.result;
    });
  }

  const text = details.map((detail) => detail.text).join('\n');
  return {
    text,
    details,
  };
}
