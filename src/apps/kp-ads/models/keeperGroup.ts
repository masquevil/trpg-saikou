import type { Story } from '../types/story';
import type { KeeperGroupTableRow } from '../types/keeperGroup';
import StoryModel from './story';

export default class KeeperGroupModel {
  key?: string;
  type?: string;
  name?: string;
  lists?: {
    key: string;
    title: string;
    stories: Story[];
  }[];

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
