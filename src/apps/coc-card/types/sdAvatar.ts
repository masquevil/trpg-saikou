export type ImageLabel = string;
export type ImageLabelData = Record<string, ImageLabel[]>;

export interface SdImageData {
  name: string;
  url: string;
  labels: string[];
  binary: number;
}
