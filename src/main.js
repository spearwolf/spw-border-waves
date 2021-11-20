import { Vector3 } from "three";
import fooShader from "./foo.glsl";
import "./element/BorderWavesElement";

const a = () => Promise.resolve("ho");

const sayHello = async () => {
  const result = await a();

  console.log("hej", result);
};

sayHello();

console.log(fooShader);

console.log("v3", new Vector3(1, 2, 3).toArray());
