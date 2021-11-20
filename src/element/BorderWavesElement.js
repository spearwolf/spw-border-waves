import { css, html, LitElement } from "lit";
import { BorderWavesDemo } from "../demo/BorderWavesDemo";
import createThreeDisplay from "./createThreeDisplay";

const $color = Symbol("color");

export class BorderWavesElement extends LitElement {
  static properties = {
    color: { type: String },
  };

  static get styles() {
    return css`
      :host {
        display: inline-block;
        position: relative;
        overflow: hidden;
        min-width: 320px;
        min-height: 200px;
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

  [$color] = undefined;

  get color() {
    return this[$color];
  }

  set color(color) {
    this[$color] = src;
  }

  render() {
    return html`<div class="canvasContainer"></div>`;
  }

  connectedCallback() {
    super.connectedCallback();
    console.debug("[connectedCallback]", this);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    console.debug("[disconnectedCallback]", this);
  }

  firstUpdated() {
    super.firstUpdated();

    this.borderWaves = new BorderWavesDemo();

    this.threeDisplay = createThreeDisplay(
      this,
      this.renderRoot.querySelector(".canvasContainer"),
      this.borderWaves
    );
  }

  getContentBoxSize() {
    const { width, height } = this.getBoundingClientRect();

    const styles = getComputedStyle(this, null);
    const verticalMargin =
      parseInt(styles.getPropertyValue("border-top-width") || "0", 10) +
      parseInt(styles.getPropertyValue("border-bottom-width") || "0", 10) +
      parseInt(styles.getPropertyValue("padding-top") || "0", 10) +
      parseInt(styles.getPropertyValue("padding-bottom") || "0", 10);
    const horizontalMargin =
      parseInt(styles.getPropertyValue("border-right-width") || "0", 10) +
      parseInt(styles.getPropertyValue("border-left-width") || "0", 10) +
      parseInt(styles.getPropertyValue("padding-left") || "0", 10) +
      parseInt(styles.getPropertyValue("padding-right") || "0", 10);

    return [
      Math.floor(width - horizontalMargin),
      Math.floor(height - verticalMargin),
    ];
  }
}

customElements.define("spw-border-waves", BorderWavesElement);
