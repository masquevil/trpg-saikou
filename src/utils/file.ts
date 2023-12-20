export function downloadFile(url: string, title: string) {
  const a = document.createElement('a');
  a.href = url;
  a.download = title;
  a.click();
}
