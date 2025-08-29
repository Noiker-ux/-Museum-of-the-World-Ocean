uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uTime;
uniform sampler2D uWaterTexture;

varying vec2 vUv;

#include ../includes/perlin2D.glsl

void main() {
    float strength = step(0.9, sin(cnoise(vUv * uTime) * 20.0));

    gl_FragColor = vec4(vec3(strength), 1.0);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}