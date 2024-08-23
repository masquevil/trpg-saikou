export interface Story {
  id: string;
  title: string;
  time: string;
  place: string;
  duration: [number, number];
  playerNumber: [number, number];
  coverUrl: string;
  adds: string;
  comments?: string;
  labels?: string[];
  isDicecho: boolean;
  rateAvg?: number;
  validRateCount?: number;
  cnmodsAliaseId?: number;
  tags?: string[];
}

export interface StoryInfoOverrides {
  id: string;
  title: string;
  // owner: string;
  adds: string;
  comments?: string;
  time: string;
  place: string;
  duration: [number, number];
  labels?: string[];
  coverUrl?: string;
  playerNumber?: [number, number];
}
