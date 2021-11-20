import createMainStage from "./createMainStage";
import { debug } from "../utils/log";

export class BorderWavesDemo {
  async init({ display }) {
    this.display = display;
    this.stage = createMainStage();

    display.renderer.setClearColor(0x6c6663);

    debug("BorderWavesDemo.init", this);
  }

  resize({ width, height }) {
    this.stage.resize(width, height);
  }

  frame({ renderer }) {
    this.stage.renderFrame(renderer);
  }
}
