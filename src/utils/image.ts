export function getImageSize(url: string) {
  return new Promise<{ width: number; height: number }>((resolve) => {
    const img = document.createElement('img');
    img.onload = () => {
      img.remove();
      resolve({
        width: img.width,
        height: img.height,
      });
    };
    img.src = url;
  });
}

export function downloadImage(url: string, title: string = 'image') {
  const a = document.createElement('a');
  a.href = url;
  a.download = title;
  a.click();
}
