
vec4 makeBillboard(in mat4 modelViewMatrix, in vec3 cameraPosition, in vec3 billboardPosition, in vec2 billboardSize, in vec2 vertexPosition) {
  vec3 look = normalize(cameraPosition - billboardPosition);
  vec3 cameraUp = vec3(modelViewMatrix[0].y, modelViewMatrix[1].y, modelViewMatrix[2].y);
  vec3 billboardRight = cross(cameraUp, look);
  vec3 billboardUp = cross(look, billboardRight);

  return vec4(billboardPosition
              + billboardRight * vertexPosition.x * billboardSize.x
              + billboardUp * vertexPosition.y * billboardSize.y,
              1.0);
}

// clang-format off
#pragma glslify: export(makeBillboard)
// clang-format on
