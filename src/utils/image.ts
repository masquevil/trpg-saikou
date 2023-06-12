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
