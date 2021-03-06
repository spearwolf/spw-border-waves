import { css, html, LitElement } from "lit";
import { Display, getContentAreaSize } from "@spearwolf/display3";
import { BorderWavesApp } from "./BorderWavesApp";

const CustomProperties = {
  Keys: ["color", "alignBorder"],
  Style: {
    color: "--border-waves-color",
    alignBorder: "--border-waves-align-border",
  },
  Setter: {
    color: "setColor",
    alignBorder: "setAlignBorder",
  },
};

const readStyleValue = (value, callbackFn) => {
  if (value != null) {
    if (typeof value === "string") {
      value = value.trim();
      if (value === "") {
        return false;
      }
    }
    if (callbackFn) {
      callbackFn(value);
    }
    return true;
  }
  return false;
};

export class BorderWavesElement extends LitElement {
  static properties = {
    color: { type: String },
    alignBorder: { type: String, attribute: "align-border" },
    waveSpeed: { type: Number, attribute: "wave-speed" },
    waveFrequency: { type: Number, attribute: "wave-frequency" },
    initialSeed: { type: Number, attribute: "initial-seed" },
  };

  static get styles() {
    return css`
      :host {
        display: inline-block;
        position: relative;
        overflow: hidden;
      }

      .canvasContainer {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
    `;
  }

  constructor() {
    super();
    this.borderWaves = new BorderWavesApp();
  }

  get color() {
    return this.borderWaves.getColor();
  }

  set color(color) {
    this.#setProperty("color", color);
  }

  get alignBorder() {
    return this.borderWaves.getAlignBorder() ?? "top";
  }

  set alignBorder(alignBorder) {
    this.#setProperty("alignBorder", alignBorder);
  }

  get waveSpeed() {
    return this.borderWaves.waveSpeed;
  }

  set waveSpeed(waveSpeed) {
    this.borderWaves.waveSpeed = waveSpeed;
  }

  get waveFrequency() {
    return this.borderWaves.getWaveFrequency();
  }

  set waveFrequency(waveFrequency) {
    this.borderWaves.setWaveFrequency(waveFrequency);
  }

  get initialSeed() {
    return this.borderWaves.initialSeed;
  }

  set initialSeed(initialSeed) {
    this.borderWaves.initialSeed = initialSeed;
  }

  render() {
    return html`<div class="canvasContainer"></div>`;
  }

  connectedCallback() {
    super.connectedCallback();
    // TODO restart?
    console.debug("[connectedCallback]", this);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.threeDisplay?.stop();
    // TODO Display.dispose()
    console.debug("[disconnectedCallback]", this);
  }

  firstUpdated() {
    super.firstUpdated();

    this.threeDisplay = new Display(
      this.renderRoot.querySelector(".canvasContainer"),
      {
        resizeTo: () => {
          const { width, height } = getContentAreaSize(
            this,
            this.#getComputedStyle(true)
          );
          return [width, height];
        },
        preserveDrawingBuffer: true,
      }
    );

    this.threeDisplay.on("frame", () => {
      const style = this.#getComputedStyle();
      this.#updateCustomPropertiesStyle(style);
    });

    this.threeDisplay.on(this.borderWaves);

    this.threeDisplay.start();
  }

  #lastComputedStyle = undefined;

  #getComputedStyle = (update = false) => {
    if (update || this.#lastComputedStyle == null) {
      this.#lastComputedStyle = getComputedStyle(this, null);
    }
    return this.#lastComputedStyle;
  };

  #setPropertyValue = (propKey, value) => {
    this.borderWaves[CustomProperties.Setter[propKey]](value);
  };

  #propertiesWithPrecedence = new Set();

  #setProperty = (propKey, propValue) => {
    if (
      !readStyleValue(propValue, (value) => {
        this.#setPropertyValue(propKey, value);
        this.#propertiesWithPrecedence.add(propKey);
      })
    ) {
      this.#propertiesWithPrecedence.delete(propKey);
    }
  };

  #updateCustomPropertiesStyle(style) {
    for (const propKey of CustomProperties.Keys) {
      const hasPrecedenceValue = this.#propertiesWithPrecedence.has(propKey);
      if (!hasPrecedenceValue) {
        readStyleValue(
          style.getPropertyValue(CustomProperties.Style[propKey]),
          (value) => {
            this.#setPropertyValue(propKey, value);
          }
        );
      }
    }
  }
}

customElements.define("spw-border-waves", BorderWavesElement);
