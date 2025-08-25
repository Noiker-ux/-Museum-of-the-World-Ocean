uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uTime;

varying float vElevation;
varying vec2 vUv;

#include ../includes/simplex2D.glsl

void main() {

    float strength = 2.0 -  (distance(vUv, vec2(0.5)));


    float mixStrength = (vElevation + 0.05) * 4.0;
    vec3 color = mix(uColorA, uColorB, mixStrength);
  
    gl_FragColor = vec4(color, strength);
    #include <colorspace_fragment>
}