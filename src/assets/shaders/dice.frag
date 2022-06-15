/**
 * @fileoverview Defines cuboid fragment shader.
 * @copyright Shingo OKAWA 2022
 */

precision mediump float;
 
uniform float time;
 
varying vec2 vUv;

vec4 hallucinate(vec2 coord, vec2 z, float t) {
    vec4 p = vec4(coord, z.yx * 1.5);
    return vec4(1., 1., 1., 1.);
}
 
void main(){
  vec2 fuv = -1.0 + 2.0 * vUv;
  float r = abs(sin(fuv.s * fuv.t + time / 5.0));
  float g = abs(sin(fuv.s * fuv.t + time / 4.0));
  float b = abs(sin(fuv.s * fuv.t + time / 3.0));
  gl_FragColor = vec4(r,g,b,1.0);
}
