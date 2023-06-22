export function applyPrintStyles() {
  [...document.getElementsByTagName('style')].forEach((style) => {
    style.innerText = style.innerText.replace(
      /@media print/gi,
      '@media screen /* print */'
    );
  });
}

export function resetPrintStyles() {
  [...document.getElementsByTagName('style')].forEach((style) => {
    style.innerText = style.innerText.replace(
      /@media screen \/\* print \*\//gi,
      '@media print'
    );
  });
}
