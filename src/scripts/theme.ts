function applyDark(): void {
  document.firstElementChild?.setAttribute("data-theme", "dark");

  const bgColor = window.getComputedStyle(document.body).backgroundColor;
  document
    .querySelector("meta[name='theme-color']")
    ?.setAttribute("content", bgColor);
}

applyDark();

document.addEventListener("astro:after-swap", applyDark);

document.addEventListener("astro:before-swap", event => {
  const bgColor = document
    .querySelector("meta[name='theme-color']")
    ?.getAttribute("content");
  if (bgColor) {
    (event as typeof event & { newDocument: Document }).newDocument
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", bgColor);
  }
});
