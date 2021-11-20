import { ParallaxProjection, Stage2D } from "@spearwolf/three-stages";

export default function createMainStage() {
  const stage = new Stage2D(
    new ParallaxProjection("xy|bottom-left", {
      fit: "contain",
      width: 500,
      height: 500,
      distanceToProjectionPlane: 3000,
      near: 1,
      far: 100000,
    })
  );

  stage.scene.name = "border-waves-demo";

  return stage;
}
