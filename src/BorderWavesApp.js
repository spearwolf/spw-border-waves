import { createEffect } from "@spearwolf/signalize";
import {
  BufferAttribute,
  BufferGeometry,
  Color,
  Mesh,
  OrthographicCamera,
  RawShaderMaterial,
  Scene,
  Vector2,
  Vector4,
} from "three";
import { defineSignals } from "./defineSignals";
import dpr from "./dpr";
import { debug } from "./log";

const vertexShader = `precision highp float;
attribute vec2 position;

void main() {
  gl_Position = vec4(position, 1.0, 1.0);
}`;

const fragmentShader = `precision highp float;
uniform vec4 uColor;
uniform vec2 uResolution;
uniform float uDevicePixelRatio;
uniform float uTime;
uniform vec2 uWaveFrequency;

#define PI 3.14159265359
#define HALF_PI 1.570796326794896

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution / uDevicePixelRatio;
  float waveFrequency = PI * uWaveFrequency.x * 2.0 * uResolution.x / uWaveFrequency.y;
  float wave0 = 0.5 + sin(uTime + uv.x * cos(-uTime / 13.0) * waveFrequency + HALF_PI) / 2.0;
  float wave1 = 0.5 + sin(cos(uv.x) * sin(uTime / 10.0) * waveFrequency + HALF_PI * sin(uTime / 3.0)) / 2.0;
  float wave = (wave0 + wave1) / 2.0;
  if (wave > uv.y) {
    discard;
  }
  gl_FragColor = vec4(uColor.rgb, 1.0);
}`;

function createFullscreenTriangle() {
  const geometry = new BufferGeometry();
  const vertices = new Float32Array([-1.0, -1.0, 3.0, -1.0, -1.0, 3.0]);
  geometry.setAttribute("position", new BufferAttribute(vertices, 2));

  const material = new RawShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uColor: { value: new Vector4() },
      uResolution: { value: new Vector2(1, 1) },
      uDevicePixelRatio: { value: dpr() },
      uTime: { value: 0.0 },
      uWaveFrequency: { value: new Vector2(1.2, 1000) }, // for each 1000px we want to have 1.2x waves
    },
  });

  const mesh = new Mesh(geometry, material);
  mesh.frustumCulled = false;

  return mesh;
}

export class BorderWavesApp {
  constructor() {
    this.scene = new Scene();
    this.camera = new OrthographicCamera();

    this.triangle = createFullscreenTriangle();
    this.scene.add(this.triangle);

    // TODO
    // - read color from css properties
    // - add signals/properties for wave-frequency and wave-speed
    defineSignals(this, "Color");

    createEffect(() => {
      const col = new Color(this.getColor());
      this.triangle.material.uniforms.uColor.value = new Vector4(
        col.r,
        col.g,
        col.b,
        1.0
      );
    });
  }

  async init({ display }) {
    this.display = display;

    debug("BorderWavesApp.init", this);
  }

  resize({ width, height }) {
    const { uniforms } = this.triangle.material;
    uniforms.uResolution.value = new Vector2(width, height);
    uniforms.uDevicePixelRatio.value = dpr();
  }

  frame({ renderer, now }) {
    // TODO add pause-offset to now/delta-time.. (switch browser tabs issue)
    this.triangle.material.uniforms.uTime.value = now * 0.5;

    renderer.render(this.scene, this.camera);
  }
}
