import type { KeeperGroupTableRow, KeeperGroupField_List } from '../types/keeperGroup';
import StoryModel from './story';

export default class KeeperGroupModel {
  key?: string;
  type?: string;
  name?: string;
  lists?: KeeperGroupField_List[];

  constructor(row: KeeperGroupTableRow) {
    this.key = row.key;
    this.type = row.type;
    this.name = row.name;
    this.lists = row.lists.map((list) => {
      return {
        key: list.key,
        title: list.title,
        stories: StoryModel.getStoriesByKeyOrTitle(list.stories),
      };
    });
  }
}
