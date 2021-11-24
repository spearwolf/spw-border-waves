import { css, html, LitElement } from "lit";
import { Display } from "@spearwolf/three-display";
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
  };

  static get styles() {
    return css`
      :host {
        display: inline-block;
        position: relative;
        overflow: hidden;
        pointer-events: none;
        user-select: none;
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
        resizeTo: () => this.getContentBoxSize(this.#getComputedStyle(true)),
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

  getContentBoxSize(style) {
    const { width, height } = this.getBoundingClientRect();

    const verticalMargin =
      parseInt(style.getPropertyValue("border-top-width") || "0", 10) +
      parseInt(style.getPropertyValue("border-bottom-width") || "0", 10) +
      parseInt(style.getPropertyValue("padding-top") || "0", 10) +
      parseInt(style.getPropertyValue("padding-bottom") || "0", 10);
    const horizontalMargin =
      parseInt(style.getPropertyValue("border-right-width") || "0", 10) +
      parseInt(style.getPropertyValue("border-left-width") || "0", 10) +
      parseInt(style.getPropertyValue("padding-left") || "0", 10) +
      parseInt(style.getPropertyValue("padding-right") || "0", 10);

    return [
      Math.floor(width - horizontalMargin),
      Math.floor(height - verticalMargin),
    ];
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
