import { reactive, nextTick } from 'vue';
import { toJpeg } from 'html-to-image';

interface PaperEls {
  front: HTMLElement;
  back: HTMLElement;
}
interface PaperImages {
  front?: string;
  back?: string;
}
type PaperKey = keyof PaperEls;

async function printEl(el: HTMLElement) {
  if (!el) return '';
  return await toJpeg(el, {
    canvasWidth: 210 * 8,
    canvasHeight: 297 * 8,
    pixelRatio: 1,
    quality: 0.5,
    skipFonts: true,
  });
}

async function printPaperImage({
  paperEls,
  paperKey,
}: {
  paperEls: PaperEls;
  paperKey?: PaperKey;
}) {
  return new Promise<PaperImages>((resolve) => {
    nextTick(async () => {
      const paperImages: PaperImages = {};
      // do print
      if (paperKey === undefined || paperKey === 'front') {
        paperImages.front = await printEl(paperEls.front);
      }
      if (paperKey === undefined || paperKey === 'back') {
        paperImages.back = await printEl(paperEls.back);
      }
      resolve(paperImages);
    });
  });
}

export default function usePrintPaper(paperEls: Partial<PaperEls>) {
  const paperImages = reactive({
    front: '',
    back: '',
  });

  async function printPaper(paperKey?: PaperKey) {
    if (!paperEls.front || !paperEls.back) throw 'Setup Error: `paperEls` not exists';

    return printPaperImage({
      paperEls: paperEls as PaperEls,
      paperKey,
    }).then((newImages) => {
      Object.assign(paperImages, newImages);
      return paperImages;
    });
  }

  return {
    paperImages,
    printPaper,
  };
}
