export function applyPrintStyles() {
  [...document.getElementsByTagName('style')].forEach((style) => {
    style.innerHTML = style.innerHTML.replace(
      /@media print/gi,
      '@media screen /* print */'
    );
  });
}

export function resetPrintStyles() {
  [...document.getElementsByTagName('style')].forEach((style) => {
    style.innerHTML = style.innerHTML.replace(
      /@media screen \/\* print \*\//gi,
      '@media print'
    );
  });
}
