uniform float uTime;

varying float vElevation;
varying vec2 vUv;


#include ../includes/simplex3D.glsl

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    float elevation = sin(modelPosition.x * 2.0 + uTime * 0.75) *
                  sin(modelPosition.z * 1.5 + uTime * 0.75) *
                  0.1;
    elevation -= abs(snoise(vec3(modelPosition.xz * 1.0, uTime * 0.2)) * 0.15);
    modelPosition.y += elevation;


    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;

    // Varyings
    vUv = uv;
    vElevation = elevation;
}