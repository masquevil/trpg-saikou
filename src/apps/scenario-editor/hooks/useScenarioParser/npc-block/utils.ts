// 辅助函数：判断是否为键值对条目
export function findEntry(line: string) {
  const entry = line.trim().split(':');
  const key = entry[0];
  const value = entry.slice(1).join(':');
  const isEntry = entry.length > 1 && ['', 'name', 'role', 'avatar', 'summary'].indexOf(key) !== -1;
  return {
    isEntry,
    key: isEntry ? key : '',
    value: isEntry ? value.trim() : '',
  };
}
