export interface KeeperGroupTableRow {
  key: string;
  type: 'personal' | 'group';
  name: string;
  lists: {
    key: string;
    title: string;
    // [id, title], 任选一个即可
    stories: [string?, string?][];
  }[];
}
