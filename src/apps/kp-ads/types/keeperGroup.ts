import type { Story } from './story';

export interface KeeperGroupTableRow {
  key: string;
  type: 'personal' | 'group';
  name: string;
  lists: KeeperGroupTableField_List[];
}

export interface KeeperGroupTableField_List {
  key: string;
  title: string;
  // [id, title], 任选一个即可
  stories: [string?, string?][];
}

export interface KeeperGroupField_List {
  key: string;
  title: string;
  stories: Story[];
}
