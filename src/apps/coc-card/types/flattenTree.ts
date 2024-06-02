export interface FlattenTreeDataItem {
  label: string;
  key: string;
}

export type FlattenTreeData = (FlattenTreeDataItem & {
  children: FlattenTreeDataItem[];
})[];
