import { Display } from "@spearwolf/three-display";

export default (hostEl, canvasContainerEl, demo) => {
  const display = new Display(canvasContainerEl, {
    resizeTo: () => hostEl.getContentBoxSize(),
  });

  display.on(demo);
  display.start();

  return display;
};
