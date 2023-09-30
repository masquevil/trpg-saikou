import type {
  ImageLabel,
  ImageLabelData,
  SdImageData,
} from '@/types/coc-card/sdAvatar';

import {
  SdAvatarDomain,
  SdAvatarShinePath,
  SdAvatarOutputPath,
  colorMap,
} from '@/constants/coc-card/sdAvatar';

import { shuffleArray } from '@/utils/random';

type CallbackImageDatas = Record<string, SdImageData>;
interface CallbackData {
  names: string[];
  data: CallbackImageDatas;
}

interface ResponseJson {
  version: number;
  imageLabels: ImageLabelData;
}

interface SourceFields {
  sex?: string;
  age?: string;
  description?: string;
}

const ImageLabelValues: ImageLabel[] = [
  // age
  'young',
  'old',
  // sex
  'female',
  'male',
  // hair style
  'long hair',
  'short hair',
  'back hair',
  'ponytail hair',
  // hair color
  'white hair',
  'black hair',
  'red hair',
  'yellow hair',
  'brown hair',
  'purple hair',
  'blue hair',
  'green hair',
  'pink hair',
  // eye color
  'black eyes',
  'red eyes',
  'yellow eyes',
  'brown eyes',
  'purple eyes',
  'blue eyes',
  'green eyes',
  'pink eyes',
];
const ImageLabelBinaryValues = new Map<ImageLabel, number>(
  ImageLabelValues.map((value, index) => [value, 2 ** index])
);

let initStatus: 'init' | 'pending' | 'finished' = 'init';
let imageNames: string[] = [];
let imageDatas: CallbackImageDatas = {};
const onLoadCallbacks: ((data: CallbackData) => void)[] = [];

export function imageLabelsToBinary(labels: ImageLabel[]): number {
  let binary = 0;
  for (const label of labels) {
    binary |= ImageLabelBinaryValues.get(label)!;
  }
  return binary;
}
export function imageBinaryToLabels(binary: number): ImageLabel[] {
  const labels: ImageLabel[] = [];
  for (const [label, value] of ImageLabelBinaryValues) {
    if (binary & value) {
      labels.push(label);
    }
  }
  return labels;
}

export async function initSdAvatars(): Promise<CallbackData> {
  if (initStatus === 'finished')
    return {
      names: imageNames,
      data: imageDatas,
    };

  if (initStatus === 'pending') {
    return new Promise<CallbackData>((resolve) => {
      onLoadCallbacks.push(resolve);
    });
  }

  initStatus = 'pending';

  const response = await fetch(`${SdAvatarDomain}${SdAvatarShinePath}`);
  const data = (await response.json()) as ResponseJson;
  imageNames = Object.keys(data.imageLabels);
  imageDatas = imageNames.reduce<CallbackImageDatas>((prev, name) => {
    const labels = data.imageLabels[name];
    const binary = imageLabelsToBinary(data.imageLabels[name]);
    const url = `${SdAvatarDomain}${SdAvatarOutputPath}/${name}.jpg`;
    prev[name] = {
      name,
      url,
      labels,
      binary,
    };
    return prev;
  }, {});
  initStatus = 'finished';

  while (onLoadCallbacks.length) {
    const callback = onLoadCallbacks.shift()!;
    callback({
      names: imageNames,
      data: imageDatas,
    });
  }

  return {
    names: imageNames,
    data: imageDatas,
  };
}

function getSourceLabels({
  sex = '',
  age = '',
  description = '',
}: SourceFields): ImageLabel[] {
  const labels: ImageLabel[] = [];

  /* sex */
  if (sex.match(/女|girl|female/)) labels.push('female');
  if (
    sex.match(/男|boy/) ||
    (sex.includes('male') && !sex.includes('female'))
  ) {
    labels.push('male');
  }

  /* age */
  const ageNumber = Number(age);
  if (age) {
    if (ageNumber < 40) labels.push('young');
    else labels.push('old');
  }

  /* description */
  // hair style
  if (description.match(/长发|long hair/)) labels.push('long hair');
  if (description.match(/短发|short hair/)) labels.push('short hair');
  if (description.match(/马尾|ponytail/)) labels.push('ponytail hair');
  if (description.match(/背头|盘发|back hair/)) labels.push('back hair');
  // hair color
  for (const styleCN of description.matchAll(/(.)色?头?发/g)) {
    const style = styleCN[1];
    const color = colorMap[style];
    if (color) {
      labels.push(`${color} hair`);
    }
  }
  for (const styleEN of description.matchAll(
    /(white|black|red|yellow|brown|purple|blue|green|pink) hair/g
  )) {
    const style = styleEN[1];
    labels.push(`${style} hair`);
  }
  // eye color
  for (const styleCN of description.matchAll(/(.)色?(?:眼|瞳)/g)) {
    const style = styleCN[1];
    const color = colorMap[style];
    if (color) {
      labels.push(`${color} eyes`);
    }
  }
  for (const styleEN of description.matchAll(
    /(black|red|yellow|brown|purple|blue|green|pink) eye(?:s)/g
  )) {
    const style = styleEN[1];
    labels.push(`${style} eyes`);
  }

  return labels;
}

export async function getSuggestImages(
  sourceFields: SourceFields
): Promise<SdImageData[]> {
  const sourceLabels = getSourceLabels(sourceFields);
  const sourceBinary = imageLabelsToBinary(sourceLabels);

  const matchedImages: SdImageData[][] = [];
  const suggestImages: SdImageData[] = [];

  const { names, data } = await initSdAvatars();
  names.forEach((name) => {
    const imageData = data[name];
    const matchValue = imageData.binary & sourceBinary;
    const matchLevel = ImageLabelValues.filter(
      (label) => matchValue & ImageLabelBinaryValues.get(label)!
    ).length;
    matchedImages[matchLevel] ??= [];
    matchedImages[matchLevel].push(imageData);
  });
  matchedImages.reverse().forEach((images) => {
    if (suggestImages.length >= 30) return;
    suggestImages.push(...shuffleArray(images));
  });

  return suggestImages;
}
